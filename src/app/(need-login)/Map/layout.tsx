import Script from "next/script";

declare global {
  interface Window {
    kakao: any;
  }
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <head>
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </head>
      <body>
        <div> {children}</div>
        <Script src="https://developers.kakao.com/sdk/js/kakao.js" async />
        <Script
          type="text/javascript"
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false&libraries=services`}
        />
      </body>
    </>
  );
}
