import {
    ImageIcon,
    FileText,
    CalendarDays,
    TrendingUp,
    MessageSquare,
    Sparkles,
  } from "lucide-react";
  
  const items = [
    {
      icon: ImageIcon,
      title: "Posts para Instagram",
      desc: "Crie conteúdos profissionais para seu perfil em segundos.",
    },
    {
      icon: FileText,
      title: "Copies de Vendas",
      desc: "Textos persuasivos para anúncios, páginas e campanhas.",
    },
    {
      icon: CalendarDays,
      title: "Calendários de Conteúdo",
      desc: "Planejamento completo para publicar sem ficar sem ideias.",
    },
    {
      icon: TrendingUp,
      title: "Estratégias de Marketing",
      desc: "Receba planos de ação para atrair clientes e aumentar vendas.",
    },
    {
      icon: MessageSquare,
      title: "Prompts Inteligentes",
      desc: "Modelos prontos para ChatGPT, Gemini, Claude e Grok.",
    },
    {
      icon: Sparkles,
      title: "Ideias Infinitas",
      desc: "Nunca mais fique sem inspiração para criar conteúdo.",
    },
  ];
  
  export default function Results() {
    return (
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
  
          <h2 className="text-5xl font-bold text-center mb-6">
            O que você vai conseguir criar
          </h2>
  
          <p className="text-center text-slate-400 max-w-3xl mx-auto mb-16">
            Tenha acesso a ferramentas, estratégias e conteúdos prontos para acelerar seus resultados.
          </p>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  
            {items.map((item) => {
              const Icon = item.icon;
  
              return (
                <div
                  key={item.title}
                  className="
                    p-8
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/5
                    backdrop-blur-sm
                    hover:border-purple-500/30
                    hover:scale-105
                    transition
                  "
                >
                  <Icon className="w-12 h-12 text-purple-400 mb-5" />
  
                  <h3 className="text-2xl font-semibold mb-3">
                    {item.title}
                  </h3>
  
                  <p className="text-slate-400">
                    {item.desc}
                  </p>
                </div>
              );
            })}
  
          </div>
  
        </div>
      </section>
    );
  }