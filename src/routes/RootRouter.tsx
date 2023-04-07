import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Home } from './Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

export const RootRouter = () => <RouterProvider router={router} />;
