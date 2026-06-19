"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  PenSquare,
  CalendarDays,
  TrendingUp,
  Bot,
  Rocket,
} from "lucide-react";

const features = [
  {
    icon: PenSquare,
    title: "Copy de Vendas",
    desc: "Crie textos persuasivos para anúncios, páginas e redes sociais.",
  },
  {
    icon: CalendarDays,
    title: "Calendário 30 Dias",
    desc: "Tenha ideias prontas para publicar todos os dias.",
  },
  {
    icon: Bot,
    title: "Prompts Premium",
    desc: "Biblioteca completa para ChatGPT, Gemini, Claude e Grok.",
  },
  {
    icon: TrendingUp,
    title: "Estratégias",
    desc: "Métodos validados para atrair clientes e aumentar vendas.",
  },
  {
    icon: Sparkles,
    title: "Automação",
    desc: "Ganhe produtividade utilizando IA no seu marketing.",
  },
  {
    icon: Rocket,
    title: "Escalabilidade",
    desc: "Produza mais conteúdo sem aumentar seu esforço.",
  },
];

export default function Features() {
  return (
    <section id="recursos" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-6">
          Recursos que aceleram seus resultados
        </h2>

        <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
          Tudo que você precisa para criar conteúdo, vender mais e economizar tempo.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <Icon className="w-12 h-12 text-purple-400 mb-5" />

                <h3 className="text-2xl font-semibold mb-3">
                  {feature.title}
                </h3>

                <p className="text-slate-400">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}