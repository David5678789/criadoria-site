export default function HowItWorks() {
    const steps = [
      {
        number: "01",
        title: "Escolha seu Nicho",
        desc: "Informe seu segmento de atuação."
      },
      {
        number: "02",
        title: "Defina o Objetivo",
        desc: "Escolha o que deseja criar."
      },
      {
        number: "03",
        title: "Receba Tudo Pronto",
        desc: "A IA gera conteúdo e estratégias em segundos."
      }
    ];
  
    return (
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
  
          <h2 className="text-5xl font-bold text-center mb-16">
            Como Funciona
          </h2>
  
          <div className="grid md:grid-cols-3 gap-8">
  
            {steps.map((step) => (
              <div
                key={step.number}
                className="p-8 rounded-3xl bg-white/5 border border-white/10"
              >
                <span className="text-5xl font-bold text-purple-500">
                  {step.number}
                </span>
  
                <h3 className="text-2xl font-semibold mt-4 mb-3">
                  {step.title}
                </h3>
  
                <p className="text-slate-400">
                  {step.desc}
                </p>
              </div>
            ))}
  
          </div>
        </div>
      </section>
    );
  }