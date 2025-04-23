import Link from "next/link";

export default function CTAButton() {
  return (
    <Link
      href="#"
      className="px-4 py-2 bg-[#411E8A] text-white rounded-md 
      hover:bg-[#5a2db3] 
      hover:scale-105 
      transition-all duration-300 
      text-sm inline-block"
    >
      Comenzar gratis
    </Link>
  );
}
