import { HeaderLink } from './HeaderLink';

export const AppHeader = () => {
  return (
    <header className='flex items-center w-full h-16 mb-2'>
      <nav className='flex w-full justify-center gap-6 text-white text-lg'>
        <HeaderLink
          url="/"
          label="Home"
        />
        <HeaderLink
          url="/tremor"
          label="Components"
        />
        <HeaderLink
          url="/gh-react-vite"
          label="Test"
        />
      </nav>
    </header>
  );
};
