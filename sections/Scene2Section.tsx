import Scene2Deco from '@/components/images/Decorations';
import Scene2 from '@/components/images/Scene2';
import { figmaLayout } from '@/constants/layout';
import { pxu } from '@/utils/pxu';

interface Scene2SectionProps {
  id?: string;
}

export default function Scene2Section({ id = 'scene2' }: Scene2SectionProps) {
  return (
    <section id={id} className="mt-5 flex justify-end">
      <Scene2Deco
        className="absolute"
        style={{
          left: 0,
          width: pxu(figmaLayout.scene2DecoWidth),
          bottom: pxu(figmaLayout.scene2DecoBottom),
        }}
      />
      <Scene2
        style={{
          marginRight: pxu(figmaLayout.scene2MarginRight),
          width: pxu(figmaLayout.scene2Width),
        }}
      />
    </section>
  );
}
