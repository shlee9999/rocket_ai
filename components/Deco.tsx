import ImageWithWrapper from '@/components/ImageWithWrapper';
import { figmaLayout } from '@/constants/layout';

interface DecoProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function Deco({ className, style }: DecoProps) {
  return (
    <ImageWithWrapper
      src="/assets/deco.svg"
      alt="deco"
      ratioWidth={figmaLayout.scene2DecoWidth}
      ratioHeight={figmaLayout.scene2DecoHeight}
      className={className}
      style={style}
    />
  );
}
