'use client';

import Image from 'next/image';

export default function Feature() {
  const features = [
    {
      icon: 'ri-map-2-line',
      title: '地図を「育てる」インターフェース',
      description: 'アプリ開始時、地図は暗闇に包まれています。実際にその場所を訪れ時間を過ごすことで、暗闇が照らされ本来の姿を取り戻します。',
      image: 'https://readdy.ai/api/search-image?query=A%20dark%20map%20interface%20gradually%20illuminating%20with%20warm%20orange%20glowing%20hexagonal%20tiles%20as%20areas%20are%20explored%20showing%20transformation%20from%20darkness%20to%20light%20minimalist%20clean%20design%20with%20white%20background%20representing%20personal%20discovery%20and%20growth%20through%20exploration%20modern%20mobile%20app%20aesthetic%20peaceful%20and%20inviting%20atmosphere&width=600&height=400&seq=feature001&orientation=landscape'
    },
    {
      icon: 'ri-time-line',
      title: '「通過」ではなく「滞在」を評価',
      description: '単に通過しただけでは明るくなりません。一定時間を過ごすことで光が灯ります。これは場所を「よく知る」プロセスを表現しています。',
      image: 'https://readdy.ai/api/search-image?query=A%20peaceful%20scene%20showing%20person%20spending%20quality%20time%20in%20urban%20location%20with%20glowing%20light%20effect%20around%20them%20representing%20meaningful%20stay%20versus%20just%20passing%20through%20soft%20orange%20warm%20lighting%20minimalist%20white%20background%20conveying%20depth%20of%20experience%20and%20connection%20to%20place%20serene%20contemplative%20mood&width=600&height=400&seq=feature002&orientation=landscape'
    },
    {
      icon: 'ri-eye-line',
      title: '生活空間の客観的な把握',
      description: '数週間利用すると自身の生活空間が可視化され、行動範囲の狭さへの気づきや、意外なアクティブさの発見に繋がります。',
      image: 'https://readdy.ai/api/search-image?query=An%20overhead%20view%20of%20illuminated%20map%20showing%20personal%20activity%20patterns%20and%20living%20space%20visualization%20with%20hexagonal%20grid%20glowing%20in%20soft%20orange%20light%20revealing%20movement%20patterns%20and%20frequently%20visited%20areas%20clean%20white%20background%20modern%20data%20visualization%20aesthetic%20insightful%20and%20revealing%20atmosphere&width=600&height=400&seq=feature003&orientation=landscape'
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
