import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Metadata } from 'next';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: '제 1장. 나의 사주 팔자 | 로켓 사주 웹툰',
  description: '사주 팔자를 재미있게 풀어낸 웹툰',
  keywords: ['사주', '팔자', '만화', '웹툰', '운세', '사주 분석', '김로켓', '사주 만화'],
  publisher: 'shlee9999',
  openGraph: {
    title: '제 1장. 나의 사주 팔자',
    description: '사주 팔자를 재미있게 풀어낸 웹툰',
    type: 'website',
    locale: 'ko_KR',
    siteName: '로켓 사주 만화',
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
