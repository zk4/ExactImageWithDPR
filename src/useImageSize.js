
import { useState, useEffect, useRef } from 'react';

function useImageSize(imageSrc) {
  const [imageCssWidth, setImageCssWidth] = useState(null);
  const imgRef = useRef(null);

  useEffect(() => {
    let image = new Image();
    image.src = imageSrc;

    image.onload = () => {
      const imgWidth = imgRef.current.offsetWidth;
      if (imgWidth > 0) {
        setImageCssWidth(`${imgWidth}px`);
      }
    };

    image.onerror = () => {
      console.error(`Failed to load image: ${imageSrc}`);
    };

    return () => {
      image.onload = null;
      image.onerror = null;
    };
  }, [imageSrc]);

  return [imgRef, imageCssWidth];
}

export default useImageSize;
// // Usage example:
// function ImageWithWidthMonitor({ src }) {
//   const [imgRef, imageCssWidth] = useImageCssWidthHook(src);
//
//   return (
//     <div>
//       <img ref={imgRef} src={src} alt="" />
//       {imageCssWidth && <p>Current image width: {imageCssWidth}</p>}
//     </div>
//   );
// }
