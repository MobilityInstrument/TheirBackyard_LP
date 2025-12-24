'use client';

export default function Function() {
  const functions = [
    {
      icon: 'ri-shape-line',
      title: '六角形グリッド',
      description: '地図は直径約300mの六角形グリッドに分割されています。'
    },
    {
      icon: 'ri-lightbulb-line',
      title: '段階的な明るさ',
      description: '各六角形は、その場所で1時間滞在するごとに徐々に明るくなり、10時間以上の滞在で完全に暗闇が照らされる仕組みです。'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'プライバシー保護',
      description: '本アプリで取得する位置情報は、他のユーザーやアプリ開発者を含む第三者に共有されることはありません。'
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
          Function
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {functions.map((func, index) => (
            <div 
              key={index}
              className="text-center"
            >
              <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-orange-100 to-orange-50 rounded-3xl mx-auto mb-6">
                <i className={`${func.icon} text-4xl text-orange-600 w-10 h-10 flex items-center justify-center`}></i>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {func.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {func.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
