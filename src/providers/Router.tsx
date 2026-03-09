import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../routes/Home';
import MainLayout from '@/layouts/MainLayout';
import NotFound from '@/routes/NotFound';

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
    path: '*',
    element: <NotFound />,
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
