"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface FeatureSectionProps {
  title: string
  description: string
  imageUrl: string
  imageAlt: string
  reversed?: boolean
}

export default function FeatureSection({
  title,
  description,
  imageUrl,
  imageAlt,
  reversed = false,
}: FeatureSectionProps) {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${reversed ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12`}>
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: reversed ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            <p className="text-lg text-gray-600 mb-6">{description}</p>
            <div className="flex items-center">
              <div className="h-0.5 w-12 bg-gray-900 mr-4"></div>
              <span className="text-sm font-medium">Descubre más</span>
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: reversed ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={imageUrl || "/placeholder.svg"}
                alt={imageAlt}
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
