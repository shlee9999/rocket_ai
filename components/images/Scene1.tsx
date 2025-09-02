import ImageWithWrapper from '@/components/common/ImageWithWrapper';
import { figmaLayout } from '@/constants/layout';
import { pxu } from '@/utils/pxu';
import FadeOverlay from '@/components/common/FadeOverlay';

interface Scene1Props {
  className?: string;
  style?: React.CSSProperties;
}

export default function Scene1({ className, style }: Scene1Props) {
  return (
    <ImageWithWrapper
      className={className}
      src="/assets/scene1.svg"
      alt="scene1"
      ratioWidth={figmaLayout.containerWidth}
      ratioHeight={figmaLayout.scene1Height}
      style={style}
    >
      <FadeOverlay style={{ height: pxu(195), bottom: pxu(-6) }} />
    </ImageWithWrapper>
  );
}
