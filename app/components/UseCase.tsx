'use client';

export default function UseCase() {
  const useCases = [
    {
      icon: 'ri-footprint-line',
      text: '自分には縁がないと思っていた場所へ足を運んでみる。'
    },
    {
      icon: 'ri-road-map-line',
      text: 'いつも通るだけの道を、滞在することで地図上の光に変える。'
    },
    {
      icon: 'ri-user-search-line',
      text: '自分の行動パターンを客観的に振り返る。'
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-orange-50/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
          Use Case
        </h2>

        <div className="space-y-6">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow flex items-start gap-6"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-orange-100 rounded-xl flex-shrink-0">
                <i className={`${useCase.icon} text-2xl text-orange-600 w-6 h-6 flex items-center justify-center`}></i>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed pt-2">
                {useCase.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
