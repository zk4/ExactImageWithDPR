import { useState } from 'react';
import  useImageSize  from './useImageSize';

function ExactImage({ src, alt, ...rest }) {
  const [imgRef, imageCssWidth] = useImageSize(src);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoaded = () => {
    setIsLoaded(true);
  };

  return (
    <div style={{ position: 'relative' }}>
      <img
        {...rest}
        ref={imgRef}
        src={src}
        alt={alt}
        onLoad={handleImageLoaded}
        style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.3s' }}
      />
      {!isLoaded && <span>Loading...</span>}
      {imageCssWidth && (
        <div
          style={{
            position: 'absolute',
            bottom: '0',
            right: '0',
            background: '#fff',
            padding: '4px 8px',
            fontSize: '12px',
            lineHeight: '16px',
          }}
        >
          {imageCssWidth}
        </div>
      )}
    </div>
  );
}

export default ExactImage;
