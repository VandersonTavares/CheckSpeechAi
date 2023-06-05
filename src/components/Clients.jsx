import orbitcImg from "../assets/Orbitc-Color.svg";
import sitemarkImg from "../assets/Sitemark-Color.svg";
import pinpointImg from "../assets/Pinpoint-Color.svg";
import vertigoImg from "../assets/Vertigo-Color.svg";

const Client = () => {
  const logos = [
    { id: 1, src: orbitcImg, alt: 'Logo 1' },
    { id: 2, src: sitemarkImg, alt: 'Logo 2' },
    { id: 3, src: pinpointImg, alt: 'Logo 3' },
    { id: 4, src: vertigoImg, alt: 'Logo 4' }
  ];

  return (
    <section id="clients">
      <h2 className="text-2xl font-bold mb-4 text-center">Nossos Clientes</h2>
      <div className="flex justify-center flex-wrap items-center space-x-4 m-14">
        {logos.map((logo) => (
          <div key={logo.id} className="w-52">
            <img
              src={logo.src}
              alt={logo.alt}
              className="w-full h-auto filter grayscale hover:filter-none transition duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Client;
