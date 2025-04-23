import NavLinks from "./NavLinks";
import LoginButton from "./LoginButton";
import CTAButton from "./CTAButton";

export default function SecondaryHeader() {
  return (
    <header className="bg-white/90 dark:bg-black backdrop-blur-md transition-colors">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          <div className="font-bold text-gray-800 dark:text-gray-100">
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
