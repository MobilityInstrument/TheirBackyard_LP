'use client';

import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function Footer() {
  const [privacyPolicy, setPrivacyPolicy] = useState('');
  const [termsOfService, setTermsOfService] = useState('');

  useEffect(() => {
    // プライバシーポリシーを読み込み
    fetch('/TheirBackyard_LP/docs/PRIVACY_POLICY.md')
      .then((res) => res.text())
      .then((text) => setPrivacyPolicy(text))
      .catch((err) => console.error('Failed to load privacy policy:', err));

    // 利用規約を読み込み
    fetch('/TheirBackyard_LP/docs/TERMS_OF_SERVICE.md')
      .then((res) => res.text())
      .then((text) => setTermsOfService(text))
      .catch((err) => console.error('Failed to load terms of service:', err));
  }, []);

  return (
    <footer className="py-16 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">プライバシーポリシー</h3>
            <div className="bg-gray-800 rounded-2xl p-6 h-96 overflow-y-auto">
              <div className="prose prose-invert prose-sm max-w-none prose-headings:text-white prose-p:text-gray-300 prose-li:text-gray-300">
                <Markdown remarkPlugins={[remarkGfm]}>{privacyPolicy}</Markdown>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">利用規約</h3>
            <div className="bg-gray-800 rounded-2xl p-6 h-96 overflow-y-auto">
              <div className="prose prose-invert prose-sm max-w-none prose-headings:text-white prose-p:text-gray-300 prose-li:text-gray-300">
                <Markdown remarkPlugins={[remarkGfm]}>{termsOfService}</Markdown>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © Human Mobility Instrumant 2025
          </p>

          <a
            href="https://readdy.ai/?ref=logo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors text-sm cursor-pointer whitespace-nowrap"
          >
          </a>
        </div>
      </div>
    </footer>
  );
}
