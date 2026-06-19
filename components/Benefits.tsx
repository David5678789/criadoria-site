import {
    PenSquare,
    CalendarDays,
    Sparkles,
    TrendingUp,
  } from "lucide-react";
  
  const items = [
    {
      icon: PenSquare,
      title: "Copy de Vendas",
      desc: "Textos persuasivos para anúncios, páginas e redes sociais.",
    },
    {
      icon: CalendarDays,
      title: "Calendário 30 Dias",
      desc: "Nunca mais fique sem saber o que publicar.",
    },
    {
      icon: Sparkles,
      title: "Prompts Premium",
      desc: "Biblioteca completa para ChatGPT e outras IAs.",
    },
    {
      icon: TrendingUp,
      title: "Estratégias",
      desc: "Métodos para atrair clientes e aumentar vendas.",
    },
  ];
  
  export default function Benefits() {
    return (
      <section
        id="beneficios"
        className="py-32 px-6"
      >
        <div className="max-w-6xl mx-auto">
  
          <h2 className="text-4xl font-bold text-center mb-16">
            Tudo que você precisa para vender mais
          </h2>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
  
            {items.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
              >
                <item.icon className="w-10 h-10 text-purple-400 mb-4" />
  
                <h3 className="text-xl font-semibold mb-2">
                  {item.title}
                </h3>
  
                <p className="text-slate-400">
                  {item.desc}
                </p>
              </div>
            ))}
  
          </div>
        </div>
      </section>
    );
  }