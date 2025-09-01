import ImageWithWrapper from '@/components/common/ImageWithWrapper';
import { figmaLayout } from '@/constants/layout';
import { pxu } from '@/utils/pxu';

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
      <div
        className="absolute inset-x-0"
        style={{
          height: pxu(195),
          bottom: pxu(-6),
          background: 'linear-gradient(180deg, rgba(243,242,239,0) 0%, #F3F2EF 100%)',
        }}
      />
    </ImageWithWrapper>
  );
}
