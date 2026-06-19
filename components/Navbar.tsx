export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-white/10">

      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">

        <h1 className="text-2xl font-bold">
          Criador
          <span className="text-purple-500">IA</span>
        </h1>

        <div className="hidden md:flex gap-8 text-slate-300">
          <a href="#beneficios">Benefícios</a>
          <a href="#recursos">Recursos</a>
          <a href="#faq">FAQ</a>
        </div>

        <a
          href="#oferta"
          className="px-5 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 transition"
        >
          Comprar Agora
        </a>

      </div>
    </nav>
  );
}