import { IoIosCheckmarkCircle } from "react-icons/io";

const Prices = () => {
  const plans = [
    {
      name: "Beginner",
      priceMonthly: "R$29",
      priceAnnual: "R$328",
      features: [
        "Transcrição de Áudio Assíncrono - 120 minutos (R$0,20 / minuto excedente)",
        "Transcrição de Áudio em tempo real - 90 minutos (R$0,40 / minuto excedente)",
        "Identificação de Idiomas em áudios - 200 minutos (R$0,05 / minuto excedente)",
        "Análise de sentimento a partir do áudio (áudio pré-gravado) - 120 minutos (R$0,40 / minuto excedente)",
      ],
    },
    {
      name: "Business",
      priceMonthly: "R$44",
      priceAnnual: "R$499",
      features: [
        "Transcrição de Áudio Assíncrono - 200 minutos (R$0,15 / minuto excedente)",
        "Transcrição de Áudio em tempo real - 120 minutos (R$0,40 / minuto excedente)",
        "Identificação de Idiomas em áudios - 500 minutos (R$0,03 / minuto excedente)",
        "Análise de sentimento a partir do áudio (áudio pré-gravado) - 200 minutos (R$0,35 / minuto excedente)",
      ],
    },
    {
      name: "Enterprise",
      price: "Preço sob consulta",
      features: [
        "Preços especiais para grandes volumes",
        "Prioridade no suporte técnico",
        "Gestor de conta dedicado",
      ],
    },
  ];

  return (
    <section className="bg-gray-900 py-16" id="prices">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl text-white text-center mb-8">Planos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-7 flex flex-col items-center relative"
            >
              <h3 className="text-lg font-bold mb-4">{plan.name}</h3>
              {plan.name === "Enterprise" ? (
                <p className="text-gray-500 text-xl font-bold mb-4">
                  Preço sob consulta. Verifique as condições.
                </p>
              ) : (
                <p className="text-gray-500 text-xl font-bold mb-4">
                  {plan.priceMonthly} pora mês ou {plan.priceAnnual} para uma
                  compra anual.
                </p>
              )}
              <div className="min-h-[200px] md:min-h-[320px]">
                <ul className="text-gray-500 text-sm mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="mb-2 flex items-center">
                      <IoIosCheckmarkCircle className="text-green-500 mr-5" />
                      <p>{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
              {plan.name === "Enterprise" ? (
                <a
                  href="#contact"
                  className="bg-green-500 text-white text-sm font-semibold px-6 py-2 rounded-full transition duration-300 hover:bg-green-600"
                >
                  Preço sob consulta
                </a>
              ) : (
                <a
                  href="#"
                  className="bg-green-500 text-white text-sm font-semibold px-6 py-2 rounded-full transition duration-300 hover:bg-green-600"
                >
                  Experimente agora
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prices;
