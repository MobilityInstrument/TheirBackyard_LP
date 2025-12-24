'use client';

import Image from 'next/image';

export default function Feature() {
  const features = [
    {
      icon: 'ri-map-2-line',
      title: '地図を「育てる」インターフェース',
      description: 'アプリ開始時、地図は暗闇に包まれています。実際にその場所を訪れ時間を過ごすことで、暗闇が照らされ本来の姿を取り戻します。',
      image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=400&fit=crop'
    },
    {
      icon: 'ri-time-line',
      title: '「通過」ではなく「滞在」を評価',
      description: '単に通過しただけでは明るくなりません。一定時間を過ごすことで光が灯ります。これは場所を「よく知る」プロセスを表現しています。',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop'
    },
    {
      icon: 'ri-eye-line',
      title: '生活空間の客観的な把握',
      description: '数週間利用すると自身の生活空間が可視化され、行動範囲の狭さへの気づきや、意外なアクティブさの発見に繋がります。',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
          Feature
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-to-b from-orange-50/50 to-white rounded-3xl p-8 hover:shadow-xl transition-shadow"
            >
              <div className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="w-14 h-14 flex items-center justify-center bg-orange-100 rounded-2xl mb-6">
                <i className={`${feature.icon} text-3xl text-orange-600 w-8 h-8 flex items-center justify-center`}></i>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
