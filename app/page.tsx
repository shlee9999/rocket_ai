import ImageWithWrapper from '@/components/ImageWrapper';
import SajuTableSection from '@/components/SajuTableSection';
import { figmaLayout } from '@/constants/layout';
import { getPercentage } from '@/utils/getPercentage';

// 배경색은 이제 TailwindCSS 커스텀 색상으로 사용

/**
 * [규칙]
 * - 모든 이미지의 크기는 containerWidth를 기준으로 계산
 * - 최소 320px까지 고려된 반응형 레이아웃
 */
export default function Home() {
  return (
    // todo 배경색 제거
    <main
      className='m-auto max-w-md relative bg-yellow-500'
      style={{
        maxWidth: figmaLayout.containerWidth, //! 임시
      }}
    >
      <div
        className='bg-primary-bg'
        style={{
          paddingBottom: getPercentage(80 - 23, figmaLayout.containerWidth), //* 사주 테이블 23px 올라와 있으므로
        }}
      >
        {/* SCENE 1: 장면1 + 말풍선1 */}
        <section
          id='scene1'
          className='relative'
          style={{
            paddingBottom: getPercentage(
              figmaLayout.scene1PaddingBottom,
              figmaLayout.containerWidth
            ),
          }}
        >
          {/* 장면1. */}
          <ImageWithWrapper
            src='/assets/scene1.svg'
            alt='scene1'
            ratioWidth={figmaLayout.containerWidth}
            ratioHeight={figmaLayout.scene1Height}
          >
            {/* todo 레이아웃 개선, 페이드아웃 추가 */}
            <div
              className='absolute inset-x-0 h-[300px]'
              style={{
                height: getPercentage(195, figmaLayout.scene1Height),
                bottom: getPercentage(-6, figmaLayout.scene1Height),
              }}
            />
          </ImageWithWrapper>
          {/* 말풍선 1 */}
          <ImageWithWrapper
            src='/assets/speech_bubble1.svg'
            alt='speech_bubble1'
            ratioWidth={215}
            ratioHeight={139}
            className='absolute bottom-0'
            style={{
              width: getPercentage(215, figmaLayout.containerWidth),
              marginLeft: getPercentage(24, figmaLayout.containerWidth),
            }}
          >
            <div
              className='absolute inset-0 flex flex-col items-center justify-center text-center '
              style={{
                paddingTop: getPercentage(23, 215),
              }}
            >
              <div
                className='speech-bubble-text'
                style={{
                  maxWidth: getPercentage(195, 215), // 말풍선 너비 대비 텍스트 영역
                }}
              >
                <p>이제 본격적으로</p>
                <p>OO님의 사주팔자를</p>
                <p>분석해볼 차례네요.</p>
              </div>
            </div>
          </ImageWithWrapper>
        </section>
        {/* SCENE 2: 우측 글씨쓰는 장면 */}
        <section id='scene2' className='relative mt-5 flex justify-end'>
          {/* 데코 2 */}
          <ImageWithWrapper
            src='/assets/deco2.svg'
            alt='deco2'
            ratioWidth={153}
            ratioHeight={120}
            style={{
              position: 'absolute',
              left: 0,
              width: getPercentage(153, figmaLayout.containerWidth),
              bottom: getPercentage(38, figmaLayout.scene2Height),
            }}
          />
          <ImageWithWrapper
            src='/assets/scene2.svg'
            alt='scene2'
            ratioWidth={161}
            ratioHeight={285}
            style={{
              // marginRight: getPercentage(24, figmaLayout.containerWidth),
              marginLeft: getPercentage(24, figmaLayout.containerWidth),
              width: getPercentage(161, figmaLayout.containerWidth),
            }}
          />
        </section>

        {/* SCENE 3: 정리표 */}
        <section id='scene3' className='relative mt-10'>
          {/* 말풍선2 */}
          <ImageWithWrapper
            src='/assets/speech_bubble2.svg'
            alt='speech_bubble2'
            ratioWidth={239}
            ratioHeight={138.78}
            className='absolute z-[1]'
            style={{
              left: getPercentage(24, figmaLayout.containerWidth),
              bottom: getPercentage(271.22, figmaLayout.scene3Height),
              width: getPercentage(239, figmaLayout.containerWidth),
            }}
          >
            <div
              className='absolute inset-0 flex flex-col items-center justify-center text-center speech-bubble-text'
              style={{
                paddingBottom: getPercentage(22.78, 239),
              }}
            >
              <p>제가 oo님의 사주를</p>
              <p>보기 쉽게 표로 정리했어요</p>
            </div>
          </ImageWithWrapper>
          {/* SCENE 3 */}
          <div>
            <ImageWithWrapper
              className='absolute w-full'
              src='/assets/scene3.svg'
              alt='scene3'
              ratioWidth={figmaLayout.containerWidth}
              ratioHeight={figmaLayout.scene3Height}
            />
            <div
              style={{
                width: '100%',
                paddingTop: getPercentage(283, figmaLayout.containerWidth),
              }}
            />
            <SajuTableSection />
          </div>
        </section>
      </div>
    </main>
  );
}

// 138.78 -104 = 34.78
