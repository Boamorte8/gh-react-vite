import { Outlet, useLocation } from 'react-router-dom';

import { AppHeader } from '@components/AppHeader';
import { LocationProvider } from '@lib/providers/LocationProvider';

function App() {
  const location = useLocation();
  return (
    <>
      <AppHeader />
      <LocationProvider>
        <Outlet key={location.key} />
      </LocationProvider>
    </>
  );
}

export default App;
