import { useEffect, useRef, useState } from 'react';

function useComputedStyle(ref) {
  const [computedStyle, setComputedStyle] = useState(null);
  const refCallback = useRef();

  useEffect(() => {
    console.log(ref)
    refCallback.current = ref.current;
  });

  useEffect(() => {
    if (refCallback.current) {
      const computedStyle = window.getComputedStyle(refCallback.current);
      setComputedStyle(computedStyle);
    }
  }, [refCallback]);

  return computedStyle;
}

export default useComputedStyle;
