import { NavLink } from 'react-router-dom';

export const AppHeader = () => {
  return (
    <header className='flex items-center w-full h-16 mb-2'>
      <nav className='flex w-full justify-center gap-6 text-white text-lg'>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'underline scale-105 text-teal-600' : 'text-inherit'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/tremor"
          className={({ isActive }) =>
            isActive ? 'underline scale-105 text-teal-600' : 'text-inherit'
          }
        >
          Components
        </NavLink>
        <NavLink
          to="/gh-react-vite"
          className={({ isActive }) =>
            isActive ? 'underline scale-105 text-teal-600' : 'text-inherit'
          }
        >
          Test
        </NavLink>
      </nav>
    </header>
  );
};
