import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Home } from './Home/Home';
import { Test } from './Test';
import { Tremor } from './Tremor/Tremor';
import App from 'App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/gh-react-vite',
        element: <Test />,
      },
      {
        path: '/tremor',
        element: <Tremor />,
      },
    ]
  },
]);

export const RootRouter = () => <RouterProvider router={router} />;
