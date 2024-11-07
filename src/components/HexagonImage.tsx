import React from 'react';

interface HexagonImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function HexagonImage({ src, alt, className = '' }: HexagonImageProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="hexagon-clip overflow-hidden">
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover transform scale-110"
        />
      </div>
    </div>
  );
}