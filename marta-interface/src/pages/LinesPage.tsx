import { useEffect, useState } from "react";
import TrainList from "../components/TrainList";

interface LinesPageProps {
    lineColor: string;
}

export default function LinesPage({
    lineColor
}: LinesPageProps) {
    // states used for fetching our data
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(
                `https://midsem-bootcamp-api.onrender.com/arrivals/${lineColor}`,
                { signal: controller.signal }
            );
            if (!response.ok) {
                throw new Error(`Marta API error: ${response.status}`);
            }
            const result = await response.json();
            setData(result);
        } catch (e) {
            if (e instanceof Error && e.name !== 'AbortError') {
                setError(e.message);
            }
        } finally {
            setLoading(false);
        }
    };

    fetchData();
    return () => controller.abort()
    },[lineColor])

  return (
    <div>
        {/* Loading State */}
        {loading && (
            <div className="flex flex-col items-center py-10">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>
                <p className="mt-4 font-[Times New Roman]">Checking Marta Schedules...</p>
            </div>
        )}

        {/* Error State */}
        {!loading && error && (
            <p className=" m-2 text-red-700 font-bold">Error: {error}</p>
        )}

        {/* Successful fetch */}
        {!loading && !error && (
            <div>
                <TrainList lineColor={lineColor} />
                <p>{data}</p>
            </div>
        )}
    </div>
  );
}