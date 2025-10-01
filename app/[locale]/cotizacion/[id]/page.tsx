"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import QuoteForm from "@/components/QuoteForm";
import QuoteAnimation from "@/components/QuoteAnimation";
import PDFViewer from "@/components/PDFViewer";
import { initializeTracking, trackQuoteView } from "@/lib/tracking";

export default function QuotePage() {
  const { id } = useParams();
  const [step, setStep] = useState<"animation" | "form" | "pdf">("animation");
  const [formData, setFormData] = useState({ email: "", phone: "" });

  useEffect(() => {
    // Inicializar tracking
    initializeTracking();

    // Track que el usuario vio la cotización
    if (id) {
      trackQuoteView(id as string);
    }

    const timer = setTimeout(() => setStep("form"), 3000);
    return () => clearTimeout(timer);
  }, [id]);

  const handleFormSubmit = async (data: { email: string; phone: string }) => {
    setFormData(data);
    setStep("pdf");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <AnimatePresence mode="wait">
        {step === "animation" && (
          <motion.div
            key="animation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <QuoteAnimation />
          </motion.div>
        )}

        {step === "form" && (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <QuoteForm quoteId={id as string} onSubmit={handleFormSubmit} />
          </motion.div>
        )}

        {step === "pdf" && (
          <motion.div
            key="pdf"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <PDFViewer quoteId={id as string} userData={formData} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
