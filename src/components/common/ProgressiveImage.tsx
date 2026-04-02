import { useState, useEffect } from "react";

interface ProgressiveImageProps {
  src: string;
  placeholder?: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

const ProgressiveImage = ({ src, placeholder, alt, className, width, height }: ProgressiveImageProps) => {
  const [imgSrc, setImgSrc] = useState(placeholder || src);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
      setIsLoaded(true);
    };
  }, [src]);

  return (
    <div 
      className={`relative overflow-hidden bg-muted/20 ${className}`} 
      style={{ aspectRatio: width && height ? `${width}/${height}` : "auto" }}
    >
      <img
        src={imgSrc}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        className={`w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
          isLoaded ? "opacity-100" : "opacity-40 blur-lg scale-110"
        }`}
      />
    </div>
  );
};

export default ProgressiveImage;
