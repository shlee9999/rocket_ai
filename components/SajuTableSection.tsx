import SajuTable from '@/components/SajuTable';
import { figmaLayout } from '@/constants/layout';
import { sajuColumns, sajuData } from '@/data/saju-data';
import ImageWithWrapper from './ImageWithWrapper';
import { pxu } from '@/utils/pxu';

export default function SajuTableSection() {
  return (
    <div
      className=''
      style={{
        paddingInline: pxu(12),
      }}
    >
      <div
        className='relative bg-secondary-bg w-full h-full border-border-primary'
        style={{
          paddingBlock: pxu(8),
          borderWidth: figmaLayout.SajuTableOuterBorderWidth,
        }}
      >
        {/* 가로 border를 가진 영역 */}
        <div
          className='border-y-[1px] border-border-secondary'
          style={{
            top: pxu(8),
            bottom: pxu(8),
            paddingInline: pxu(9),
          }}
        >
          {/* 내부 Width: figmaLayout.sajuTableWidth - 24 */}
          <div
            className='flex flex-col justify-between items-center'
            style={{
              marginTop: pxu(32),
            }}
          >
            <span className='font-size-sm' style={{ lineHeight: 1 }}>
              김로켓님의 사주
            </span>
            <span
              className='font-bold font-size-lg'
              style={{
                lineHeight: 1,
                marginTop: pxu(12),
              }}
            >
              1980년 8월 27일 08:10
            </span>
          </div>
          {/* 사주테이블 */}
          <div
            style={{
              paddingInline: pxu(12),
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
          decorative
          sizes='56px'
          style={{
            position: 'absolute',
            width: pxu(56),
            top: pxu(45),
            left: pxu(9),
          }}
        />
        <ImageWithWrapper
          src='/assets/right.svg'
          alt='right'
          ratioWidth={56}
          ratioHeight={38}
          decorative
          sizes='56px'
          style={{
            position: 'absolute',
            width: pxu(56),
            top: pxu(26),
            right: pxu(9),
          }}
        />

        {/* 세로 border 박스 */}
        <div
          className='absolute border-x-[1px] border-border-secondary'
          style={{
            top: 0,
            bottom: 0,
            left: pxu(8),
            right: pxu(8),
          }}
        />
      </div>
    </div>
  );
}
