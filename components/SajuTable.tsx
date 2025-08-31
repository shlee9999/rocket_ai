import React from 'react';
import ImageWithWrapper from './ImageWrapper';
import { getPercentage } from '@/utils/getPercentage';
import { figmaLayout } from '@/constants/layout';

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
          <table
            className=''
            style={{
              marginTop: getPercentage(20, figmaLayout.sajuTableWidth - 24),
            }}
          >
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
