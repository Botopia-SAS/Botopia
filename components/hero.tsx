'use client';

import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('Hero'); // Hook para traducir los textos

  return (
    <section className="bg-gradient-to-b from-black to-purple-800 text-white relative">
      {/* Contenedor principal */}
      <div className="container px-8 md:mx-16 lg:px-20 md:pt-32 py-4 md:py-24">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          {/* Contenedor del título y subtítulo */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl font-bold mb-4 md:text-5xl md:mb-12">
              {t('title.part1')} <br /> 
              <span className="text-purple-400">{t('title.highlight1')}</span> {t('title.and')}{" "}
              <span className="text-purple-400">{t('title.highlight2')}</span>
            </h1>
            <p className="text-lg md:text-2xl md:mb-20">
              <br />
              {t('subtitle.part1')} <span className="font-bold">{t('subtitle.part2')}</span> <br className="hidden md:block" />
              {t('subtitle.part3')}
            </p>

            {/* Botones */}
            <div className="flex flex-col md:flex-row justify-start md:justify-start space-y-6 md:space-y-0 md:space-x-6 md:mt-14 mt-6">
              <a
                href="#"
                className="border-2 border-[#9165f3] text-[#9165f3] py-3 px-6 rounded-md font-semibold hover:bg-purple-500 hover:text-white"
              >
                {t('buttons.contactSales')}
              </a>
              <a
                href="#"
                className="border border-black shadow-lg jump-button bg-white text-black py-3 px-6 rounded-md font-semibold hover:bg-purple-600"
              >
                {t('buttons.tryUsFree')}
              </a>
            </div>
          </div>

          {/* Contenedor de las imágenes */}
          <div className="md:w-1/2 md:relative flex md:justify-end flex-wrap md:items-center gap-4 md:py-0 py-10 pt-32">
            {/* Imagen central */}
            <img
              src="/astronave.svg"
              alt={t('images.mainAlt')}
              className="hidden md:block max-w-full max-h-[400px] md:w-auto md:h-96 md:relative md:z-20 top-8"
            />

            {/* Imágenes flotantes */}
            <img
              src="/chatbot.png"
              alt={t('images.icon1Alt')}
              className="absolute w-40 lg:w-52 h-auto md:top-0 md:left-1/4 md:right-2/4 animate-float"
              style={{ animationDelay: '4s' }}
            />
            <img
              src="/paginaweb.png"
              alt={t('images.icon2Alt')}
              className="absolute w-40 md:w-52 md:h-auto right-56 md:-left-2 animate-float md:top-64"
              style={{ animationDelay: '3s' }}
            />
            <img
              src="/app.png"
              alt={t('images.icon3Alt')}
              className="absolute w-40 md:w-52 md:h-auto top-96 md:top-10 md:-right-1/4 animate-float"
              style={{ animationDelay: '2s' }}
            />
            <img
              src="/icon4.png"
              alt={t('images.icon4Alt')}
              className="absolute w-40 lg:w-52 md:h-auto top-96 right-56 md:-top-20 md:right-2 animate-float"
              style={{ animationDelay: '1s' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
