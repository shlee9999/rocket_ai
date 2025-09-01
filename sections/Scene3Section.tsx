import SpeechBubble2 from '@/components/images/SpeechBubble2';
import Scene3 from '@/components/images/Scene3';
import SajuTableSection from '@/components/SajuTable/SajuTableSection';
import { figmaLayout } from '@/constants/layout';
import { pxu } from '@/utils/pxu';

interface Scene3SectionProps {
  id?: string;
}

export default function Scene3Section({ id = 'scene3' }: Scene3SectionProps) {
  return (
    <section id={id} className="mt-10">
      {/* 말풍선2 */}
      <SpeechBubble2
        className="absolute z-[1]"
        style={{
          left: pxu(figmaLayout.scene3SpeechBubbleMarginLeft),
          top: pxu(figmaLayout.scene3SpeechBubbleMarginTop),
          width: pxu(figmaLayout.scene3SpeechBubbleWidth),
        }}
      />

      <Scene3 className="absolute w-full" />

      <div
        style={{
          // 사주테이블 위치 조정을 위한 div
          paddingTop: pxu(figmaLayout.scene3PaddingTop),
        }}
      />
      <SajuTableSection />
    </section>
  );
}
