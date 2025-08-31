import ImageWithWrapper from '@/components/ImageWithWrapper';
import SajuTableSection from '@/components/SajuTableSection';
import { figmaLayout } from '@/constants/layout';
import { pxu } from '@/utils/pxu';

/**
 * [규칙]
 * - 모든 이미지의 크기는 containerWidth를 기준으로 계산
 * - 최소 320px까지 고려된 반응형 레이아웃
 */
export default function Home() {
  return (
    <main className='m-auto max-w-md relative cq-inline'>
      <div
        className='bg-primary-bg'
        style={{
          paddingBottom: pxu(57), //* 사주 테이블 23px 올라와 있으므로 80 - 23 = 57
        }}
      >
        {/* SCENE 1: 장면1 + 말풍선1 */}
        <section
          id='scene1'
          className='relative'
          style={{
            //* 말풍선 위치 확보를 위한 패딩
            paddingBottom: pxu(figmaLayout.scene1PaddingBottom),
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
              className='absolute inset-x-0'
              style={{
                height: pxu(195),
                bottom: pxu(-6),
                background:
                  'linear-gradient(180deg, rgba(243,242,239,0) 0%, #F3F2EF 100%)',
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
              width: pxu(figmaLayout.speechBubble1Width),
              marginLeft: pxu(figmaLayout.speechBubble1MarginLeft),
            }}
          >
            <div
              className='absolute inset-0 flex flex-col items-center justify-center'
              style={{
                //* 말풍선 꼬리 부분 패딩
                paddingTop: pxu(figmaLayout.speechBubble1PaddingTop),
              }}
            >
              <p>이제 본격적으로</p>
              <p>OO님의 사주팔자를</p>
              <p>분석해볼 차례네요.</p>
            </div>
          </ImageWithWrapper>
        </section>

        {/* SCENE 2: 우측 글씨쓰는 장면 */}
        <section id='scene2' className='relative mt-5 flex justify-end'>
          {/* 데코 2 */}
          <ImageWithWrapper
            src='/assets/deco2.svg'
            alt='deco2'
            ratioWidth={figmaLayout.scene2DecoWidth}
            ratioHeight={figmaLayout.scene2DecoHeight}
            style={{
              position: 'absolute',
              left: 0,
              width: pxu(figmaLayout.scene2DecoWidth),
              bottom: pxu(figmaLayout.scene2DecoBottom),
            }}
          />
          <ImageWithWrapper
            src='/assets/scene2.svg'
            alt='scene2'
            ratioWidth={figmaLayout.scene2Width}
            ratioHeight={figmaLayout.scene2Height}
            style={{
              marginRight: pxu(figmaLayout.scene2MarginRight),
              width: pxu(figmaLayout.scene2Width),
            }}
          />
        </section>

        {/* SCENE 3: 정리표 */}
        <section id='scene3' className='relative mt-10'>
          {/* 말풍선2 */}
          <ImageWithWrapper
            src='/assets/speech_bubble2.svg'
            alt='speech_bubble2'
            ratioWidth={figmaLayout.scene3SpeechBubbleWidth}
            ratioHeight={figmaLayout.scene3SpeechBubbleHeight}
            className='absolute z-[1]'
            style={{
              left: pxu(figmaLayout.scene3SpeechBubbleMarginLeft),
              top: pxu(figmaLayout.scene3SpeechBubbleMarginTop),
              width: pxu(figmaLayout.scene3SpeechBubbleWidth),
            }}
          >
            <div
              className='absolute inset-0 flex flex-col items-center justify-center text-center speech-bubble-text'
              style={{
                //* 말풍선 꼬리 부분 패딩
                paddingBottom: pxu(figmaLayout.scene3SpeechBubblePaddingBottom),
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
            >
              <div
                className='absolute inset-x-0'
                style={{
                  height: pxu(118),
                  top: pxu(188),
                  background:
                    'linear-gradient(180deg, rgba(243,242,239,0) 0%, #F3F2EF 100%)',
                }}
              />
            </ImageWithWrapper>
            <div
              style={{
                //* 테이블 위치를 조정하기 위한 padding-top
                //* 하단 여백을 확보하기 위해, absolute로 하지 않고 relative로 처리
                // section height가 사주 테이블의 높이에 의해 동적으로 변경되므로, (absolute + top)으로 % 계산이 불가능하다.
                // 따라서 padding-top으로 부모의 width에 대한 % 계산으로 처리
                paddingTop: pxu(figmaLayout.scene3PaddingTop),
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
