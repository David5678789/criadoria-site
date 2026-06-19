"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center px-6">

      {/* Glow Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-700/20 blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fuchsia-600/20 blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <span className="inline-block mb-6 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm">
            🚀 Plataforma de Marketing com IA
          </span>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">

            Pare de ficar
            <span className="block bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-600 bg-clip-text text-transparent">
              em branco.
            </span>

            O CriadorIA cria por você.
          </h1>

          <p className="mt-8 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Crie conteúdos, copies de vendas, calendários de postagem e
            estratégias completas utilizando Inteligência Artificial.
          </p>

          <div className="mt-10 flex flex-col md:flex-row justify-center gap-4">

            <a
              href="#oferta"
              className="px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-500 transition"
            >
              🚀 Quero Acessar Agora
            </a>

            <a
              href="#beneficios"
              className="px-8 py-4 rounded-xl border border-white/10 hover:bg-white/5 transition"
            >
              Ver Recursos
            </a>

          </div>
        </motion.div>

      </div>
    </section>
  );
}