import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-28 px-6">

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-purple-600/20 blur-[180px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">

        <Image
          src="/images/banner-criadoria.png"
          alt="CriadorIA"
          width={1920}
          height={640}
          priority
          className="rounded-3xl border border-purple-500/20 shadow-[0_0_80px_rgba(168,85,247,0.25)]"
        />

        <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">

          <a
            href="#oferta"
            className="bg-purple-600 hover:bg-purple-500 transition px-8 py-4 rounded-xl font-semibold"
          >
            🚀 Quero Acessar Agora
          </a>

          <a
            href="#recursos"
            className="border border-white/10 px-8 py-4 rounded-xl hover:bg-white/5 transition"
          >
            Ver Recursos
          </a>

        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-12">

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center">
            <h3 className="text-3xl font-bold text-purple-400">+1000</h3>
            <p className="text-slate-400">Conteúdos Gerados</p>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center">
            <h3 className="text-3xl font-bold text-purple-400">+300</h3>
            <p className="text-slate-400">Empreendedores Impactados</p>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center">
            <h3 className="text-3xl font-bold text-purple-400">40h</h3>
            <p className="text-slate-400">Economizadas por Mês</p>
          </div>

        </div>

      </div>
    </section>
  );
}