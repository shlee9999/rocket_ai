import Scene1Section from '@/sections/Scene1Section';
import Scene2Section from '@/sections/Scene2Section';
import Scene3Section from '@/sections/Scene3Section';
import { pxu } from '@/utils/pxu';

export default function Home() {
  return (
    <div
      className="m-auto max-w-md relative cq-inline bg-primary-bg [&>section]:relative"
      style={{
        paddingBottom: pxu(57), //* 사주 테이블 23px 올라와 있으므로 80 - 23 = 57
      }}
    >
      <Scene1Section />
      <Scene2Section />
      <Scene3Section />
    </div>
  );
}
