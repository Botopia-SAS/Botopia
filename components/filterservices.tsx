import React from "react";

interface FiltroServiciosProps {
    filters: { key: string; label: string }[];
}

export default function FiltroServicios({ filters }: FiltroServiciosProps) {
    return (
        <div className="w-full overflow-x-auto whitespace-nowrap justify-center align-middle text-center">
            <div className="inline-flex space-x-4">
                {filters.map(({ key, label }) => (
                    <button
                        key={key}
                        className="px-6 py-2 bg-transparent border-2 border-white text-white rounded-full hover:bg-purple-600 hover:border-black hover:text-white h-auto text-center text-sm sm:text-base"
                    >
                        {label}
                    </button>
                ))}
            </div>
        </div>
    );
}


