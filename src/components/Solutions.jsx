const Solutions = () => {

  const solutions = [
    {
      title: "Transcrição de Áudio Assíncrono (áudio pré-gravado)",
      description: "API de transcrição de voz assíncrona para áudio pré-gravado. Temos uma das melhores engines de reconhecimento de fala do mundo! O recurso speech-to-text assíncrono é um parceiro estratégico para o seu negócio. Esteja você extraindo insights de áudio ou transcrevendo conteúdo em escala."
    },
    {
      title: "Transcrição de Áudio em tempo real (streaming)",
      description: "O recurso live-speech-to-text de transcrição ao vivo possibilita o uso de legendas em tempo real para o seu negócio. Nossas legendas garantem que as palestras e treinamentos ao vivo sejam acessíveis e possam ser arquivadas para uso futuro."
    },
    {
      title: "Identificação de Idiomas em áudios",
      description: "Obtendo fala e insights a nível global. Nossa solução tem suporte a 52 idiomas."
    },
    {
      title: "Análise de sentimento a partir do áudio (áudio pré-gravado)",
      description: "Encontre os momentos mais importantes em trechos de falas, diferencie falas positivas e negativas e tome decisões de negócios mais assertivas com uma compreensão mais profunda."
    }
  ];

  return (
    <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 m-5 " id="solutions">
      {solutions.map((solution, index) => (
        <div key={index} className="bg-gray-200 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">{solution.title}</h3>
          <p className="text-gray-600">{solution.description}</p>
        </div>
      ))}
    </section>

  )
}

export default Solutions