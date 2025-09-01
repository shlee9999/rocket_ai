import ImageWithWrapper from '@/components/common/ImageWithWrapper';
import { figmaLayout } from '@/constants/layout';
import { pxu } from '@/utils/pxu';

interface SpeechBubble2Props {
  className?: string;
  style?: React.CSSProperties;
}

export default function SpeechBubble2({ className, style }: SpeechBubble2Props) {
  return (
    <ImageWithWrapper
      src="/assets/speech_bubble2.svg"
      alt="speech_bubble2"
      ratioWidth={figmaLayout.scene3SpeechBubbleWidth}
      ratioHeight={figmaLayout.scene3SpeechBubbleHeight}
      className={className}
      style={style}
    >
      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-center speech-bubble-text"
        style={{
          paddingBottom: pxu(figmaLayout.scene3SpeechBubblePaddingBottom),
        }}
      >
        <p>제가 oo님의 사주를</p>
        <p>보기 쉽게 표로 정리했어요</p>
      </div>
    </ImageWithWrapper>
  );
}
