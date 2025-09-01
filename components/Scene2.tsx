import ImageWithWrapper from '@/components/ImageWithWrapper';
import { figmaLayout } from '@/constants/layout';

interface Scene2Props {
  className?: string;
  style?: React.CSSProperties;
}

export default function Scene2({ className, style }: Scene2Props) {
  return (
    <ImageWithWrapper
      className={className}
      src="/assets/scene2.svg"
      alt="scene2"
      ratioWidth={figmaLayout.scene2Width}
      ratioHeight={figmaLayout.scene2Height}
      style={style}
    />
  );
}
