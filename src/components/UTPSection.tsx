import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const NAVY = "#0D2D6B"
const GREEN = "#0F6E56"

const items = [
  {
    icon: "Package",
    label: "от 100 кг",
    text: "Работаем только с серьёзными объёмами",
  },
  {
    icon: "Timer",
    label: "15–30 дн",
    text: "Предсказуемые сроки, статус груза онлайн",
  },
  {
    icon: "FileCheck2",
    label: "Белая",
    text: "Официальный ввоз с НДС и контрактом",
  },
  {
    icon: "Warehouse",
    label: "3 склада",
    text: "Иу, Гуанчжоу, Фошань",
  },
]

export function UTPSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: NAVY }}>
            Почему выбирают C2R
          </h2>
          <p className="mt-3 text-zinc-500 text-lg">
            Прозрачные условия и конкретные цифры
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-zinc-100 bg-white p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4"
            >
              <span
                className="flex items-center justify-center w-12 h-12 rounded-xl"
                style={{ backgroundColor: `${NAVY}12` }}
              >
                <Icon name={item.icon} size={24} style={{ color: NAVY }} />
              </span>
              <div>
                <div
                  className="text-2xl font-bold leading-none"
                  style={{ color: NAVY }}
                >
                  {item.label}
                </div>
                <div className="mt-2 text-sm text-zinc-500 leading-snug">
                  {item.text}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
