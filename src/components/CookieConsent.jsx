import { useState } from 'react';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(true);

  const handleAccept = () => {
    // Lógica para aceitar os cookies aqui
    setShowConsent(false);
  };

  if (!showConsent) {
    return null;
  }

  return (
    <div className="bg-gray-900 fixed bottom-0 left-0 right-0 py-2 px-4 text-center z-10">
      <div className="text-gray-300 text-sm">
        Utilizamos cookies para garantir a melhor experiência no nosso site. Ao continuar a navegação, você concorda com o uso de cookies.
        <button
          onClick={handleAccept}
          className="ml-4 bg-gray-600 hover:bg-gray-700 text-white py-1 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          Aceitar
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
