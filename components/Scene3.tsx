import ImageWithWrapper from '@/components/ImageWithWrapper';
import { figmaLayout } from '@/constants/layout';
import { pxu } from '@/utils/pxu';

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
      <div
        className="absolute inset-x-0"
        style={{
          height: pxu(118),
          top: pxu(188),
          background: 'linear-gradient(180deg, rgba(243,242,239,0) 0%, #F3F2EF 100%)',
        }}
      />
    </ImageWithWrapper>
  );
}
