import { cn } from '@/utils/cn';
import Image from 'next/image';

interface ImageWithWrapperProps {
  src: string;
  alt: string;
  ratioWidth: number;
  ratioHeight: number;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  sizes?: string;
}

export default function ImageWithWrapper({
  src,
  alt,
  ratioWidth,
  ratioHeight,
  className,
  style,
  children,
  sizes = '(max-width: 448px) 100vw, 448px',
}: ImageWithWrapperProps) {
  return (
    <div
      style={{
        aspectRatio: ratioWidth / ratioHeight,
        ...style,
      }}
      className={cn('relative', className)}
    >
      <Image src={src} alt={alt} fill sizes={sizes} />
      {children}
    </div>
  );
}
