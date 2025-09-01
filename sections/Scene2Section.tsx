import Deco from '@/components/Deco';
import Scene2 from '@/components/Scene2';
import { figmaLayout } from '@/constants/layout';
import { pxu } from '@/utils/pxu';

interface Scene2SectionProps {
  id?: string;
}

export default function Scene2Section({ id = 'scene2' }: Scene2SectionProps) {
  return (
    <section id={id} className="mt-5 flex justify-end">
      <Deco
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
