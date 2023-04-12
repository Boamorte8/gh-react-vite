import { useState } from 'react';

import { AnimatedTitle } from '@components/AnimatedTitle';
import reactLogo from '@assets/react.svg';
// import viteLogo from 'public/vite.svg';
import './Home.css';

export const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <div className='flex flex-col items-center'>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a> */}
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <AnimatedTitle>Vite + React</AnimatedTitle>
      <div className="card flex flex-col gap-6">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
};
