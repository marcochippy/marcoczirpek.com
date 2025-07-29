import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../routes/Home';
import MainLayout from '@/layouts/MainLayout';
import ImprintGDPR from '@/routes/ImprintGDPR';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: 'imprint-gdpr',
    element: <ImprintGDPR />,
  },
]);

const Router = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Router;
