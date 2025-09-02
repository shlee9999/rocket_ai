# 로켓 AI 코딩 테스트

## 프로젝트 개요

사주 팔자를 웹툰 형태로 시각화한 인터랙티브 웹 애플리케이션입니다.
김로켓님(1980년 8월 27일생)의 사주 정보를 표 형태로 정리하여 보여줍니다.

## 주요 구현 기능

### 반응형 디자인

- 컨테이너 쿼리 기반 반응형 레이아웃
- Figma 디자인 토큰 스케일링 시스템 (pxu 유틸)
- 모바일 우선 375px 기준 설계

### 웹 접근성

- 시맨틱 HTML 테이블 구조 (caption, scope, headers)
- 스크린리더 지원 (sr-only 텍스트)

### 성능 최적화

- Next.js Image 컴포넌트 + sizes 속성
- CSS 모듈화 및 컴포넌트 재사용성

### SEO 최적화

- 메타데이터
- 구조화된 robots 설정

## 기술 스택

### Frontend

- Next.js 15 (App Router)
- React 19
- TypeScript 5 (strict mode)

### Styling

- Tailwind CSS v4
- CSS Container Queries
- CSS Custom Properties

### Development Tools

- ESLint + Prettier
- pnpm

## 프로젝트 구조

```
├── app/                   # Next.js App Router
│   ├── layout.tsx         # 루트 레이아웃 + 메타데이터
│   ├── page.tsx           # 메인 페이지
│   └── globals.css        # 글로벌 스타일
├── components/            # 컴포넌트
│   ├── common/            # 공통 유틸리티
│   ├── images/            # 이미지 컴포넌트
│   └── SajuTable/         # 사주 테이블 모듈
├── sections/              # 페이지 섹션
├── types/                 # TypeScript 타입
├── constants/             # 상수
├── data/                  # 데이터
└── utils/                 # 유틸리티
```

## 실행 방법

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev

# 프로덕션 빌드
pnpm build
pnpm start
```

## 핵심 구현 포인트

### 1. 컨테이너 쿼리 반응형

```css
.cq-inline {
  container-type: inline-size;
  --u: calc(100cqw / 375);
}
```

### 2. 접근성 테이블

```tsx
<table>
  <caption className="sr-only">사주 정보 테이블</caption>
  <th scope="col" id="col-0">
    時
  </th>
  <td headers="row-1 col-0">비견</td>
</table>
```

### 3. 성능 최적화 이미지

```tsx
<Image src="/assets/scene1.svg" fill sizes="(max-width: 448px) 100vw, 448px" />
```

## 개발자

**이성훈 (shlee9999)**

- GitHub: https://github.com/shlee9999
