import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const NAVY = "#0D2D6B"
const GREEN = "#0F6E56"

const services = [
  {
    icon: "Search",
    title: "Поиск поставщика",
    badge: null,
    highlight: false,
    desc: "Находим надёжных производителей на Alibaba и фабричных рынках",
    tag: "Бесплатно с доставкой",
    tagIcon: "Gift",
  },
  {
    icon: "CreditCard",
    title: "Выкуп",
    badge: null,
    highlight: false,
    desc: "Оплачиваем товар у поставщика от вашего имени",
    tag: "0% комиссия · от 200 000 ₽",
    tagIcon: "BadgePercent",
  },
  {
    icon: "ShieldCheck",
    title: "Контроль качества",
    badge: null,
    highlight: false,
    desc: "Проверяем товар на наших складах до отправки",
    tag: "3 склада в Китае",
    tagIcon: "Warehouse",
  },
  {
    icon: "Truck",
    title: "Автокарго",
    badge: null,
    highlight: false,
    desc: "Автомобильная доставка сборных грузов из Китая",
    tag: "от 0,9$/кг · 15–30 дней",
    tagIcon: "Clock",
  },
  {
    icon: "FileCheck2",
    title: "Белая доставка",
    badge: "НОВОЕ",
    highlight: true,
    desc: "Официальный импорт с полным пакетом документов: контракт, декларация, НДС",
    tag: "С документами и НДС",
    tagIcon: "FileText",
  },
  {
    icon: "BoxSelect",
    title: "Фулфилмент Фошань",
    badge: null,
    highlight: false,
    desc: "Приём, маркировка и отправка товаров на маркетплейсы прямо из Китая",
    tag: "Маркировка WB и Ozon",
    tagIcon: "Tag",
  },
]

export function ServicesSection() {
  return (
    <section className="py-16 md:py-20" style={{ backgroundColor: "#F8FAFF" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: NAVY }}>
            Наши услуги
          </h2>
          <p className="mt-3 text-zinc-500 text-lg">
            Всё для импорта из Китая — от поиска поставщика до полки на складе
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`relative rounded-2xl p-7 flex flex-col gap-4 bg-white shadow-sm hover:shadow-md transition-shadow ${
                s.highlight
                  ? "ring-2"
                  : "border border-zinc-100"
              }`}
              style={s.highlight ? { ringColor: GREEN, boxShadow: `0 0 0 2px ${GREEN}` } : {}}
            >
              {s.badge && (
                <span
                  className="absolute top-5 right-5 text-[11px] font-bold px-2.5 py-1 rounded-full text-white tracking-wide"
                  style={{ backgroundColor: GREEN }}
                >
                  {s.badge}
                </span>
              )}

              <span
                className="flex items-center justify-center w-12 h-12 rounded-xl shrink-0"
                style={{
                  backgroundColor: s.highlight ? `${GREEN}18` : `${NAVY}0D`,
                }}
              >
                <Icon
                  name={s.icon}
                  size={24}
                  style={{ color: s.highlight ? GREEN : NAVY }}
                />
              </span>

              <div className="flex-1">
                <h3
                  className="text-lg font-bold leading-snug"
                  style={{ color: NAVY }}
                >
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div
                className="flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-lg w-fit"
                style={{
                  backgroundColor: s.highlight ? `${GREEN}12` : `${NAVY}0D`,
                  color: s.highlight ? GREEN : NAVY,
                }}
              >
                <Icon name={s.tagIcon} size={14} />
                {s.tag}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
