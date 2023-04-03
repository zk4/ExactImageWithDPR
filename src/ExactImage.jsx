import { useState,useRef,useMemo } from 'react';
import useDpr from "./useDPR";
import useWindowSize from "./useWindowSize";

function ExactImage({ src, alt, ...rest }) {
  const imgRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
	const dpr = useDpr();
  const windowSize = useWindowSize()
  const imageWidth = Math.min(800,windowSize.width);
	const dynamicSrc = useMemo(() => {
		return "https://dummyimage.com/" + imageWidth * dpr;
	}, [dpr,windowSize]);
  const handleImageLoaded = () => {
    setIsLoaded(true);
  };

  return (
    <>
      <img
        {...rest}
        ref={imgRef}
        src={dynamicSrc}
        alt={alt}
        onLoad={handleImageLoaded}
        style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.3s',width:imageWidth+'px' }}
      />
    </>
  );
}

export default ExactImage;
