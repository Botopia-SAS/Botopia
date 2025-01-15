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
                        className="px-6 py-2 bg-transparent border border-pink-500 text-pink-500 rounded-full hover:bg-pink-600 hover:text-white h-auto text-center text-sm sm:text-base"
                    >
                        {label}
                    </button>
                ))}
            </div>
        </div>
    );
}


