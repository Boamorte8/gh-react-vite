import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Home } from './Home/Home';
import { Test } from './Test';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/gh-react-vite',
    element: <Test />,
  },
]);

export const RootRouter = () => <RouterProvider router={router} />;
