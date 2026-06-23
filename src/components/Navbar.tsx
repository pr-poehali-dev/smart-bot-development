import Icon from "@/components/ui/icon"

const NAVY = "#0D2D6B"
const GREEN = "#0F6E56"

const menu = ["Услуги", "Доставка", "Белая доставка", "ВЭД", "О нас", "Кейсы"]

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top contact bar */}
      <div style={{ backgroundColor: NAVY }} className="text-white text-xs md:text-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 md:gap-5">
            <a href="#" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
              <Icon name="Send" size={15} />
              <span className="hidden sm:inline">Telegram</span>
            </a>
            <a href="#" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
              <Icon name="MessageCircle" size={15} />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <a href="tel:+74952555282" className="flex items-center gap-1.5 font-semibold hover:text-white/80 transition-colors">
              <Icon name="Phone" size={15} />
              +7 (495) 255-52-82
            </a>
          </div>
          <div className="flex items-center gap-4 md:gap-5">
            <span
              className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold text-white"
              style={{ backgroundColor: GREEN }}
            >
              <Icon name="PackageCheck" size={13} />
              Работаем от 100 кг
            </span>
            <span className="hidden lg:flex items-center gap-1.5 text-white/80">
              <Icon name="Clock" size={14} />
              Пн–Пт 10:00–19:00
            </span>
            <span className="hidden sm:flex items-center gap-1.5 text-white/80">
              <Icon name="MapPin" size={14} />
              Москва
            </span>
          </div>
        </div>
      </div>

      {/* White navigation */}
      <nav className="bg-white border-b border-zinc-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-6">
          <a href="#" className="flex items-center gap-2 shrink-0">
            <span
              className="flex items-center justify-center w-9 h-9 rounded-lg text-white font-bold text-sm"
              style={{ backgroundColor: NAVY }}
            >
              C2R
            </span>
            <span className="font-bold tracking-tight text-lg" style={{ color: NAVY }}>
              C2R LOGISTICS
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-7">
            {menu.map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium text-zinc-700 hover:text-[#0D2D6B] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-white text-sm font-semibold px-4 py-2.5 rounded-lg hover:opacity-90 transition-opacity shrink-0"
            style={{ backgroundColor: NAVY }}
          >
            Аудит закупок
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </nav>
    </header>
  )
}
