'use client';

export default function Contact() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-orange-50/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
          Contact
        </h2>

        <div className="bg-white rounded-3xl p-10 shadow-sm">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-orange-100 rounded-xl flex-shrink-0">
                <i className="ri-building-line text-xl text-orange-600 w-5 h-5 flex items-center justify-center"></i>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">組織名</p>
                <p className="text-lg text-gray-900 font-semibold">人流楽器制作集団</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-orange-100 rounded-xl flex-shrink-0">
                <i className="ri-user-line text-xl text-orange-600 w-5 h-5 flex items-center justify-center"></i>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">担当</p>
                <p className="text-lg text-gray-900 font-semibold">利用者窓口担当 林秀星</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-orange-100 rounded-xl flex-shrink-0">
                <i className="ri-mail-line text-xl text-orange-600 w-5 h-5 flex items-center justify-center"></i>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Email</p>
                <a 
                  href="mailto:hayashi.shusei.s7@dc.tohoku.ac.jp"
                  className="text-lg text-orange-600 hover:text-orange-700 transition-colors cursor-pointer"
                >
                  hayashi.shusei.s7@dc.tohoku.ac.jp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
