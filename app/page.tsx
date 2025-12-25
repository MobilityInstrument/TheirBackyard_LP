'use client';

import Hero from './components/Hero';
import About from './components/About';
import Feature from './components/Feature';
import UseCase from './components/UseCase';
import Function from './components/Function';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Their Backyard',
    applicationCategory: 'LifestyleApplication',
    operatingSystem: 'iOS 15.2+',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'JPY',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      ratingCount: '1',
    },
    description: '自分の生活空間を可視化し、自分の外側の世界への一歩を後押しするiOSアプリ。六角形グリッドで行動範囲を記録し、新しい体験を促します。',
    image: 'https://mobilityinstrument.github.io/TheirBackyard_LP/images/logo.png',
    author: {
      '@type': 'Organization',
      name: '人流楽器制作集団',
    },
    publisher: {
      '@type': 'Organization',
      name: '人流楽器制作集団',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-white">
        <Hero />
        <About />
        <Feature />
        <UseCase />
        <Function />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
