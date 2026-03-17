import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TrainList from "../components/TrainList";
import StationDrawer from "../components/StationDrawer/StationDrawer";

export default function LinesPage() {
  // Extract lineColor from the URL parameter
  const { lineColor } = useParams(); 
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null)
  
  const [arrivals, setArrivals] = useState(null);
  const [stations, setStations] = useState(null);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // If someone goes to a route without a lineColor -> exit early
    if (!lineColor) return; 

    const controller = new AbortController();
    const fetchAllData = async () => {
        setLoading(true);
        setError(null);

        try {
            // fetch both arrivals and stations of each line
            const [arrivalsResponse, stationsResponse] = await Promise.all([
                fetch(`/api/arrivals/${lineColor.toLowerCase()}`, { signal: controller.signal }),
                fetch(`/api/stations/${lineColor.toLowerCase()}`, { signal: controller.signal }),
            ]);
            if (!arrivalsResponse.ok || !stationsResponse.ok) {
                throw new Error(`MARTA API error: Arrivals ${arrivalsResponse.status}, Stations ${stationsResponse.status}`);
            }

            const arrivalsResult = await arrivalsResponse.json();
            const stationsResult = await stationsResponse.json();

            console.log("Fresh Arrivals:", arrivalsResult);
            console.log("Fresh Stations:", stationsResult);

            setArrivals(arrivalsResult);
            setStations(stationsResult)

        } catch (e) {
            if (e instanceof Error && e.name !== 'AbortError') {
                setError(e.message);
            }
        } finally {
            setLoading(false);
        }
    };

    fetchAllData();
    // if line color changes before done, abort fetch and fetch new train line data
    return () => controller.abort()
  }, [lineColor])

  return (
    <div className="w-full">
        {/* Loading State */}
        {loading && (
            <div className="flex flex-col items-center py-10">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>
                <p className="mt-4 font-sans">Checking Marta Schedules...</p>
            </div>
        )}

        {/* Error State */}
        {!loading && error && (
            <p className=" m-2 text-red-700 font-bold">Error: {error}</p>
        )}

        {/* Successful fetch */}
        {!loading && !error && (
            <div className="flex flex-col items-center gap-4 mt-4">
                <button 
                    onClick={() => setIsOpen(true)}
                    className="px-6 py-2 bg-black self-start ml-12 text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                    View Stations
                </button>
                {/* <TrainList lineColor={lineColor!} data={data} /> */}
                <TrainList lineColor={lineColor!} /> 
                <StationDrawer 
                    stations={stations} 
                    isOpen={isOpen} 
                    onClose={() => setIsOpen(false)} 
                />
            </div>
        )}
    </div>
  );
}