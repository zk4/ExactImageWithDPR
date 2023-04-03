import { useState, useEffect } from 'react';

function useDpr() {
  const [dpr, setDpr] = useState(window.devicePixelRatio);

  useEffect(() => {
    const handleResize = () => {
      setDpr(window.devicePixelRatio);
      console.log("chagned")
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return dpr;
}

export default useDpr;
