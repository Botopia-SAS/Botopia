'use client';

import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('Hero'); // Hook para traducir los textos

  return (
    <section className="md:mt-8 bg-gradient-to-b from-black to-purple-800 text-white relative justify-center items-center">
      {/* Contenedor principal */}
      <div className="container pt-32 lg:pt-56 lg:py-16 px-4 md:mx-28 items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          {/* Contenedor del título y subtítulo */}
          <div className="lg:w-1/2 lg:text-left text-center">
            <h1 className="text-3xl below700:text-xl font-bold mb-4 lg:text-5xl lg:mb-12">
              {t('title.part1')} <br />
              <span className="text-purple-400">{t('title.highlight1')}</span> {t('title.and')}{" "}
              <span className="text-purple-400">{t('title.highlight2')}</span>
            </h1>
            <p className="text-lg lg:text-2xl lg:mb-20 below700:text-base">
              <br />
              {t('subtitle.part1')} <span className="font-bold">{t('subtitle.part2')}</span> <br className="hidden lg:block" />
              {t('subtitle.part3')}
            </p>

            {/* Botones */}
            <div className="flex flex-col lg:flex-row justify-start lg:justify-start space-y-6 lg:space-y-0 lg:space-x-6 lg:mt-14 mt-6">
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

          {/* Contenedor de las imágenes desktop*/}
          <div className="hidden lg:w-1/2 lg:relative lg:flex lg:justify-end flex-wrap lg:items-center gap-4 lg:py-0 py-10 pt-32 px-10">
            {/* Imagen central */}
            <img
              src="/astronave.svg"
              alt={t('images.mainAlt')}
              className="hidden lg:block max-w-full max-h-[400px] lg:w-auto lg:h-96 lg:relative lg:z-20 top-8"
            />

            {/* Imágenes flotantes */}
            <img
              src="/chatbot.png"
              alt={t('images.icon1Alt')}
              className="absolute w-40 lg:w-48 h-auto lg:top-14 lg:right-80 animate-float"
              style={{ animationDelay: '4s' }}
            />
            <img
              src="/paginaweb.png"
              alt={t('images.icon2Alt')}
              className="absolute w-40 lg:w-48 lg:h-auto right-56 lg:-left-4 animate-float lg:top-80"
              style={{ animationDelay: '3s' }}
            />
            <img
              src="/app.png"
              alt={t('images.icon3Alt')}
              className="absolute w-40 lg:w-48 lg:h-auto top-96 lg:top-0 lg:right-7 animate-float"
              style={{ animationDelay: '2s' }}
            />
            <img
              src="/icon4.png"
              alt={t('images.icon4Alt')}
              className="absolute w-40 lg:w-48 lg:h-auto top-96 right-56 lg:-top-20 lg:right-40 animate-float"
              style={{ animationDelay: '1s' }}
            />
          </div>

          {/* Contenedor de las imágenes NO desktop*/}
          <div className='flex flex-wrap lg:hidden mx- py-4 pt-10 below700:mx-0 justify-center'>
            <img
              src="/chatbot.png"
              alt={t('images.icon1Alt')}
              className="w-44 below700:w-40"
              style={{ animationDelay: '4s' }}
            />
            <img
              src="/paginaweb.png"
              alt={t('images.icon2Alt')}
              className="w-44 below700:w-40"
              style={{ animationDelay: '3s' }}
            />
            <img
              src="/app.png"
              alt={t('images.icon3Alt')}
              className="w-44 below700:w-40"
              style={{ animationDelay: '2s' }}
            />
            <img
              src="/icon4.png"
              alt={t('images.icon4Alt')}
              className="w-44 below700:w-40"
              style={{ animationDelay: '1s' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
