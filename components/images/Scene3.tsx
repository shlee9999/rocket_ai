import ImageWithWrapper from '@/components/common/ImageWithWrapper';
import { figmaLayout } from '@/constants/layout';
import { pxu } from '@/utils/pxu';
import FadeOverlay from '@/components/common/FadeOverlay';

interface Scene3Props {
  className?: string;
  style?: React.CSSProperties;
}

export default function Scene3({ className, style }: Scene3Props) {
  return (
    <ImageWithWrapper
      className={className}
      src="/assets/scene3.svg"
      alt="scene3"
      ratioWidth={figmaLayout.containerWidth}
      ratioHeight={figmaLayout.scene3Height}
      style={style}
    >
      <FadeOverlay style={{ height: pxu(118), top: pxu(188) }} />
    </ImageWithWrapper>
  );
}
