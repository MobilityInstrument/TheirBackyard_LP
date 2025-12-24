'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/TheirBackyard_LP/images/hero-background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-white/80"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="mb-8 flex justify-center">
          <Image 
            src="/TheirBackyard_LP/images/logo.png"
            alt="Their Backyard Logo"
            width={120}
            height={120}
            className="rounded-3xl shadow-lg"
          />
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Their Backyard
        </h1>

        <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
          自分の生活空間を可視化し、<br />自分の外側の世界への一歩を後押しするアプリ
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer"
          >
            <i className="ri-apple-fill text-2xl w-6 h-6 flex items-center justify-center"></i>
            App Storeでダウンロード
          </a>
        </div>

        <p className="text-sm text-gray-600">
          iOS 15.2 以降対応 | 無料
        </p>
      </div>
    </section>
  );
}
