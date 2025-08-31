import SajuTable from '@/components/SajuTable';
import { figmaLayout } from '@/constants/layout';
import { sajuColumns, sajuData } from '@/data/saju-data';
import ImageWithWrapper from './ImageWithWrapper';

export default function SajuTableSection() {
  return (
    <div
      className=''
      style={{
        paddingInline: 'calc(12 * var(--u))',
      }}
    >
      <div
        className='relative bg-secondary-bg w-full h-full border-border-primary'
        style={{
          paddingBlock: 'calc(8 * var(--u))',
          borderWidth: figmaLayout.SajuTableOuterBorderWidth,
        }}
      >
        {/* 가로 border를 가진 영역 */}
        <div
          className='border-y-[1px] border-border-secondary'
          style={{
            top: 'calc(8 * var(--u))',
            bottom: 'calc(8 * var(--u))',
            paddingInline: 'calc(9 * var(--u))',
          }}
        >
          {/* 내부 Width: figmaLayout.sajuTableWidth - 24 */}
          <div
            className='flex flex-col justify-between items-center'
            style={{
              marginTop: 'calc(32 * var(--u))',
            }}
          >
            <span className='font-size-sm' style={{ lineHeight: 1 }}>
              김로켓님의 사주
            </span>
            <span
              className='font-bold font-size-lg'
              style={{
                lineHeight: 1,
                marginTop: 'calc(12 * var(--u))',
              }}
            >
              1980년 8월 27일 08:10
            </span>
          </div>
          {/* 사주테이블 */}
          <div
            style={{
              paddingInline: 'calc(12 * var(--u))',
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
            width: 'calc(56 * var(--u))',
            top: 'calc(45 * var(--u))',
            left: 'calc(9 * var(--u))',
          }}
        />
        <ImageWithWrapper
          src='/assets/right.svg'
          alt='right'
          ratioWidth={56}
          ratioHeight={38}
          style={{
            position: 'absolute',
            width: 'calc(56 * var(--u))',
            top: 'calc(26 * var(--u))',
            right: 'calc(9 * var(--u))',
          }}
        />

        {/* 세로 border 박스 */}
        <div
          className='absolute border-x-[1px] border-border-secondary'
          style={{
            top: 0,
            bottom: 0,
            left: 'calc(8 * var(--u))',
            right: 'calc(8 * var(--u))',
          }}
        />
      </div>
    </div>
  );
}
