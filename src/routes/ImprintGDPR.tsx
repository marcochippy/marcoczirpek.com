import { useNavigate } from 'react-router-dom';

const ImprintGDPR = () => {
  const navigate = useNavigate();

  const navigateHomepage = () => {
    navigate('/');
  };
  return (
    <div>
      <div className="flex items-center justify-center mx-auto w-auto mt-10 -mb-20 px-4">
        <button
          className="mx-1 py-2 px-4 transition-all text-white rounded-full duration-400 backdrop-blur-sm bg-black/80 ring-1 ring-black/3 hover:font-bold hover:text-black hover:bg-green-300/70 hover:ring-1 hover:ring-black/10 hover:cursor-pointer"
          onClick={navigateHomepage}>
          Back to Website
        </button>
      </div>
      <div className="max-w-[65rem] mt-30 mb-30 mx-auto flex flex-col px-4 lg:px-0">
        <h3 className="text-2xl md:text-3xl font-bold pb-6">Impressum & Datenschutz</h3>
        <h4 className="text-lg md:text-xl font-bold">Kontakt (freiwillig gemäß §5 TMG)</h4>
        <p className="">
          Marco Czirpek <br />
          impressum@marcoczirpek.com
        </p>
        <h4 className="text-lg md:text-xl font-bold pt-4">Über diese Website</h4>
        <p className="py-1">
          Diese Website ist ein rein privates, nicht-kommerzielles Projekt. Sie dokumentiert persönliche und berufliche
          Erfahrungen zu rein informativen Zwecken, ohne kommerzielle Zielsetzung. <br />
          Alle gezeigten Inhalte und Bilder wurden mit Zustimmung der jeweiligen Urheber verwendet. Es werden keine
          personenbezogenen Daten erhoben, keine Cookies gesetzt und keine Werbung geschaltet. Die Verlinkung externer
          Profile oder Inhalte erfolgt ausschließlich zu Informationszwecken. Es besteht keinerlei kommerzielle Absicht
          oder Angebotscharakter. <br />
          Diese Website wird über Dienste von Cloudflare bereitgestellt. Dabei erfolgt keine aktive Erhebung
          personenbezogener Daten durch mich.
        </p>
        <h4 className="text-lg md:text-xl font-bold pt-4">Datenschutz</h4>
        <p className="py-1">
          Diese Website erhebt und speichert keine personenbezogenen Daten. Es werden keine Cookies gesetzt, keine
          Tracker verwendet und keine Analyse-Dienste eingebunden. Die Auslieferung der Website erfolgt über Cloudflare,
          ein Content-Delivery-Netzwerk (CDN). Dabei können technische Zugriffsdaten (z. B. IP-Adresse, Browsertyp,
          Uhrzeit des Zugriffs) temporär verarbeitet werden, um die Website bereitzustellen und vor Angriffen zu
          schützen. Es findet keine personenbezogene Auswertung oder Weitergabe durch mich statt.
        </p>
      </div>
    </div>
  );
};

export default ImprintGDPR;
