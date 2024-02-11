import { BsMoon, BsMoonFill } from 'react-icons/bs';
import { UseTheme } from '../contexts/ThemeContext';

export default function Navbar({
  navbarRef,
}: {
  navbarRef: React.RefObject<HTMLDivElement>;
}) {
  const { theme, toggleTheme } = UseTheme();

  return (
    <div
      className="flex justify-between py-6 px-8 md:px-16 border-b border-gray-100 sticky top-0 bg-white shadow-sm z-10 dark:bg-gray-700 dark:border-gray-700 dark:shadow-gray-900"
      ref={navbarRef}
    >
      <h1 className="text-lg md:text-2xl font-bold dark:text-white">
        Where in the world?
      </h1>
      <button
        type="button"
        className="flex items-center space-x-2 dark:text-white"
        onClick={toggleTheme}
      >
        {theme === 'light' ? <BsMoon /> : <BsMoonFill />}
        <span>Dark Mode</span>
      </button>
    </div>
  );
}
