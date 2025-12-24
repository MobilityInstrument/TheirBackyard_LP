'use client';

export default function About() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-orange-50/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          About Their Backyard
        </h2>

        <div className="space-y-8 text-gray-700 text-lg leading-relaxed">
          <p>
            自分が住む街の中にあるアクティビティのうち、「自分には合わないと思っていたもの」「そもそも存在を知らなかったもの」にあえてやってみる。その行動を後押しすることを目的としています。
          </p>

          <p>
            例えば、家に花を飾るために花屋に行く、夜にクラブへ遊びに行くといった行動は、ある人にとっては日常の風景（Backyard）ですが、別の人にとっては「自分には合わない」非日常の世界かもしれません。そうした他者の日常に触れることで、自分の世界を少しだけ広げてほしい――そんな想いを込めて、「誰かにとっては馴染み深い場所」を意味する『Their Backyard』と名付けました。
          </p>

          <p>
            引っ越し直後に街を歩くときに感じるあのわくわく感を、日常的に感じられる街をつくる。 時間が経つにつれて生活はルーティーン化し、街を探索する機会は失われていきます。我々のプロジェクトは、そうした状況に対し、高い探索意欲を日常的に維持できる仕組みの実現を目指し、その第一歩として「滞在空間を可視化する」アプリを公開しました。
          </p>
        </div>
      </div>
    </section>
  );
}
