import React from 'react';
import './App.css';
// import useTheme from './hooks/useTheme';
import Home from './components/Home';

function App(/*{size}*/) {
// const [colorTheme, setTheme ] = useTheme()

  return (
    // <div className="bg-white dark:bg-black h-screen pt-10">
    // <div className="flex justify-between items-center">
    //   <h1 className={`${size === "big" ? "text-3xl" : "text-xl" }   font-bold text-red-500 text-center`}>React StoryBook With Tailwind</h1>
    //   <button type="button" className="border border-gray-200 py-2 px-4 rounded-lg focus:outline-none text-black dark:text-white" onClick={() => setTheme(colorTheme)}>Switch Theme</button>

    //   <div className="text-black dark:text-white">Hello light mode & dark mode</div>
    // </div>
    // </div>
    <>
      <Home />
    </>
  );
}

export default App;
