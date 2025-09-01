import Scene1 from '@/components/images/Scene1';
import SpeechBubble1 from '@/components/images/SpeechBubble1';
import { figmaLayout } from '@/constants/layout';
import { pxu } from '@/utils/pxu';

interface Scene1SectionProps {
  id?: string;
}

export default function Scene1Section({ id = 'scene1' }: Scene1SectionProps) {
  return (
    <section
      id={id}
      style={{
        paddingBottom: pxu(figmaLayout.scene1PaddingBottom),
      }}
    >
      <Scene1 />
      <SpeechBubble1
        className="absolute"
        style={{
          bottom: 0,
          width: pxu(figmaLayout.speechBubble1Width),
          marginLeft: pxu(figmaLayout.speechBubble1MarginLeft),
        }}
      />
    </section>
  );
}
