import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Metadata, Viewport } from 'next';
import ImageWithWrapper from '@/components/common/ImageWithWrapper';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export const metadata = {
  title: '청월아씨 정통사주 - 청월당 프리미엄 사주 웹툰 | 운세박사 청월당',
  description:
    '청담동 프리미엄 종합사주. 세계 1위 청담동 사주팔자 전문가 청월아씨의 운세 해석 결과를 무료로 확인하세요! 재벌, 연예인들이 찾는 점술가 청월아씨의 사주 해석을 통해 평생 운세를 알아보세요. AI 사주, 인터넷 사주, 사주 사이트, 사주 잘보는 곳! 안좋은 운세도 솔직하게 알려드립니다. 청담동 점짐 청월아씨가 봐주는 사주 운세!',
  keywords: ['사주', '팔자', '만화', '웹툰', '운세', '사주 분석', '청월아씨', '사주 만화'],
  publisher: 'shlee9999',
  openGraph: {
    title: '청월아씨 정통사주 - 청월당 프리미엄 사주 웹툰 | 운세박사 청월당',
    description:
      '청담동 프리미엄 종합사주. 세계 1위 청담동 사주팔자 전문가 청월아씨의 운세 해석 결과를 무료로 확인하세요! 재벌, 연예인들이 찾는 점술가 청월아씨의 사주 해석을 통해 평생 운세를 알아보세요. AI 사주, 인터넷 사주, 사주 사이트, 사주 잘보는 곳! 안좋은 운세도 솔직하게 알려드립니다. 청담동 점짐 청월아씨가 봐주는 사주 운세!',
    type: 'website',
    locale: 'ko_KR',
    siteName: '운세박사',
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
        <h1 className="sr-only">청월아씨 정통사주 - 청월당 프리미엄 사주 웹툰</h1>
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
          {children}
        </main>
      </body>
    </html>
  );
}
