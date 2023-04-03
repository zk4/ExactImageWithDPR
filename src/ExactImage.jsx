import { useState,useRef,useMemo } from 'react';
import useDpr from "./useDPR";
import useWindowSize from "./useWindowSize";
const isFunction = ( data ) => {
	return Object.prototype.toString.call(data) === '[object Function]';
}
function ExactImage({ src, alt, width,  ...rest }) {
  const imgRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
	const dpr = useDpr();
  const windowSize = useWindowSize()

  // caculate the container width
  const imageWidth = useMemo(() => {
		return  Math.min(width,windowSize.width);
	}, [windowSize,width]);

  // caculate the acutal pixel needed because of dpr
	const dynamicSrc = useMemo(() => {
    if( isFunction(src)){
      return src( imageWidth , dpr);
    }else{
		  return "https://dummyimage.com/" +  imageWidth * dpr;
    }
	}, [dpr,windowSize,width]);

  const handleImageLoaded = () => {
    setIsLoaded(true);
  };

  return (
      <img
        {...rest}
        ref={imgRef}
        src={dynamicSrc}
        alt={alt}
        onLoad={handleImageLoaded}
        style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.3s',width:imageWidth+'px' }}
      />
  );
}

export default ExactImage;
