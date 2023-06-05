const Hero = () => {

  const handleButtonClick = () => {
    // Lógica para o clique no botão CTA
    console.log('Botão CTA clicado!');
  };

  return (
    <section className="max-w-6xl mx-auto flex flex-wrap items-center bg-gray-200 mt-20 ">
      <div className="w-full md:w-1/2">
        {/* Lado Esquerdo: Informações */}
        <div className="p-8">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">CheckSpeech AI</h2>
          <p className="text-lg text-gray-600">O CheckSpeech AI é um conjunto de APIs de conversão de fala em textos, bem como a interpretação do sentimento dominante nos dizeres. Nossa solução é treinada em mais de 500.000 horas de áudios, transcritos por humanos de uma ampla variedade de idades, nacionalidades, sotaques e níveis de instruções A API é comercializada no modelo SAAS (software as a service).</p>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        {/* Lado Direito: Imagem */}
        <div className="p-8">
          <img src="/caminho/para/imagem.jpg" alt="Imagem de IA" className="w-full h-auto" />
        </div>
      </div>
      <div className="text-center m-8">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={handleButtonClick}
      >
        Experimente agora!
      </button>
    </div>
    </section>
  );
};

export default Hero;
