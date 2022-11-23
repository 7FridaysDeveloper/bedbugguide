import { useState, useEffect } from 'react';

const useResize = (size = 0) => {
  const [innerWidth, setInnerWidth] = useState(Infinity);
  useEffect(() => {
    const setResize = () => {
      setInnerWidth(window.screen.width);
    }
    setResize();
    window.addEventListener('resize', setResize)
    return () => {
      window.removeEventListener('resize', setResize)
    };
  }, [size]);
  return [innerWidth > size];
}
export default useResize;
