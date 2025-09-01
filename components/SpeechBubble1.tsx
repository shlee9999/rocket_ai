import ImageWithWrapper from '@/components/ImageWithWrapper';
import { figmaLayout } from '@/constants/layout';
import { pxu } from '@/utils/pxu';

interface SpeechBubble1Props {
  className?: string;
  style?: React.CSSProperties;
}

export default function SpeechBubble1({ className, style }: SpeechBubble1Props) {
  return (
    <ImageWithWrapper
      src="/assets/speech_bubble1.svg"
      alt="speech_bubble1"
      ratioWidth={figmaLayout.speechBubble1Width}
      ratioHeight={figmaLayout.speechBubble1Height}
      className={className}
      style={style}
    >
      <div
        className="absolute inset-0 flex flex-col items-center justify-center"
        style={{
          paddingTop: pxu(figmaLayout.speechBubble1PaddingTop),
        }}
      >
        <p>이제 본격적으로</p>
        <p>OO님의 사주팔자를</p>
        <p>분석해볼 차례네요.</p>
      </div>
    </ImageWithWrapper>
  );
}
