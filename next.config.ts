import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

// Configurar `next-intl`
const withNextIntl = createNextIntlPlugin();

// Configurar Webpack para SVGs
const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/, // Identifica los archivos SVG
      issuer: { and: [/\.(ts|tsx|js|jsx)$/] }, // Solo aplica a archivos que los importan
      use: ['@svgr/webpack'] // Usa el loader de `@svgr`
    });

    return config;
  },
};

export default withNextIntl(nextConfig);
