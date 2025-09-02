import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Metadata } from 'next';
import ImageWithWrapper from '@/components/common/ImageWithWrapper';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: '운세박사 청월당 - 프리미엄 웹툰 사주, 타로, 궁합, 작명, 해몽, AI 사주, 인공지능 운세',
  description:
    '오직 나만을 위한 청담동 프리미엄 웹툰형 종합사주를 만나보세요! 고민이 있으신가요? 미래가 불안하신가요? 명리학, 점성술을 오랜 시간 공부한 청담동 명리학 역술가, 타로 술사 청월아씨, 월하소녀, 몽월소녀, 홍연아씨가 나의 미래 운세를 상세하게 봐드립니다. 세계 1위 인공지능 사주팔자 운세박사에서 AI 사주, 해몽, 타로, 운세, 작명, 궁합을 봐보세요! 인공지능으로 정확한 운세를 점쳐보세요. 오늘의 운세, 연애운, 애정운, 금전운, 연애상담, 고민상담을 받아보세요.',
  keywords: [
    '사주',
    '팔자',
    '만화',
    '웹툰',
    '운세',
    '사주 분석',
    '청월아씨',
    '월하소녀',
    '몽월소녀',
    '홍연아씨',
    '사주 만화',
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    viewportFit: 'cover',
  },
  publisher: 'shlee9999',
  openGraph: {
    title: '운세박사 청월당 - 프리미엄 웹툰 사주, 타로, 궁합, 작명, 해몽, AI 사주, 인공지능 운세',
    description:
      '오직 나만을 위한 청담동 프리미엄 웹툰형 종합사주를 만나보세요! 고민이 있으신가요? 미래가 불안하신가요? 명리학, 점성술을 오랜 시간 공부한 청담동 명리학 역술가, 타로 술사 청월아씨, 월하소녀, 몽월소녀, 홍연아씨가 나의 미래 운세를 상세하게 봐드립니다. 세계 1위 인공지능 사주팔자 운세박사에서 AI 사주, 해몽, 타로, 운세, 작명, 궁합을 봐보세요! 인공지능으로 정확한 운세를 점쳐보세요. 오늘의 운세, 연애운, 애정운, 금전운, 연애상담, 고민상담을 받아보세요.',
    type: 'website',
    locale: 'ko_KR',
    siteName: '운세박사 청월당',
    images: [
      {
        url: 'https://secretfriend.blob.core.windows.net/fortunedoctor/front/images/og/og_bluemoonlady.png',
        width: 1200,
        height: 630,
      },
    ],
    url: 'https://aifortunedoctor.com/s/bluemoonladysaju',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'webtoon',
} satisfies Metadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <h1 className="sr-only">운세박사 - 청월당 프리미엄 사주 웹툰</h1>
        <header className="fixed inset-x-0 z-40 flex h-[3.75rem] justify-center mx-auto max-w-md bg-white md:h-[3.75rem]">
          <div className="flex w-full items-center justify-between px-6 xl:max-w-[77.5rem] md:px-6 xl:px-6">
            <ImageWithWrapper
              src="/assets/logo_with_black_typo.png"
              alt="logo"
              ratioWidth={351}
              ratioHeight={101}
              className="h-6 min-w-0"
            />
          </div>
        </header>
        <main className="relative">
          <div className="absolute inset-0 h-full bg-[#f2f2f2]" />
          {/* header height */}
          <div className="h-[3.75rem]" />
          {/* background */}
          {children}
        </main>
      </body>
    </html>
  );
}
