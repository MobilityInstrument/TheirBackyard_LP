'use client';

export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">プライバシーポリシー</h3>
            <div className="bg-gray-800 rounded-2xl p-6 h-64 overflow-y-auto">
              <p className="text-gray-400 text-sm">
                プライバシーポリシーの内容がここに入ります。
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">利用規約</h3>
            <div className="bg-gray-800 rounded-2xl p-6 h-64 overflow-y-auto">
              <p className="text-gray-400 text-sm">
                利用規約の内容がここに入ります。
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 Their Backyard. All rights reserved.
          </p>

          <a
            href="https://readdy.ai/?ref=logo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors text-sm cursor-pointer whitespace-nowrap"
          >
            Made with Readdy
          </a>
        </div>
      </div>
    </footer>
  );
}
