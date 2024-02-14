import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import DetailCountry from './pages/DetailCountry';
import useMinHeight from './hooks/useMinHeight';
import useScrollToTop from './hooks/useScrollToTop';
import { FaArrowUp } from 'react-icons/fa';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/detail/:name',
    element: <DetailCountry />,
  },
]);

function App() {
  const { navbarRef, offset } = useMinHeight();
  const { shown, scrollToTop } = useScrollToTop();
  return (
    <>
      <Navbar navbarRef={navbarRef} />
      <main
        className="px-8 md:px-16 py-8 bg-gray-50 dark:bg-gray-800"
        style={{
          minHeight: `calc(100vh - ${offset}px)`,
        }}
      >
        <RouterProvider router={router} />
        {shown && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-4 z-20 rounded-full bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-800"
          >
            <FaArrowUp size={24} />
          </button>
        )}
      </main>
    </>
  );
}

export default App;
