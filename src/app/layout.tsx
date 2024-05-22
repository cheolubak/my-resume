import type { Metadata } from 'next';
import './globals.css';
import { ReactNode } from 'react';
import Head from 'next/head';
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata: Metadata = {
  title: '프론트엔드 개발자 - 박철우',
  description:
    '10년차 프론트엔드 개발자 박철우입니다. 계속해서 성장하는 개발자가 되기 위해 노력하고 있습니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='ko'>
      <Head>
        <title>프론트엔드 개발자 - 박철우</title>
        <link
          href='//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css'
          rel='preload'
          type='text/css'
          crossOrigin='anonymous'
          as='style'
        />
      </Head>
      <body>{children}</body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
    </html>
  );
}
