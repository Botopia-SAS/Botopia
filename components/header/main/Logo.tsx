import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  hide?: boolean;
}

export default function Logo({ hide = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={`flex items-center transition-opacity transition-transform duration-300 ${
        hide ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <Image
        src="/images/logo.png"
        alt="Botopia"
        width={60}
        height={60}
        className="h-11 w-11  ml-2"
        priority
      />
    </Link>
  );
}
