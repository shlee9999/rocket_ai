import ImageWithWrapper from '@/components/common/ImageWithWrapper';
import { figmaLayout } from '@/constants/layout';

interface DecoProps {
  className?: string;
  style?: React.CSSProperties;
}

export function SajuTableDecoLeft({ className, style }: DecoProps) {
  return (
    <ImageWithWrapper
      src="/assets/saju_table_deco_left.svg"
      alt="saju_table_deco_left"
      ratioWidth={figmaLayout.sajuTableDecoWidth}
      ratioHeight={figmaLayout.sajuTableDecoHeight}
      className={className}
      style={style}
    />
  );
}

export function SajuTableDecoRight({ className, style }: DecoProps) {
  return (
    <ImageWithWrapper
      src="/assets/saju_table_deco_right.svg"
      alt="saju_table_deco_right"
      ratioWidth={figmaLayout.sajuTableDecoWidth}
      ratioHeight={figmaLayout.sajuTableDecoHeight}
      className={className}
      style={style}
    />
  );
}

export default function Scene2Deco({ className, style }: DecoProps) {
  return (
    <ImageWithWrapper
      src="/assets/scene2_deco.svg"
      alt="scene2_deco"
      ratioWidth={figmaLayout.scene2DecoWidth}
      ratioHeight={figmaLayout.scene2DecoHeight}
      className={className}
      style={style}
    />
  );
}
