import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    message: '',
    consent: false,
    captcha: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: fieldValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Realizar validações e enviar o formulário

    console.log(formData);
  };

  return (
    <section className="max-w-md mx-auto bg-white p-6 rounded-lg shadow mt-10" id='contact'>
      <h2 className="text-2xl mb-4">Formulário de Contato</h2>
      <form onSubmit={handleSubmit} className="flex flex-wrap -mx-2">
        <div className="w-full md:w-1/2 px-2 mb-4">
          <label htmlFor="name" className="block mb-2">
            Nome*
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="w-full md:w-1/2 px-2 mb-4">
          <label htmlFor="email" className="block mb-2">
            E-mail*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="w-full md:w-1/2 px-2 mb-4">
          <label htmlFor="phone" className="block mb-2">
            Telefone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="w-full md:w-1/2 px-2 mb-4">
          <label htmlFor="country" className="block mb-2">
            País*
          </label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          >
            <option value="">Selecione...</option>
            <option value="br">Brasil</option>
            <option value="us">Estados Unidos</option>
            {/* Outros países */}
          </select>
        </div>
        <div className="w-full px-2 mb-4">
          <label htmlFor="message" className="block mb-2">
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>
        <div className="w-full px-2 mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              required
              className="mr-2"
            />
            Eu concordo com a Política de Privacidade.
          </label>
        </div>
        {/* Adicione o campo de Captcha de acordo com a sua escolha */}
        <div className="w-full px-2 mb-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg transition duration-300 hover:bg-blue-600"
          >
            Enviar
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
