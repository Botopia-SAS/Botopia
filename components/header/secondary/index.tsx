import NavLinks from "./NavLinks";
import LoginButton from "./LoginButton";
import CTAButton from "./CTAButton";

export default function SecondaryHeader() {
  // Soporte automático para modo claro y oscuro usando clases Tailwind 'dark:'
  // El fondo, bordes y textos cambian según la preferencia del sistema o usuario
  // Elimina la franja negra (ml-8) y suaviza el color de los textos en modo claro
  return (
    <header className="bg-white dark:bg-black backdrop-blur-md transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="font-bold text-gray-700 dark:text-gray-100 text-lg md:text-xl">
            Botopia
          </div>
          <div className="flex-grow"></div>
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex items-center space-x-6">
              <NavLinks />
              <LoginButton />
            </nav>
            <CTAButton />
          </div>
        </div>
      </div>
    </header>
  );
}
