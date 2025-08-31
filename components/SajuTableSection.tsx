import ImageWithWrapper from './ImageWithWrapper';
import { getPercentage } from '@/utils/getPercentage';
import { figmaLayout } from '@/constants/layout';
import SajuTable from '@/components/SajuTable';
import { sajuColumns, sajuData } from '@/data/saju-data';

export default function SajuTableSection() {
  return (
    <div
      className=''
      style={{
        paddingInline: getPercentage(12, figmaLayout.containerWidth),
      }}
    >
      <div
        className='relative bg-secondary-bg w-full h-full border-border-primary'
        style={{
          paddingBlock: getPercentage(8, figmaLayout.containerWidth),
          borderWidth: figmaLayout.SajuTableOuterBorderWidth,
        }}
      >
        {/* 가로 border를 가진 영역 */}
        <div
          className='border-y-[1px] border-border-secondary'
          style={{
            top: getPercentage(
              8,
              figmaLayout.sajuTableHeight -
                figmaLayout.SajuTableOuterBorderWidth * 2
            ),
            bottom: getPercentage(
              8,
              figmaLayout.sajuTableHeight -
                figmaLayout.SajuTableOuterBorderWidth * 2
            ),
            paddingInline: getPercentage(
              9,
              figmaLayout.sajuTableWidth -
                figmaLayout.SajuTableOuterBorderWidth * 2
            ),
          }}
        >
          {/* 내부 Width: figmaLayout.sajuTableWidth - 24 */}
          <div
            className='flex flex-col justify-between items-center'
            style={{
              marginTop: getPercentage(32, figmaLayout.sajuTableWidth - 24),
            }}
          >
            <span className='font-size-sm' style={{ lineHeight: 1 }}>
              김로켓님의 사주
            </span>
            <span
              className='font-bold font-size-lg'
              style={{
                lineHeight: 1,
                marginTop: getPercentage(12, figmaLayout.sajuTableWidth - 24),
              }}
            >
              1980년 8월 27일 08:10
            </span>
          </div>
          {/* 사주테이블 */}
          <div
            style={{
              paddingInline: getPercentage(12, figmaLayout.sajuTableWidth - 24),
            }}
          >
            <SajuTable columns={sajuColumns} data={sajuData} />
          </div>
        </div>
        {/* Decorations */}
        <ImageWithWrapper
          src='/assets/left.svg'
          alt='left'
          ratioWidth={56}
          ratioHeight={38}
          style={{
            position: 'absolute',
            width: getPercentage(56, figmaLayout.sajuTableWidth - 6),
            top: getPercentage(45, figmaLayout.sajuTableHeight - 6),
            left: getPercentage(9, figmaLayout.sajuTableWidth - 6),
          }}
        />
        <ImageWithWrapper
          src='/assets/right.svg'
          alt='right'
          ratioWidth={56}
          ratioHeight={38}
          style={{
            position: 'absolute',
            width: getPercentage(56, figmaLayout.sajuTableWidth - 6),
            top: getPercentage(26, figmaLayout.sajuTableHeight - 6),
            right: getPercentage(9, figmaLayout.sajuTableWidth - 6),
          }}
        />

        {/* 세로 border 박스 */}
        <div
          className='absolute border-x-[1px] border-border-secondary'
          style={{
            top: 0,
            bottom: 0,
            left: getPercentage(8, figmaLayout.sajuTableWidth),
            right: getPercentage(8, figmaLayout.sajuTableWidth),
          }}
        />
      </div>
    </div>
  );
}
