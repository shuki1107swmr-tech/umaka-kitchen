"use client";

import { useState } from "react";

const GALLERY_ITEMS = [
  { label: "外壁塗装（戸建て）", color: "bg-orange-200", area: "福岡市東区", year: "2024年" },
  { label: "内装リフォーム（LDK）", color: "bg-amber-200", area: "福岡市博多区", year: "2024年" },
  { label: "屋根塗装・葺き替え", color: "bg-yellow-200", area: "春日市", year: "2023年" },
  { label: "浴室リフォーム", color: "bg-orange-100", area: "福岡市南区", year: "2024年" },
  { label: "外構・エクステリア", color: "bg-amber-100", area: "太宰府市", year: "2023年" },
  { label: "フルリノベーション", color: "bg-stone-200", area: "福岡市早良区", year: "2024年" },
];

const FAQS = [
  {
    q: "見積もりは無料ですか？",
    a: "はい、現地調査・お見積もりは完全無料です。お気軽にお問い合わせください。費用が発生するのは工事着工後のみです。",
  },
  {
    q: "工事中は家にいる必要がありますか？",
    a: "外壁塗装・屋根工事は基本的に不在でも施工可能です。ただし内装リフォームの場合は内容によって異なりますので、担当者にご確認ください。",
  },
  {
    q: "工事期間はどれくらいかかりますか？",
    a: "外壁塗装は通常7〜14日、浴室リフォームは5〜10日、フルリノベーションは1〜2ヶ月が目安です。建物の状態や天候により変動します。",
  },
  {
    q: "マンションの工事も対応できますか？",
    a: "はい、マンションの専有部分（室内）のリフォームに対応しております。管理規約の確認など手続き面もサポートいたします。",
  },
  {
    q: "アパートなど賃貸物件のオーナーですが、対応してもらえますか？",
    a: "もちろんです。原状回復工事・入居者募集に向けたリフォームなど、投資物件のオーナー様からのご依頼も多数承っております。",
  },
  {
    q: "支払い方法を教えてください。",
    a: "現金・銀行振込のほか、クレジットカード（一括・分割）もご利用いただけます。また、リフォームローンのご案内も可能です。",
  },
];

const VOICES = [
  {
    name: "K.T様（福岡市東区・戸建て）",
    text: "外壁の塗り替えをお願いしました。担当者の方が丁寧に現状を説明してくださり、安心して任せられました。仕上がりも大満足です！",
    stars: 5,
  },
  {
    name: "M.S様（春日市・マンション）",
    text: "浴室とキッチンのリフォームを依頼。工期も予定通りで、作業中も現場をきれいに保ってくれていたのが印象的でした。",
    stars: 5,
  },
  {
    name: "Y.O様（福岡市南区・戸建て）",
    text: "屋根の雨漏りを相談したところ、迅速に対応いただきました。他社より費用が抑えられたうえ、品質も高く大変助かりました。",
    stars: 5,
  },
];

const PRICES = [
  { name: "外壁塗装", range: "50万円〜", desc: "一般的な2階建て住宅（外壁面積150㎡程度）", note: "足場・養生・下地処理込み" },
  { name: "屋根塗装", range: "20万円〜", desc: "コロニアル屋根（屋根面積70㎡程度）", note: "高圧洗浄・下地補修込み" },
  { name: "浴室リフォーム", range: "60万円〜", desc: "在来浴室→ユニットバス交換", note: "解体・給排水工事込み" },
  { name: "キッチン交換", range: "50万円〜", desc: "システムキッチン入替（I型2.7m）", note: "取付工事・処分費込み" },
  { name: "内装リフォーム", range: "30万円〜", desc: "LDK（20畳）クロス・床張替え", note: "家具移動含まず" },
  { name: "フルリノベーション", range: "500万円〜", desc: "戸建て全室（延べ床100㎡）", note: "スケルトン工事含む" },
];

export default function DemoPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    category: "",
    message: "",
  });

  return (
    <div className="font-sans text-stone-800 bg-white">
      {/* Sample Notice Bar */}
      <div className="bg-stone-700 text-white text-center text-xs py-2 px-4">
        ※ これはHP制作サービスのサンプルです。掲載の会社情報・電話番号はダミーです。
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-stone-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-lg">福</span>
            </div>
            <div>
              <div className="font-black text-stone-800 text-sm leading-tight">福岡リフォーム工房</div>
              <div className="text-stone-500 text-xs">株式会社</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-stone-600">
            <a href="#features" className="hover:text-orange-500 transition-colors">特徴</a>
            <a href="#gallery" className="hover:text-orange-500 transition-colors">施工事例</a>
            <a href="#price" className="hover:text-orange-500 transition-colors">料金目安</a>
            <a href="#faq" className="hover:text-orange-500 transition-colors">よくある質問</a>
            <a href="#contact" className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors font-semibold">
              無料相談
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-stone-800 via-stone-700 to-orange-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange-400 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-300 rounded-full translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-36">
          <div className="max-w-2xl">
            <div className="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-6 tracking-wider uppercase">
              福岡No.1 リフォーム会社
            </div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              住まいの悩み、<br />
              <span className="text-orange-400">まるごと解決。</span>
            </h1>
            <p className="text-stone-300 text-lg md:text-xl leading-relaxed mb-10">
              外壁塗装・屋根工事・水回りリフォームから<br className="hidden md:block" />
              フルリノベーションまで。福岡で20年以上の実績。<br className="hidden md:block" />
              地域密着で、あなたの大切な家を守ります。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-block bg-orange-500 hover:bg-orange-400 text-white font-bold py-4 px-8 rounded-full text-lg transition-all shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5"
              >
                無料お見積もりはこちら →
              </a>
              <a
                href="#gallery"
                className="inline-block bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all"
              >
                施工事例を見る
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-stone-300">
              <span className="flex items-center gap-2">
                <span className="text-orange-400 text-lg">✓</span> 見積もり・相談無料
              </span>
              <span className="flex items-center gap-2">
                <span className="text-orange-400 text-lg">✓</span> 施工実績1,500件超
              </span>
              <span className="flex items-center gap-2">
                <span className="text-orange-400 text-lg">✓</span> 自社施工でコスト削減
              </span>
            </div>
          </div>
        </div>

        {/* Floating card */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="bg-white text-stone-800 rounded-2xl shadow-2xl p-6 w-64">
            <div className="text-orange-500 font-black text-3xl mb-1">1,500<span className="text-lg">件+</span></div>
            <div className="text-stone-500 text-sm mb-4">福岡県内の施工実績</div>
            <div className="border-t border-stone-100 pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-stone-500">顧客満足度</span>
                <span className="font-bold text-orange-500">98.2%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-stone-500">創業年数</span>
                <span className="font-bold">20年以上</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-stone-500">対応エリア</span>
                <span className="font-bold">福岡県全域</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="text-orange-500 font-bold text-sm tracking-widest uppercase mb-2">Why Choose Us</div>
            <h2 className="text-3xl md:text-4xl font-black text-stone-800">
              選ばれる3つの理由
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🏠",
                title: "自社職人による高品質施工",
                desc: "下請けに丸投げせず、自社の熟練職人が一貫して施工します。中間マージンがなく、品質管理も徹底。納得いくまで丁寧な仕事をお約束します。",
                accent: "bg-orange-500",
              },
              {
                icon: "💰",
                title: "適正価格・明朗会計",
                desc: "見積書はすべて項目別に明記。追加料金が発生する場合は必ず事前にご説明します。他社の相見積もりも歓迎。価格に自信があります。",
                accent: "bg-amber-500",
              },
              {
                icon: "🛡",
                title: "10年間のアフターサポート",
                desc: "施工完了後も安心の10年保証（対象工事）。定期点検サービスもご用意しております。長期にわたるお付き合いを大切にしています。",
                accent: "bg-stone-600",
              },
            ].map((f, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-8 group">
                <div className={`w-14 h-14 ${f.accent} rounded-xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform`}>
                  {f.icon}
                </div>
                <h3 className="font-black text-xl mb-3 text-stone-800">{f.title}</h3>
                <p className="text-stone-500 leading-relaxed text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="text-orange-500 font-bold text-sm tracking-widest uppercase mb-2">Works</div>
            <h2 className="text-3xl md:text-4xl font-black text-stone-800">施工事例ギャラリー</h2>
            <p className="text-stone-500 mt-3">福岡県内での豊富な施工実績をご覧ください</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_ITEMS.map((item, i) => (
              <div key={i} className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer">
                <div className={`${item.color} h-52 flex flex-col items-center justify-center relative`}>
                  <div className="text-stone-600 text-4xl mb-2">🏗</div>
                  <div className="text-stone-700 font-bold text-sm">{item.label}</div>
                  <div className="absolute inset-0 bg-stone-800/0 group-hover:bg-stone-800/10 transition-colors" />
                  <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    詳細を見る
                  </div>
                </div>
                <div className="bg-white p-4">
                  <div className="font-bold text-stone-800 mb-1">{item.label}</div>
                  <div className="flex justify-between text-xs text-stone-400">
                    <span>📍 {item.area}</span>
                    <span>{item.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-3 px-8 rounded-full transition-colors">
              施工事例をもっと見る
            </button>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section id="area" className="py-20 bg-gradient-to-br from-stone-800 to-stone-700 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="text-orange-400 font-bold text-sm tracking-widest uppercase mb-2">Service Area</div>
            <h2 className="text-3xl md:text-4xl font-black">対応エリア</h2>
            <p className="text-stone-300 mt-3">福岡県全域に対応しております</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              "福岡市博多区", "福岡市中央区", "福岡市東区", "福岡市南区",
              "福岡市早良区", "福岡市西区", "福岡市城南区", "春日市",
              "大野城市", "太宰府市", "筑紫野市", "糸島市",
              "宗像市", "古賀市", "糟屋郡各町", "その他福岡県内",
            ].map((area, i) => (
              <div key={i} className="bg-white/10 hover:bg-orange-500/80 transition-colors rounded-xl p-3 text-center text-sm font-semibold cursor-default">
                {area}
              </div>
            ))}
          </div>
          <p className="text-center text-stone-400 text-sm mt-6">
            ※ 上記エリア外でもご相談ください。遠方対応可能な場合があります。
          </p>
        </div>
      </section>

      {/* Price Section */}
      <section id="price" className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="text-orange-500 font-bold text-sm tracking-widest uppercase mb-2">Price Guide</div>
            <h2 className="text-3xl md:text-4xl font-black text-stone-800">料金・費用目安</h2>
            <p className="text-stone-500 mt-3 text-sm">
              ※ 以下は目安価格です。建物の状態・仕様により変動します。詳細は無料見積りにてご確認ください。
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRICES.map((p, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow border-t-4 border-orange-400">
                <div className="font-black text-lg text-stone-800 mb-1">{p.name}</div>
                <div className="text-3xl font-black text-orange-500 mb-2">{p.range}</div>
                <div className="text-stone-500 text-sm mb-3">{p.desc}</div>
                <div className="bg-orange-50 text-orange-700 text-xs px-3 py-1.5 rounded-full inline-block">
                  {p.note}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 bg-orange-50 border border-orange-200 rounded-2xl p-6 text-center">
            <p className="text-stone-700 font-semibold mb-4">
              正確なお見積もりは現地調査の後にご提示します。調査・見積もりは<span className="text-orange-500 font-black">完全無料</span>です。
            </p>
            <a href="#contact" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-colors">
              無料見積もりを依頼する
            </a>
          </div>
        </div>
      </section>

      {/* Voices Section */}
      <section id="voices" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="text-orange-500 font-bold text-sm tracking-widest uppercase mb-2">Testimonials</div>
            <h2 className="text-3xl md:text-4xl font-black text-stone-800">お客様の声</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {VOICES.map((v, i) => (
              <div key={i} className="bg-stone-50 rounded-2xl p-7 relative shadow-sm hover:shadow-md transition-shadow">
                <div className="text-orange-400 text-4xl font-serif absolute top-4 left-5 leading-none select-none">"</div>
                <div className="text-yellow-400 text-lg mb-3 mt-4">
                  {"★".repeat(v.stars)}
                </div>
                <p className="text-stone-600 leading-relaxed text-sm mb-5">{v.text}</p>
                <div className="border-t border-stone-200 pt-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold">
                    {v.name[0]}
                  </div>
                  <div className="text-stone-700 font-semibold text-sm">{v.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-stone-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="text-orange-500 font-bold text-sm tracking-widest uppercase mb-2">FAQ</div>
            <h2 className="text-3xl md:text-4xl font-black text-stone-800">よくある質問</h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left flex items-start gap-4 p-5 hover:bg-stone-50 transition-colors"
                >
                  <span className="text-orange-500 font-black text-lg leading-none mt-0.5">Q</span>
                  <span className="font-semibold text-stone-800 flex-1 text-sm leading-relaxed">{faq.q}</span>
                  <span className={`text-orange-500 text-lg transition-transform ${openFaq === i ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 flex gap-4 border-t border-stone-100">
                    <span className="text-amber-500 font-black text-lg leading-none mt-3">A</span>
                    <p className="text-stone-600 text-sm leading-relaxed mt-3">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-orange-500 to-amber-600 text-white">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-orange-100 font-bold text-sm tracking-widest uppercase mb-2">Contact</div>
            <h2 className="text-3xl md:text-4xl font-black">無料お問い合わせ</h2>
            <p className="text-orange-100 mt-3">お気軽にご相談ください。24時間以内に担当者よりご連絡いたします。</p>
          </div>
          <div className="bg-white rounded-3xl shadow-2xl p-8 text-stone-800">
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-sm font-semibold text-stone-600 mb-1.5">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="山田 太郎"
                  className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-stone-600 mb-1.5">
                  電話番号 <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="092-XXX-XXXX"
                  className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition"
                />
              </div>
            </div>
            <div className="mb-5">
              <label className="block text-sm font-semibold text-stone-600 mb-1.5">
                メールアドレス
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="taro@example.com"
                className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition"
              />
            </div>
            <div className="mb-5">
              <label className="block text-sm font-semibold text-stone-600 mb-1.5">
                ご相談内容の種類
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition bg-white"
              >
                <option value="">選択してください</option>
                <option value="gaiheki">外壁塗装</option>
                <option value="yane">屋根工事・塗装</option>
                <option value="bathroom">浴室リフォーム</option>
                <option value="kitchen">キッチンリフォーム</option>
                <option value="naiso">内装リフォーム</option>
                <option value="renovation">フルリノベーション</option>
                <option value="gaiko">外構・エクステリア</option>
                <option value="other">その他</option>
              </select>
            </div>
            <div className="mb-7">
              <label className="block text-sm font-semibold text-stone-600 mb-1.5">
                ご相談・お問い合わせ内容
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="例：自宅の外壁の塗り替えを検討しています。2階建て、築15年です。まず見積もりをお願いしたいです。"
                rows={5}
                className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition resize-none"
              />
            </div>
            <button
              type="button"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-4 rounded-xl text-lg transition-colors shadow-md hover:shadow-orange-500/30"
            >
              無料で相談する（送信）
            </button>
            <p className="text-center text-stone-400 text-xs mt-4">
              ※ 送信いただいた情報は業務目的以外には使用しません。
            </p>
          </div>

          {/* Phone CTA */}
          <div className="mt-8 text-center">
            <p className="text-orange-100 text-sm mb-2">お急ぎの方はお電話でもどうぞ</p>
            <div className="text-4xl font-black tracking-wider">092-XXX-XXXX</div>
            <div className="text-orange-200 text-sm mt-1">受付時間：平日・土曜 9:00〜18:00</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-14">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-black text-lg">福</span>
                </div>
                <div>
                  <div className="text-white font-black text-sm">福岡リフォーム工房</div>
                  <div className="text-stone-500 text-xs">株式会社</div>
                </div>
              </div>
              <p className="text-sm leading-relaxed">
                福岡県内を中心に、外壁塗装・屋根工事・水回りリフォームを手がける地域密着のリフォーム会社です。
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 text-sm">サービス</h4>
              <ul className="space-y-2 text-sm">
                {["外壁塗装", "屋根工事・塗装", "浴室リフォーム", "キッチンリフォーム", "フルリノベーション", "外構・エクステリア"].map((s) => (
                  <li key={s}><a href="#" className="hover:text-orange-400 transition-colors">{s}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 text-sm">会社情報</h4>
              <address className="not-italic space-y-2 text-sm">
                <div>📍 〒812-0000 福岡市博多区○○町1-2-3</div>
                <div>📞 <a href="tel:092XXXXXXX" className="hover:text-orange-400">092-XXX-XXXX</a></div>
                <div>📠 FAX: 092-XXX-XXXX</div>
                <div>⏰ 受付：平日・土曜 9:00〜18:00</div>
              </address>
            </div>
          </div>
          <div className="border-t border-stone-700 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-stone-600">
            <div>© 2024 福岡リフォーム工房 株式会社. All rights reserved.</div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-stone-400">プライバシーポリシー</a>
              <a href="#" className="hover:text-stone-400">会社概要</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
