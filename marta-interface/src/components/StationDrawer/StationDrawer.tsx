import { useNavigate } from 'react-router-dom';

interface StationDrawerProps {
    stations: string[] | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function StationDrawer({ stations, isOpen, onClose }: StationDrawerProps) {
    const navigate = useNavigate();

    return (
        <>
            {/* Background Overlay (dims the screen behind the drawer) */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-40 transition-opacity"
                    onClick={onClose}
                ></div>
            )}

            {/* The Drawer Itself */}
            <div className={`
                fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-50 
                transform transition-transform duration-300 ease-in-out
                flex flex-col
                ${isOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
                {/* Drawer Header */}
                <div className="flex justify-between items-center p-4 border-b-2">
                    <h2 className="text-2xl font-bold font-sans">Stations</h2>
                    <button 
                        onClick={onClose}
                        className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Drawer Content*/}
                <div className="overflow-y-auto p-4 flex-1">
                    {!stations ? (
                        <p className="text-gray-500 italic">Loading stations...</p>
                    ) : (
                        <div className="flex flex-col gap-2">
                            <button 
                                    className="text-left p-3 rounded-lg border hover:bg-gray-100 transition-colors cursor-pointer"
                                    // add onClick logic later
                                >
                                    All Stations
                                </button>
                            {stations.map((station, index) => (
                                <button 
                                    key={index}
                                    className="text-left p-3 rounded-lg border hover:bg-gray-100 transition-colors cursor-pointer"
                                    // add onClick logic later
                                >
                                    {station}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}