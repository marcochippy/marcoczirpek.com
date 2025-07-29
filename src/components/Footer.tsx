import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const navigateImprintGdpr = () => {
    navigate('imprint-gdpr');
  };
  return (
    <footer className="flex my-2">
      <div className="flex items-center justify-center mx-auto w-auto">
        -
        <button className=" p-2 hover:font-semibold hover:cursor-pointer" onClick={navigateImprintGdpr}>
          Imprint & GDPR
        </button>
        -
      </div>
    </footer>
  );
};

export default Footer;
