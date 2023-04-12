import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Home } from './Home/Home';
import { Test } from './Test';
import { Tremor } from './Tremor/Tremor';
import App from 'App';
import { RouteAnimation } from '@components/RouteAnimation';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <RouteAnimation classId='home'><Home /></RouteAnimation>,
      },
      {
        path: '/gh-react-vite',
        element: <RouteAnimation classId='test'><Test /></RouteAnimation>,
      },
      {
        path: '/tremor',
        element: <RouteAnimation classId='tremor'><Tremor /></RouteAnimation>,
      },
    ]
  },
]);

export const RootRouter = () => {
  return <RouterProvider router={router} />;
};
