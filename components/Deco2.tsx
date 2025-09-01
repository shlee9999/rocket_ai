import ImageWithWrapper from '@/components/ImageWithWrapper';
import { figmaLayout } from '@/constants/layout';

interface Deco2Props {
  className?: string;
  style?: React.CSSProperties;
}

export default function Deco2({ className, style }: Deco2Props) {
  return (
    <ImageWithWrapper
      src="/assets/deco2.svg"
      alt="deco2"
      ratioWidth={figmaLayout.scene2DecoWidth}
      ratioHeight={figmaLayout.scene2DecoHeight}
      className={className}
      style={style}
    />
  );
}
