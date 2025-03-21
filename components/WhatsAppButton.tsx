"use client";

export default function WhatsAppButton() {
  const phoneNumber = "573228726267"; // ← cambia por tu número
  const message = "Hola, quiero más información sobre Botopia 🚀";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50"
    >
      <div
        className="bg-green-500 text-white p-4 rounded-full shadow-lg transition-all duration-300 
        hover:scale-110 hover:shadow-2xl animate-bounce hover:animate-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12.04 2.003a10.002 10.002 0 00-8.592 15.18L2 22l4.948-1.425a10.002 10.002 0 101.092-18.572zM12 4a8 8 0 110 16 7.963 7.963 0 01-4.125-1.147l-.294-.187-2.918.84.848-2.847-.19-.3A8.001 8.001 0 0112 4zm4.637 10.293c-.198-.1-1.174-.578-1.355-.644-.18-.066-.312-.1-.444.1-.132.198-.51.644-.626.775-.115.132-.23.148-.428.05a6.568 6.568 0 01-1.935-1.193 7.256 7.256 0 01-1.344-1.664c-.14-.24-.015-.37.106-.49.11-.11.248-.294.372-.44.125-.145.166-.248.248-.413.082-.165.041-.31-.021-.44-.066-.132-.583-1.407-.8-1.93-.21-.51-.423-.44-.58-.448h-.5a.965.965 0 00-.693.33c-.238.264-.903.883-.903 2.15s.924 2.496 1.053 2.668c.13.174 1.818 2.776 4.408 3.893.616.266 1.096.423 1.47.54.617.197 1.18.17 1.623.103.496-.074 1.174-.48 1.34-.944.165-.463.165-.86.116-.943-.05-.083-.18-.132-.377-.23z" />
        </svg>
      </div>
    </a>
  );
}
