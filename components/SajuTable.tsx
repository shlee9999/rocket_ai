import React from 'react';
import ImageWithWrapper from './ImageWrapper';
import { getPercentage } from '@/utils/getPercentage';
import { figmaLayout } from '@/constants/layout';

export default function SajuTable() {
  return (
    <div className='relative bg-[#F5F3EC] w-full h-full  border-[3px] border-[#1B2F49]'>
      {/* gap도 반응형? */}
      <div
        className='w-full h-full bg-red-500 absolute inset-0 m-auto'
        style={{
          height: getPercentage(
            figmaLayout.sajuTableHeight - 16,
            figmaLayout.containerWidth
          ),
          width: getPercentage(
            figmaLayout.sajuTableWidth - 0,
            figmaLayout.containerWidth
          ),
        }}
      >
        <div className='w-full h-full'>
          <div className='flex flex-col justify-center items-center gap-3'>
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
          </table>
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
          width: getPercentage(56, figmaLayout.sajuTableWidth),
          top: getPercentage(45, figmaLayout.sajuTableHeight),
          left: getPercentage(9, figmaLayout.sajuTableWidth),
        }}
      />
      <ImageWithWrapper
        src='/assets/right.svg'
        alt='right'
        ratioWidth={56}
        ratioHeight={38}
        style={{
          position: 'absolute',
          width: getPercentage(56, figmaLayout.sajuTableWidth),
          top: getPercentage(26, figmaLayout.sajuTableHeight),
          right: getPercentage(9, figmaLayout.sajuTableWidth),
        }}
      />
      {/* border */}
      <div
        className='absolute border-y-[1px] border-[#2B557E]'
        style={{
          left: 0,
          right: 0,
          top: getPercentage(8, figmaLayout.sajuTableHeight),
          bottom: getPercentage(8, figmaLayout.sajuTableHeight),
        }}
      />
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
