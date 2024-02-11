import { useEffect, useRef, useState } from 'react';

const useMinHeight = () => {
  const [offset, setOffset] = useState(0);

  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const navbarHeight = navbarRef.current?.offsetHeight;

    if (navbarHeight) {
      setOffset(navbarHeight);
    }
  }, []);

  return { offset, navbarRef };
};

export default useMinHeight;
