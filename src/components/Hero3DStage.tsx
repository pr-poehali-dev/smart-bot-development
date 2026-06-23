import { motion } from "framer-motion"
import { Navbar } from "./Navbar"
import { UTPSection } from "./UTPSection"
import { ServicesSection } from "./ServicesSection"
import Icon from "@/components/ui/icon"

const NAVY = "#0D2D6B"
const GREEN = "#0F6E56"

const cards = [
  { big: "от 100 кг", sub: "минимальный объём", icon: "Package" },
  { big: "15–30 дн", sub: "автодоставка", icon: "Truck" },
  { big: "БЕЛАЯ", sub: "доставка с документами", icon: "FileCheck2" },
  { big: "3 склада", sub: "в Китае", icon: "Warehouse" },
]

const stats = [
  { value: "200+", label: "клиентов" },
  { value: "3", label: "склада" },
  { value: "0%", label: "комиссия" },
  { value: "15–30", label: "дней" },
]

export function Hero3DStage() {
  return (
    <>
      <Navbar />

      <section className="relative bg-white pt-[104px]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left text */}
          <div>
            <span
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
              style={{ backgroundColor: `${GREEN}14`, color: GREEN }}
            >
              <Icon name="Globe2" size={14} />
              Импорт из Китая для бизнеса
            </span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-[52px] font-bold leading-[1.08] tracking-tight"
              style={{ color: NAVY }}
            >
              Найдём товар в Китае и организуем поставку{" "}
              <span style={{ color: GREEN }}>под ключ</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-lg text-zinc-600 max-w-xl"
            >
              Белая доставка, карго, ВЭД. Один партнёр для всего цикла.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 text-white font-semibold px-6 py-3.5 rounded-lg hover:opacity-90 transition-opacity"
                style={{ backgroundColor: NAVY }}
              >
                Аудит закупок — бесплатно
                <span aria-hidden="true">→</span>
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 font-semibold px-6 py-3.5 rounded-lg border-2 transition-colors hover:bg-[#0D2D6B] hover:text-white"
                style={{ borderColor: NAVY, color: NAVY }}
              >
                <Icon name="Send" size={18} />
                Написать в Telegram
              </a>
            </motion.div>
          </div>

          {/* Right 2x2 cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-2xl p-6 md:p-8"
            style={{ backgroundColor: NAVY }}
          >
            <div className="grid grid-cols-2 gap-4 md:gap-5">
              {cards.map((c) => (
                <div
                  key={c.big}
                  className="rounded-xl p-5 md:p-6 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <span
                    className="flex items-center justify-center w-10 h-10 rounded-lg mb-4"
                    style={{ backgroundColor: GREEN }}
                  >
                    <Icon name={c.icon} size={20} className="text-white" />
                  </span>
                  <div className="text-2xl md:text-3xl font-bold text-white leading-none">
                    {c.big}
                  </div>
                  <div className="mt-2 text-sm text-white/70">{c.sub}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats strip */}
      <section style={{ backgroundColor: NAVY }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-zinc-700">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl md:text-4xl font-bold text-white">{s.value}</div>
              <div className="mt-1 text-sm text-white/70">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <UTPSection />
      <ServicesSection />
    </>
  )
}