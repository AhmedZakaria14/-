"use client"
import Image, { ImageProps } from 'next/image';

export default function ImageWithFallback({ src, alt, ...props }: ImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      {...props}
    />
  );
}
