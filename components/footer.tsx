'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { useTranslations } from 'next-intl';

config.autoAddCss = false;

export default function Footer() {
  const t = useTranslations('Footer'); // Hook para traducir los textos

  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-6">
        {/* Contenedor principal en columnas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Columna 1: Logo e introducción */}
          <div>
            <img src="/logo.svg" alt="Botopia Logo" className="h-10 mb-4" />
            <p className="text-gray-400">{t('intro')}</p>
            <div className="mt-4 flex space-x-4">
              {/* Redes sociales */}
              <a
                href="https://www.linkedin.com/company/botopiasas/?viewAsMember=true"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ color: 'white', fontSize: '2rem' }}
                />
              </a>
              <a href="https://x.com/BotopiaSAS" aria-label="Twitter">
                <FontAwesomeIcon
                  icon={faXTwitter}
                  style={{ color: 'white', fontSize: '2rem' }}
                />
              </a>
              <a
                href="https://www.instagram.com/botopia.tech/"
                aria-label="Instagram"
                className="flex items-center justify-center"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ color: 'white', fontSize: '2rem' }}
                />
              </a>
              <a
                href="https://www.youtube.com/@Botopia-SAS"
                aria-label="YouTube"
                className="flex items-center justify-center"
              >
                <FontAwesomeIcon
                  icon={faYoutube}
                  style={{ color: 'white', fontSize: '2rem' }}
                />
              </a>
            </div>
          </div>

          {/* Columna 2: Accesos rápidos */}
          <div>
            <h4 className="text-purple-400 font-bold mb-4">{t('quickLinks.title')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  {t('quickLinks.terms')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  {t('quickLinks.privacy')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  {t('quickLinks.careers')}
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h4 className="text-purple-400 font-bold mb-4">{t('contact.title')}</h4>
            <p className="text-gray-400">{t('contact.email')}</p>

            <h2 className="text-white mt-12 md:mt-2">{t('newsletter.title')}</h2>
            <form className="mt-4">
              <label htmlFor="newsletter" className="sr-only">
                {t('newsletter.label')}
              </label>
              <div className="flex items-center border border-gray-600 rounded-md overflow-hidden">
                <input
                  type="email"
                  id="newsletter"
                  placeholder={t('newsletter.placeholder')}
                  className="bg-black text-gray-400 placeholder-gray-600 px-4 py-2 focus:outline-none flex-grow"
                />
                <button
                  type="submit"
                  className="bg-purple-400 text-white px-4 py-2 hover:bg-pink-600"
                >
                  &gt;
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} {t('footerRights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
