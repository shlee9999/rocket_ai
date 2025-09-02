import { cn } from '@/utils/cn';

interface FadeOverlayProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function FadeOverlay({ className, style }: FadeOverlayProps) {
  return (
    <div
      className={cn('absolute inset-x-0', className)}
      style={{
        background: 'linear-gradient(180deg, rgba(243,242,239,0) 0%, #F3F2EF 100%)',
        ...style,
      }}
    />
  );
}
