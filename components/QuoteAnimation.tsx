"use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function QuoteAnimation() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 0.8, times: [0, 0.6, 1] }}
          className="flex justify-center mb-6"
        >
          <CheckCircle className="w-24 h-24 text-green-500" strokeWidth={2} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            ¡Tu cotización está lista!
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 1, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mx-auto"
            style={{ maxWidth: "300px" }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="text-gray-600 mt-6 text-lg"
        >
          Cargando tu información...
        </motion.p>
      </div>
    </div>
  );
}