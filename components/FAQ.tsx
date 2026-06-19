export default function FAQ() {
    const faqs = [
      {
        question: "Preciso entender de IA?",
        answer:
          "Não. O CriadorIA foi desenvolvido para iniciantes e profissionais.",
      },
      {
        question: "Funciona para qualquer nicho?",
        answer:
          "Sim. Você pode utilizar para diversos segmentos de mercado.",
      },
      {
        question: "O acesso é imediato?",
        answer:
          "Sim. Após a confirmação do pagamento você recebe acesso instantâneo.",
      },
      {
        question: "Receberei atualizações?",
        answer:
          "Sim. Novos conteúdos e melhorias serão adicionados periodicamente.",
      },
    ];
  
    return (
      <section id="faq" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
  
          <h2 className="text-5xl font-bold text-center mb-16">
            Perguntas Frequentes
          </h2>
  
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="p-6 rounded-2xl border border-white/10 bg-white/5"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {faq.question}
                </h3>
  
                <p className="text-slate-400">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }