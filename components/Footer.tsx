export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          <div>
            <h3 className="text-xl font-bold">
              Criador<span className="text-purple-500">IA</span>
            </h3>

            <p className="text-slate-500 text-sm mt-2">
              Marketing Inteligente com IA.
            </p>
          </div>

          <div className="flex gap-6 text-slate-400 text-sm">
            <a href="#beneficios">Benefícios</a>
            <a href="#recursos">Recursos</a>
            <a href="#faq">FAQ</a>
          </div>

        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center text-slate-500 text-sm">
          © 2026 CriadorIA. Todos os direitos reservados.
        </div>

      </div>
    </footer>
  );
}