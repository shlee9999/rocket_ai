import React from 'react';
import ImageWithWrapper from './ImageWrapper';
import { getPercentage } from '@/utils/getPercentage';
import { figmaLayout } from '@/constants/layout';

const SajuTableOuterBorderWidth = 3;
export default function SajuTable() {
  return (
    <div
      className='relative bg-[#F5F3EC] w-full h-full border-[#1B2F49]'
      style={{
        borderWidth: SajuTableOuterBorderWidth,
      }}
    >
      {/* 가로 border를 가진 영역 */}
      <div
        className='absolute border-y-[1px] border-[#2B557E] bg-blue-500 inset-x-0'
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
        <div className='w-full h-full bg-yellow-500'></div>
        {/* <div
            className='flex flex-col justify-center items-center'
            style={{
              gap: getPercentage(12, figmaLayout.sajuTableHeight),
              marginTop: getPercentage(8, figmaLayout.sajuTableHeight),
            }}
          >
            <span>김로켓님의 사주</span>
            <span>1980년 8월 27일 08:10</span>
          </div>
          <table className=' '>
            <caption>사주표</caption>
            <thead>
              <tr>
                <th>날짜</th>
                <th>운세</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2025-01-01</td>
                <td>운세</td>
              </tr>
            </tbody>
          </table> */}
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
  );
}
