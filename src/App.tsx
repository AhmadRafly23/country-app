import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import DetailCountry from './pages/DetailCountry';
import useMinHeight from './hooks/useMinHeight';

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
      </main>
    </>
  );
}

export default App;
