import { useCallback, useEffect, useState } from 'react';

export default function useScrollToTop(treshold: number = 300) {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledFromTop = window.scrollY;
      setShown(scrolledFromTop > treshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return { shown, scrollToTop };
}
