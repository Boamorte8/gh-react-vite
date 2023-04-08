import { NavLink } from 'react-router-dom';

export const HeaderLink = ({ url, label }: { url: string, label: string }) => {
  return (
    <NavLink
      to={url}
      className={({ isActive }) =>
        isActive ? 'underline scale-105 text-teal-600' : 'text-inherit'
      }
    >
      {label}
    </NavLink
  );
};
