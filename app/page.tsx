import Image from 'next/image';

export default function Home() {
  return (
    <main className='relative bg-blue-200'>
      <div className='w-fit m-auto max-w-md flex flex-col'>
        <Image
          src={'/assets/intro.svg'}
          alt={'intro'}
          fill
          className='!relative'
        />
        <div className='relative w-fit bg-red-500'>
          <Image
            src={'/assets/speech_bubble_1.svg'}
            alt={'speech_bubble_1'}
            width={215}
            height={139}
            // className='object-contain'
          />
          <div className='absolute inset-0 flex flex-col items-center justify-center text-center pt-[23px]'>
            <p className='text-black font-medium text-sm whitespace-nowrap'>
              이제 본격적으로
            </p>
            <p className='text-black font-medium text-sm whitespace-nowrap'>
              OO님의 사주팔자를
            </p>
            <p className='text-black font-medium text-sm whitespace-nowrap'>
              분석해볼 차례네요.
            </p>
          </div>
        </div>
        <div className='relative  bg-red-500'>
          <Image
            src={'/assets/deco_2.svg'}
            alt={'deco_2'}
            width={153}
            height={120}
          />
          <Image
            className='self-end mr-[24px]'
            src={'/assets/writing.svg'}
            alt={'writing'}
            width={120}
            height={285}
          />
        </div>

        <div className='relative w-fit bg-red-500'>
          <Image
            src={'/assets/speech_bubble_2.svg'}
            alt={'speech_bubble_2'}
            width={239}
            height={138.78}
          />
          <div className='absolute inset-0 flex flex-col items-center justify-center text-center'>
            <p className='text-black font-medium text-sm whitespace-nowrap'>
              제가 oo님의 사주를
            </p>
            <p className='text-black font-medium text-sm whitespace-nowrap'>
              보기 쉽게 표로 정리했어요
            </p>
          </div>
        </div>
        <Image
          src={'/assets/talking.svg'}
          alt={'talking'}
          fill
          className='!relative'
        />
        <div>
          <Image src={'/assets/left.svg'} alt={'left'} fill />
          <Image
            src={'/assets/right.svg'}
            alt={'right'}
            width={100}
            height={100}
          />
        </div>
      </div>
    </main>
  );
}
