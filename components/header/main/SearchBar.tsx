import { useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Search } from "lucide-react";

// --- Configuración de datos de búsqueda ---
type SearchItem = {
  title: string;
  description: string;
  tags: string[];
  url: string;
  anchor: string | null;
};

const CONTENT_INDEX: SearchItem[] = [
  // Servicios principales
  {
    title: "Aplicaciones Móviles",
    description: "Desarrollo de apps nativas e híbridas.",
    tags: ["apps móviles", "movil", "android", "ios", "appmovil"],
    url: "/soluciones/appmovil",
    anchor: null,
  },
  {
    title: "Aplicaciones Web",
    description: "Desarrollo de aplicaciones web modernas y escalables.",
    tags: ["web", "app web", "frontend", "backend", "appweb"],
    url: "/soluciones/appweb",
    anchor: null,
  },
  {
    title: "Chatbots e Integraciones de IA",
    description: "Automatización inteligente y asistentes virtuales.",
    tags: [
      "chatbot",
      "ia",
      "inteligencia artificial",
      "soluciones",
      "chatbotia",
    ],
    url: "/soluciones/chatbot",
    anchor: null,
  },
  {
    title: "E-commerce",
    description: "Tiendas online con pagos seguros y escalables.",
    tags: ["ecommerce", "tienda online", "shop", "comercio electrónico"],
    url: "/soluciones/ecommerce",
    anchor: null,
  },
  {
    title: "Integración API Básica",
    description: "Conexión con sistemas externos mediante API.",
    tags: ["api", "integración", "conexión"],
    url: "/soluciones/api",
    anchor: null,
  },
  {
    title: "Landing Page estándar",
    description: "Páginas optimizadas para conversiones.",
    tags: ["landing", "landing page", "conversiones"],
    url: "/soluciones/landing",
    anchor: null,
  },
  {
    title: "Plataformas SaaS",
    description: "Soluciones en la nube con arquitectura escalable.",
    tags: ["saas", "plataforma", "cloud"],
    url: "/soluciones/saas",
    anchor: null,
  },
  {
    title: "Proyectos Especiales",
    description: "Desarrollos personalizados para necesidades únicas.",
    tags: ["especiales", "personalizado", "proyecto especial"],
    url: "/soluciones/especiales",
    anchor: null,
  },
  {
    title: "Sitio Web Corporativo",
    description: "Presencia digital profesional para empresas.",
    tags: ["corporativo", "empresa", "sitio web"],
    url: "/soluciones/corporativo",
    anchor: null,
  },
  {
    title: "Software a la Medida",
    description: "Sistemas adaptados a los requerimientos de tu empresa.",
    tags: ["software", "a la medida", "personalizado"],
    url: "/soluciones/software",
    anchor: null,
  },
  // Secciones Home
  {
    title: "Portafolio",
    description: "Conoce nuestros proyectos destacados.",
    tags: ["portafolio", "proyectos", "trabajos"],
    url: "/#portafolio",
    anchor: "portafolio",
  },
  {
    title: "Nuestros Proyectos",
    description: "Ejemplos de proyectos realizados.",
    tags: ["proyectos", "casos de éxito"],
    url: "/#proyectos",
    anchor: "proyectos",
  },
  {
    title: "Clientes",
    description: "Empresas que han confiado en Botopia.",
    tags: ["clientes", "aliados", "referencias"],
    url: "/#clientes",
    anchor: "clientes",
  },
  {
    title: "Servicios",
    description: "Soluciones tecnológicas para tu empresa.",
    tags: ["servicios", "soluciones", "automatización"],
    url: "/#servicios",
    anchor: "servicios",
  },
  // Blog y contacto
  {
    title: "Blog",
    description: "Artículos y recursos sobre tecnología e innovación.",
    tags: ["blog", "artículos", "noticias"],
    url: "/blog",
    anchor: null,
  },
  {
    title: "Contáctanos",
    description: "Habla con nuestro equipo.",
    tags: ["contacto", "contactanos", "soporte", "ayuda"],
    url: "/contactUs",
    anchor: null,
  },
  {
    title: "Quiénes Somos",
    description: "Conoce al equipo de Botopia.",
    tags: ["quienes somos", "nosotros", "equipo", "historia"],
    url: "/about/quienes-somos",
    anchor: null,
  },
];

const POPULAR_CONTENT: SearchItem[] = [
  {
    title: "Portafolio",
    description: "Conoce nuestros proyectos destacados.",
    tags: ["portafolio"],
    url: "/#portafolio",
    anchor: "portafolio",
  },
  {
    title: "Servicios",
    description: "Descubre nuestras soluciones tecnológicas.",
    tags: ["servicios"],
    url: "/#servicios",
    anchor: "servicios",
  },
  {
    title: "Contáctanos",
    description: "Habla con nuestro equipo.",
    tags: ["contacto"],
    url: "/contactUs",
    anchor: null,
  },
];

// Mejorar la búsqueda: coincidencia exacta en título, luego incluye descripción y tags, y prioriza resultados exactos
function getFilteredResults(query: string) {
  if (!query.trim()) return [];
  const q = query.toLowerCase();

  // 1. Coincidencia exacta en título
  const exactTitle = CONTENT_INDEX.filter(
    (item) => item.title.toLowerCase() === q
  );
  if (exactTitle.length > 0) return exactTitle;

  // 2. Coincidencia parcial en título
  const partialTitle = CONTENT_INDEX.filter(
    (item) =>
      item.title.toLowerCase().includes(q) && item.title.toLowerCase() !== q
  );
  // 3. Coincidencia en tags o descripción
  const tagOrDesc = CONTENT_INDEX.filter(
    (item) =>
      !partialTitle.includes(item) &&
      !exactTitle.includes(item) &&
      (item.tags.some((tag) => tag.toLowerCase().includes(q)) ||
        item.description.toLowerCase().includes(q))
  );
  // 4. Unir y quitar duplicados
  return [...partialTitle, ...tagOrDesc];
}

// --- Función para resaltar coincidencias ---
function highlightMatch(text: string, query: string) {
  if (!query) return text;
  const regex = new RegExp(`(${query})`, "gi");
  return text.split(regex).map((part, i) =>
    regex.test(part) ? (
      <span
        key={i}
        className="bg-yellow-200 text-purple-900 rounded px-1 font-semibold"
      >
        {part}
      </span>
    ) : (
      part
    )
  );
}

export default function SearchBar({
  autoFocus = false,
  onClose,
}: {
  autoFocus?: boolean;
  onClose?: () => void;
}) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchItem[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  // --- Filtrado y autocompletado reactivo ---
  useEffect(() => {
    if (query.trim().length === 0) {
      setResults([]);
      setActiveIndex(-1);
      return;
    }
    setResults(getFilteredResults(query));
    setActiveIndex(getFilteredResults(query).length > 0 ? 0 : -1);
  }, [query]);

  // Enfocar el input automáticamente si se indica
  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  // Cerrar con Escape
  useEffect(() => {
    if (!onClose) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // --- Accesibilidad con teclado ---
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const list = results.length > 0 ? results : POPULAR_CONTENT;
    if (!showDropdown) return;
    if (e.key === "ArrowDown") {
      setActiveIndex((prev) => (prev < list.length - 1 ? prev + 1 : prev));
      e.preventDefault();
    } else if (e.key === "ArrowUp") {
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
      e.preventDefault();
    } else if (e.key === "Enter") {
      if (activeIndex >= 0 && list[activeIndex]) {
        handleResultClick(list[activeIndex]);
      }
    } else if (e.key === "Escape") {
      setShowDropdown(false);
    }
  };

  // --- Cerrar dropdown al hacer click fuera ---
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(e.target as Node) &&
        resultsRef.current &&
        !resultsRef.current.contains(e.target as Node)
      ) {
        setShowDropdown(false);
      }
    };
    if (showDropdown) {
      document.addEventListener("mousedown", handleClick);
    }
    return () => document.removeEventListener("mousedown", handleClick);
  }, [showDropdown]);

  // --- Navegación amigable y sin perder el layout ---
  const handleResultClick = (item: SearchItem) => {
    setShowDropdown(false);

    // Detecta el locale actual (ej: /es, /en)
    const localeMatch = pathname.match(/^\/([a-z]{2})(\/|$)/);
    const prefix = localeMatch ? `/${localeMatch[1]}` : "";

    // Si es una ancla interna y ya estamos en la home (con o sin locale)
    if (item.anchor && item.url.startsWith("/#")) {
      const isHome =
        pathname === "/" ||
        pathname === "" ||
        pathname === prefix ||
        pathname === `${prefix}/`;

      if (isHome) {
        setTimeout(() => {
          const el = document.getElementById(item.anchor!);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          } else {
            router.push(`${prefix}${item.url}`);
          }
        }, 100);
      } else {
        router.push(`${prefix}${item.url}`);
      }
    } else if (item.url.startsWith("/")) {
      // Navegación interna con locale
      const urlWithLocale =
        item.url.startsWith(prefix) || prefix === ""
          ? item.url
          : `${prefix}${item.url}`;
      router.push(urlWithLocale);
    } else if (item.url.startsWith("http")) {
      // Navegación externa
      window.open(item.url, "_blank");
    }
  };

  // --- Renderizado del buscador moderno y amigable ---
  return (
    <div className="relative w-full max-w-xl">
      {/* Barra de búsqueda */}
      <div className="flex items-center bg-white dark:bg-black rounded-full shadow-lg px-4 py-2 border border-gray-200 dark:border-gray-700 focus-within:ring-2 ring-purple-400 transition-all duration-200">
        <Search className="h-5 w-5 text-purple-500 mr-2" />
        <input
          ref={inputRef}
          type="text"
          className="bg-transparent outline-none w-full text-base text-black dark:text-white placeholder-gray-400"
          placeholder="Buscar en Botopia..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowDropdown(true);
          }}
          onFocus={() => setShowDropdown(true)}
          onKeyDown={handleKeyDown}
          aria-label="Buscar"
          autoComplete="off"
        />
        {onClose && (
          <button
            className="ml-2 text-gray-400 hover:text-gray-900 dark:hover:text-white"
            onClick={onClose}
            aria-label="Cerrar buscador"
          >
            <span className="text-lg font-bold">&times;</span>
          </button>
        )}
      </div>
      {/* Dropdown de resultados */}
      <div
        ref={resultsRef}
        className={`absolute left-0 mt-2 w-full bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl z-50 max-h-80 overflow-auto transition-all duration-200 ${
          showDropdown && (query.length > 0 || results.length > 0)
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
        style={{ minWidth: "100%" }}
      >
        {(results.length > 0 ? results : POPULAR_CONTENT).map((item, idx) => (
          <button
            key={item.url}
            className={`block w-full text-left px-5 py-3 transition-all duration-150 cursor-pointer
              ${
                idx === activeIndex
                  ? "bg-gradient-to-r from-purple-600 to-purple-800 text-white scale-[1.03] shadow-lg"
                  : "hover:bg-purple-100 dark:hover:bg-purple-900 hover:text-purple-900 dark:hover:text-purple-200"
              }
              rounded-lg my-1 group`}
            style={{
              transition:
                "background 0.2s, color 0.2s, box-shadow 0.2s, transform 0.15s",
            }}
            onMouseEnter={() => setActiveIndex(idx)}
            onClick={() => handleResultClick(item)}
            tabIndex={-1}
            aria-selected={activeIndex === idx}
          >
            <div className="font-semibold text-base flex items-center gap-2">
              {/* Icono de sugerencia */}
              <span className="inline-block w-2 h-2 rounded-full bg-purple-400 group-hover:bg-yellow-400 transition-all"></span>
              {highlightMatch(item.title, query)}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-300 mt-1">
              {highlightMatch(item.description, query)}
            </div>
          </button>
        ))}
        {results.length === 0 && query.length > 0 && (
          <div className="px-5 py-3 text-gray-500 text-xs">
            No se encontraron resultados.
          </div>
        )}
      </div>
    </div>
  );
}
