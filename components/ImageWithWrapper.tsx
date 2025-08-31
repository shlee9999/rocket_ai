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
}

export default function ImageWithWrapper({
  src,
  alt,
  ratioWidth,
  ratioHeight,
  className,
  style,
  children,
}: ImageWithWrapperProps) {
  return (
    <div
      style={{
        aspectRatio: ratioWidth / ratioHeight,
        ...style,
      }}
      className={cn('relative', className)}
      role='img'
    >
      <Image src={src} alt={alt} fill />
      {children}
    </div>
  );
}
