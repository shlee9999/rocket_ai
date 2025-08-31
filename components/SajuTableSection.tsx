import ImageWithWrapper from './ImageWrapper';
import { getPercentage } from '@/utils/getPercentage';
import { figmaLayout } from '@/constants/layout';
import SajuTable from '@/components/SajuTable';

const SajuTableOuterBorderWidth = 3;
export default function SajuTableSection() {
  return (
    <div
      className='absolute w-full'
      style={{
        paddingInline: getPercentage(12, figmaLayout.containerWidth),
        aspectRatio: figmaLayout.containerWidth / figmaLayout.sajuTableHeight,
        top: getPercentage(283, figmaLayout.scene3Height),
      }}
    >
      <div
        className='relative bg-[#F5F3EC] w-full h-full border-[#1B2F49]'
        style={{
          borderWidth: SajuTableOuterBorderWidth,
        }}
      >
        {/* 가로 border를 가진 영역 */}
        <div
          className='absolute border-y-[1px] border-[#2B557E] inset-x-0'
          style={{
            top: getPercentage(
              8,
              figmaLayout.sajuTableHeight - SajuTableOuterBorderWidth * 2
            ),
            bottom: getPercentage(
              8,
              figmaLayout.sajuTableHeight - SajuTableOuterBorderWidth * 2
            ),
            paddingInline: getPercentage(
              9,
              figmaLayout.sajuTableWidth - SajuTableOuterBorderWidth * 2
            ),
          }}
        >
          {/* 내부 Width: figmaLayout.sajuTableWidth - 24 */}
          {/* <div className='w-full h-full bg-yellow-500'></div> */}
          <div
            className='flex flex-col justify-between items-center gap-3'
            style={{
              marginTop: getPercentage(32, figmaLayout.sajuTableWidth - 24),
            }}
          >
            <span>김로켓님의 사주</span>
            <span>1980년 8월 27일 08:10</span>
          </div>
          {/* 사주테이블 */}
          <SajuTable columns={columns} data={data} />
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
          className='absolute border-x-[1px] border-[#2B557E]'
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

// 예시: 이미지 내용을 텍스트화한 props
const columns = ['時', '日', '月', '年']; // 상단 열 헤더 [3]

const data = [
  {
    rowHeader: '十星(십성)',
    values: ['傷官(상관)', '比肩(비견)', '傷官(상관)', '傷官(상관)'],
  },
  {
    rowHeader: '天干(천간)',
    values: ['壬(임수)', '丁(정화)', '癸(계수)', '癸(계수)'],
  },
  {
    rowHeader: '地支(지지)',
    values: ['辰(진토)', '巳(사화)', '亥(해수)', '酉(유금)'],
  },

  {
    rowHeader: '十星(지지)',
    values: ['比肩(비견)', '劫財(겁재)', '食神(식신)', '偏財(편재)'],
  },
  {
    rowHeader: '十二運星(12운성)',
    values: ['死(사)', '帝旺(제왕)', '胎(태)', '長生(장생)'],
  },
  {
    rowHeader: '十二神殺一(십이신살)',
    values: ['劫殺(겁살)', '地劫(지겁)', '驛馬(역마)', '將星(장성)'],
  },
  {
    rowHeader: '貴人(귀인)',
    values: [
      '',
      '',
      '天乙(천을귀인)',
      ['天乙(천을귀인)', '太極(태극귀인)', '文昌(문창귀인)'],
    ],
  },
];
