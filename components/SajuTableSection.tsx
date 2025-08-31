import ImageWithWrapper from './ImageWrapper';
import { getPercentage } from '@/utils/getPercentage';
import { figmaLayout } from '@/constants/layout';
import SajuTable from '@/components/SajuTable';
import { Row } from '@/types/SajuTable';

export default function SajuTableSection() {
  return (
    <div
      className=''
      style={{
        paddingInline: getPercentage(12, figmaLayout.containerWidth),
      }}
    >
      <div
        className='relative bg-[#F5F3EC] w-full h-full border-[#1B2F49]'
        style={{
          paddingBlock: getPercentage(8, figmaLayout.containerWidth),
          borderWidth: figmaLayout.SajuTableOuterBorderWidth,
        }}
      >
        {/* 가로 border를 가진 영역 */}
        <div
          className='border-y-[1px] border-[#2B557E]'
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
            <span className='font-size-xs' style={{ lineHeight: 1 }}>
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
            <SajuTable columns={columns} data={data} />
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
    rowHeader: { chinese: '十星', korean: '십성' },
    values: [
      { chinese: '傷官', korean: '상관' },
      { chinese: '比肩', korean: '비견' },
      { chinese: '傷官', korean: '상관' },
      { chinese: '傷官', korean: '상관' },
    ],
  },
  {
    rowHeader: { chinese: '天干', korean: '천간' },
    values: [
      {
        chinese: '壬',
        korean: '임',
        subChinese: '陽水',
        variant: 'visual',
        color: 'black',
      },
      {
        chinese: '丁',
        korean: '정',
        subChinese: '陰火',
        variant: 'visual',
        color: 'red',
      },
      {
        chinese: '癸',
        korean: '계',
        subChinese: '陰水',
        variant: 'visual',
        color: 'black',
      },
      {
        chinese: '癸',
        korean: '계',
        subChinese: '陰水',
        variant: 'visual',
        color: 'black',
      },
    ],
  },
  {
    rowHeader: { chinese: '地支', korean: '지지' },
    values: [
      {
        chinese: '寅',
        korean: '인',
        subChinese: '陽水',
        variant: 'visual',
        color: 'blueGreen',
      },
      {
        chinese: '巳',
        korean: '사',
        subChinese: '陰火',
        variant: 'visual',
        color: 'black',
      },
      {
        chinese: '亥',
        korean: '해',
        subChinese: '陰水',
        variant: 'visual',
        color: 'black',
      },
      {
        chinese: '酉',
        korean: '유',
        subChinese: '陰金',
        variant: 'visual',
        color: 'white',
      },
    ],
  },
  {
    rowHeader: { chinese: '十星', korean: '지지' },
    values: [
      { chinese: '比肩', korean: '비견' },
      { chinese: '劫財', korean: '겁재' },
      { chinese: '食神', korean: '식신' },
      { chinese: '偏財', korean: '편재' },
    ],
  },
  {
    rowHeader: {
      chinese: '十二運星',
      korean: '12운성',
      className: 'font-size-3xs',
    },
    values: [
      { chinese: '死', korean: '사' },
      { chinese: '帝旺', korean: '제왕' },
      { chinese: '胎', korean: '태' },
      { chinese: '長生', korean: '장생' },
    ],
  },
  {
    rowHeader: {
      chinese: '十二神殺',
      korean: '십이신살',
      className: 'font-size-3xs',
    },
    values: [
      { chinese: '劫殺', korean: '겁살' },
      { chinese: '地劫', korean: '지겁' },
      { chinese: '驛馬', korean: '역마' },
      { chinese: '將星', korean: '장성' },
    ],
  },
  {
    rowHeader: { chinese: '貴人', korean: '귀인' },
    values: [
      { chinese: '', korean: '' },
      { chinese: '', korean: '' },
      { chinese: '天乙', korean: '천을귀인' },
      [
        { chinese: '天乙', korean: '천을귀인' },
        { chinese: '太極', korean: '태극귀인' },
        { chinese: '文昌', korean: '문창귀인' },
      ],
    ],
  },
] satisfies Row[];
