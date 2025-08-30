import ImageWithWrapper from '@/components/ImageWrapper';
import SajuTable from '@/components/SajuTable';
import { figmaLayout } from '@/constants/layout';
import { getPercentage } from '@/utils/getPercentage';

const BACKGROUND_COLOR = '#F3F2EF';

/**
 * [규칙]
 * - 모든 이미지의 크기는 containerWidth를 기준으로 계산
 *
 */
export default function Home() {
  return (
    <main className='relative bg-yellow-500'>
      <div
        className='m-auto max-w-md'
        style={{
          maxWidth: figmaLayout.containerWidth, //! 임시
          backgroundColor: BACKGROUND_COLOR,
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
            // 꼬리 포함 height: 139
            // 꼬리 제외 height: 116
            // 차이: 23
          >
            <div
              className='absolute inset-0 flex flex-col items-center justify-center text-center '
              style={{
                paddingTop: getPercentage(23, 215),
              }}
            >
              <div className='text-black font-medium text-xs sm:text-sm leading-tight max-w-[90%]'>
                <p className='mb-1'>이제 본격적으로</p>
                <p className='mb-1'>OO님의 사주팔자를</p>
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
        <section id='scene3' className='relative bg-red-500 mt-10'>
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
              className='absolute inset-0 flex flex-col items-center justify-center text-center'
              style={{
                paddingBottom: getPercentage(22.78, 239),
              }}
            >
              <p className='text-black font-medium text-sm whitespace-nowrap'>
                제가 oo님의 사주를
              </p>
              <p className='text-black font-medium text-sm whitespace-nowrap'>
                보기 쉽게 표로 정리했어요
              </p>
            </div>
          </ImageWithWrapper>
          <ImageWithWrapper
            src='/assets/scene3.svg'
            alt='scene3'
            ratioWidth={figmaLayout.containerWidth}
            ratioHeight={figmaLayout.scene3Height}
            style={{
              width: getPercentage(
                figmaLayout.containerWidth,
                figmaLayout.containerWidth
              ),
            }}
          >
            {/* 사주표 */}
            <div
              className='absolute w-full'
              style={{
                paddingInline: getPercentage(12, figmaLayout.containerWidth),
                aspectRatio:
                  figmaLayout.sajuTableWidth / figmaLayout.sajuTableHeight,
                top: getPercentage(283, figmaLayout.scene3Height),
              }}
            >
              <SajuTable />
            </div>
          </ImageWithWrapper>
        </section>
      </div>
    </main>
  );
}

// 138.78 -104 = 34.78
