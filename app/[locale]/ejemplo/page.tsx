"use client";

import { useState } from "react";

// Simulador de pedido de pizza
const pedirPizza = (tipoPizza: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const tiempoEntrega = Math.random() * 2000 + 1000; // 1-3 segundos
    const exito = Math.random() > 0.3; // 70% éxito

    setTimeout(() => {
      if (exito) {
        resolve(`¡Pizza ${tipoPizza} entregada! 🍕`);
      } else {
        reject(`El repartidor se comió tu ${tipoPizza} 😢`);
      }
    }, tiempoEntrega);
  });
};

export default function EjemploPage() {
  const [estado, setEstado] = useState<string>("");
  const [cargando, setCargando] = useState<boolean>(false);

  const manejarPedido = async () => {
    setCargando(true);
    setEstado("Preparando pizza... 👨‍🍳");

    try {
      const resultado = await pedirPizza("Margarita");
      setEstado(resultado);
    } catch (error) {
      setEstado(error as string);
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6">🍕 Pizzería Async</h1>

      <button
        onClick={manejarPedido}
        disabled={cargando}
        className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 disabled:opacity-50 mb-4"
      >
        {cargando ? "Procesando..." : "Pedir Pizza Margarita"}
      </button>

      {estado && (
        <div
          className={`p-4 rounded ${
            estado.includes("entregada")
              ? "bg-green-100 text-green-800"
              : estado.includes("comió")
              ? "bg-red-100 text-red-800"
              : "bg-blue-100 text-blue-800"
          }`}
        >
          {estado}
        </div>
      )}
    </div>
  );
}
