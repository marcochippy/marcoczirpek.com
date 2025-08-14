import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      redirect();
    }, 7000);

    return () => clearTimeout(timer);
  }, [navigate]);

  const redirect = () => {
    navigate('/', { replace: true });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold pb-2 drop-shadow-lg drop-shadow-white/5">
        404 - Page Not Found
      </h1>
      <p>
        The page you are looking for does not exist.
        <br />
        You will be redirected automatically.
        <br />
      </p>
      <p onClick={redirect} className="hover:cursor-pointer hover:underline">
        Click here if nothing happens.
      </p>
    </div>
  );
};

export default NotFound;
