import { figmaLayout } from '@/constants/layout';

/**
 * Figma 디자인의 픽셀 값을 반응형 폰트 크기로 변환
 * @param figmaFontSize - Figma에서의 폰트 크기 (px)
 * @param minRem - 최소 크기 (rem)
 * @param maxRem - 최대 크기 (rem)
 * @returns clamp CSS 값
 */
export function responsiveFontSize(figmaFontSize: number, minRem: number = 0.75, maxRem: number = 1.25): string {
  const vwValue = (figmaFontSize / figmaLayout.containerWidth) * 100;
  return `clamp(${minRem}rem, ${vwValue.toFixed(2)}vw, ${maxRem}rem)`;
}

/**
 * 브레이크포인트별 폰트 크기 생성
 */
export const fontSizes = {
  xs: responsiveFontSize(12, 0.6, 0.75), // 12px 기준
  sm: responsiveFontSize(14, 0.7, 0.875), // 14px 기준
  base: responsiveFontSize(16, 0.75, 1), // 16px 기준
  lg: responsiveFontSize(18, 0.9, 1.125), // 18px 기준
  xl: responsiveFontSize(20, 1, 1.25), // 20px 기준
} as const;
