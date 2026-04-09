"use client";

import { useState } from "react";
import Image from "next/image";

const faqs = [
  { q: "初期費用は本当に無料ですか？", a: "はい、完全無料です。常設型社食で必要な厨房設備の設置工事、調理機器の購入、内装工事などは一切不要です。キッチンカーが毎日オフィスに来るため、企業側が用意するのは駐車スペースのみとなります。" },
  { q: "どのくらいの駐車スペースが必要ですか？", a: "標準的なキッチンカー（全長約5m）が1台停車できるスペースがあれば大丈夫です。駐車場の一角や屋外スペースをご活用いただけます。詳しくは無料相談にてご確認ください。" },
  { q: "導入までどのくらいの期間がかかりますか？", a: "ご相談から最短1週間でサービス開始が可能です。まずは無料相談で現在の状況やご要望をヒアリングし、最適なプランをご提案します。" },
  { q: "メニューはどのように決まりますか？", a: "日替わりメニューはうまかキッチンのシェフチームが季節や栄養バランスを考慮して決定します。企業の要望に応じたカスタマイズも対応可能です。アレルギー対応メニューのご相談もお受けしています。" },
  { q: "社員への補助はどうやって管理しますか？", a: "専用の管理ダッシュボードから補助金額の設定・管理が可能です。社員ごとの利用状況もリアルタイムで確認でき、月次レポートも自動で発行されます。経理処理の手間を大幅に削減できます。" },
];

const menus = [
  { emoji: "🍜", label: "出来たてラーメン", from: "#ff9966", to: "#ff5e62" },
  { emoji: "🍛", label: "本格カレーライス", from: "#f7971e", to: "#ffd200" },
  { emoji: "🥗", label: "健康サラダボウル", from: "#56ab2f", to: "#a8e063" },
  { emoji: "🍱", label: "日替わり弁当", from: "#ee9ca7", to: "#ffdde1" },
  { emoji: "🍣", label: "海鮮丼", from: "#2193b0", to: "#6dd5ed" },
  { emoji: "🌮", label: "タコライス", from: "#fc4a1a", to: "#f7b733" },
  { emoji: "🍔", label: "グルメバーガー", from: "#7f00ff", to: "#e100ff" },
  { emoji: "🥘", label: "本格パスタ", from: "#11998e", to: "#38ef7d" },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="font-sans text-gray-800">

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm h-[68px]">
        <div className="max-w-[1160px] mx-auto px-6 h-full flex items-center justify-between gap-5">
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-11 h-11 bg-[#E8B800] rounded flex items-center justify-center text-2xl">🍜</div>
            <div className="flex flex-col leading-tight">
              <strong className="text-lg font-black text-gray-900 tracking-tight">うまかキッチン</strong>
              <span className="text-[10px] text-gray-500 tracking-widest">UMAKA KITCHEN</span>
            </div>
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-7">
              {[
                { href: "#service", ja: "サービスとは", en: "SERVICE" },
                { href: "#reasons", ja: "選ばれる理由", en: "REASONS" },
                { href: "#solutions", ja: "課題解決", en: "SOLUTIONS" },
                { href: "#cases", ja: "導入事例", en: "CASES" },
                { href: "#faq", ja: "よくある質問", en: "FAQ" },
              ].map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="flex flex-col items-center leading-tight text-gray-900 hover:text-[#C9A000] transition-colors">
                    <span className="text-[13px] font-bold">{item.ja}</span>
                    <span className="text-[10px] text-[#E8B800] font-black tracking-widest">{item.en}</span>
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" className="bg-[#E8B800] text-gray-900 font-black text-[13px] px-5 py-2.5 rounded-sm hover:bg-[#C9A000] transition-colors">
                  📄 お問い合わせ
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <div className="relative h-[520px] mt-[68px] overflow-hidden">
        <Image src="/images/hero.jpg" alt="うまかキッチン" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/10 flex items-center">
          <div className="max-w-[1160px] mx-auto px-12 w-full">
            <em className="block font-black italic text-[#E8B800] leading-none tracking-tight drop-shadow-lg mb-1" style={{ fontSize: "clamp(56px,8vw,100px)" }}>
              UMAKA
            </em>
            <span className="block font-black text-white tracking-wide drop-shadow" style={{ fontSize: "clamp(16px,2.5vw,26px)" }}>
              キッチンカーを活用した、新しいスタイルの社食サービス
            </span>
          </div>
        </div>
      </div>

      {/* BREADCRUMB */}
      <div className="bg-gray-100 border-b border-gray-200 py-2.5">
        <div className="max-w-[1160px] mx-auto px-6 text-xs text-gray-500">
          <a href="#" className="text-[#C9A000] hover:underline">ホーム</a> › うまかキッチン
        </div>
      </div>

      {/* INTRO + STATS */}
      <section className="py-20" id="service">
        <div className="max-w-[1160px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-black text-gray-900 leading-snug mb-4" style={{ fontSize: "clamp(22px,3.5vw,32px)" }}>
              常設設備ゼロで、<span className="text-[#C9A000]">最高の社食</span>を実現する。
            </h2>
            <p className="text-[15px] text-gray-500 max-w-xl mx-auto leading-relaxed">
              「専門店品質」「出来たての温かさ」「モバイルオーダー」を兼ね備えた、まったく新しい社食のかたち。初期費用0円でスタートできます。
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-[2px] bg-gray-900 border-2 border-gray-900 mb-16">
            {[
              { num: "0", unit: "円", label: "初期・設備投資", sub: "厨房工事も不要" },
              { num: "50〜70", unit: "%", label: "運営コスト削減", sub: "従来の社食と比較" },
              { num: "90", unit: "%+", label: "従業員満足度", sub: "導入企業アンケートより" },
            ].map((s) => (
              <div key={s.label} className="bg-white py-8 px-5 text-center">
                <div className="font-black italic text-[#C9A000] leading-none mb-2" style={{ fontSize: "clamp(32px,4.5vw,48px)" }}>
                  {s.num}<small className="text-gray-400 not-italic" style={{ fontSize: "0.45em" }}>{s.unit}</small>
                </div>
                <div className="text-[13px] font-bold text-gray-900">{s.label}</div>
                <div className="text-[11px] text-gray-400 mt-1">{s.sub}</div>
              </div>
            ))}
          </div>

          {/* Scene cards */}
          <div className="grid grid-cols-3 gap-0 border-2 border-gray-900">
            {[
              { num: "01", title: "場所を貸すだけ", img: "/images/scene01.jpg", text: "常設厨房ゼロで社食機能を導入。運営コストを50〜70%削減できます。必要なのは駐車スペースだけです。" },
              { num: "02", title: "モバイルオーダー", img: "/images/scene02.jpg", text: "事前注文・決済で、受け取るまでの待ち時間を20〜30%削減。ランチ難民問題を根本から解決します。" },
              { num: "03", title: "社食価格で提供", img: "/images/scene03.jpg", text: "企業補助の自動計算で、社員は手軽な価格で楽しめる。仕出し弁当の「冷たい・飽きる」を一気に解消。" },
            ].map((scene, i) => (
              <div key={scene.num} className={`${i < 2 ? "border-r-2 border-gray-900" : ""} overflow-hidden`}>
                <div className="bg-gray-900 px-5 py-4 flex items-center gap-3">
                  <div className="flex flex-col leading-none">
                    <span className="text-[10px] italic text-[#E8B800] font-black tracking-wider">Scene</span>
                    <span className="text-4xl font-black italic text-[#E8B800] leading-none">{scene.num}</span>
                  </div>
                  <h3 className="text-lg font-black text-white">{scene.title}</h3>
                </div>
                <div className="w-full aspect-video relative overflow-hidden">
                  <Image src={scene.img} alt={scene.title} fill className="object-cover" />
                </div>
                <div className="p-5 text-[14px] text-gray-600 leading-relaxed border-t border-gray-100">{scene.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MENU SLIDER */}
      <section className="py-16 bg-[#F7F4E8] overflow-hidden">
        <div className="max-w-[1160px] mx-auto px-6 mb-8 text-center">
          <span className="block font-black italic text-[#E8B800] leading-none" style={{ fontSize: "clamp(48px,6vw,80px)" }}>MENU</span>
          <h2 className="font-black text-gray-900 relative inline-block pb-5 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-1 after:bg-[#E8B800] after:rounded" style={{ fontSize: "clamp(18px,2.5vw,26px)" }}>
            日替わりメニュー例
          </h2>
        </div>
        <div className="overflow-hidden">
          <div className="flex gap-4 w-max" style={{ animation: "marquee 28s linear infinite" }}>
            {[...menus, ...menus].map((m, i) => (
              <div key={i} className="w-[200px] shrink-0 text-center">
                <div className="w-[200px] h-[150px] rounded flex items-center justify-center text-5xl"
                  style={{ background: `linear-gradient(135deg, ${m.from}, ${m.to})` }}>
                  {m.emoji}
                </div>
                <p className="text-[12px] font-bold mt-2 text-gray-900">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REASONS */}
      <section className="py-20" id="reasons">
        <div className="max-w-[1160px] mx-auto px-6 text-center mb-12">
          <span className="block font-black italic text-[#E8B800] leading-none" style={{ fontSize: "clamp(48px,6vw,80px)" }}>REASONS</span>
          <h2 className="font-black text-gray-900 relative inline-block pb-5 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-1 after:bg-[#E8B800] after:rounded" style={{ fontSize: "clamp(20px,2.8vw,28px)" }}>
            うまかキッチンが選ばれる3つの理由
          </h2>
          <p className="text-[15px] text-gray-500 mt-6">従来の社食の「当たり前」をすべて覆します。</p>
        </div>
        <div className="max-w-[1160px] mx-auto px-6 border-t-2 border-gray-900">
          {[
            {
              label: "🚐 REASON 01", title: "初期費用0円。\n明日から始められる。",
              body: "常設型社食に比べ、設備投資・厨房工事・人件費がかかりません。キッチンカーが毎日あなたのオフィスへ来るので、必要なのは駐車スペースだけ。運営コストを従来比50〜70%削減しながら、温かくて新鮮なランチを提供できます。",
              tags: ["厨房工事不要", "設備投資ゼロ", "最短1週間でスタート"],
              reverse: false, img: "/images/hero.jpg",
            },
            {
              label: "📲 REASON 02", title: "並ばない・悩まない。\n時間を取り戻す。",
              body: "専用アプリで事前注文・決済が完結。受け取り時間を指定すれば、待ち時間を20〜30%削減できます。外食で昼休みを「移動」と「待ち時間」に費やしていたランチ難民問題を根本から解決します。",
              tags: ["事前注文可能", "受け取り時間指定", "キャッシュレス決済"],
              reverse: true, img: null,
            },
            {
              label: "🍱 REASON 03", title: "温かくて美味しい。\n健康的な日替わりメニュー。",
              body: "仕出し弁当の「冷たい」「飽きる」「選択肢がない」を一気に解消。キッチンカーだから出来たての温かいランチを毎日届けられます。企業補助の自動計算で、社員はリーズナブルな社食価格で楽しめます。",
              tags: ["毎日出来たて", "日替わりメニュー", "企業補助対応"],
              reverse: false, img: "/images/food.jpg",
            },
          ].map((r, i) => (
            <div key={i} className={`grid grid-cols-2 border-b-2 border-gray-900 ${r.reverse ? "md:[direction:rtl]" : ""}`}>
              <div className={`p-10 flex flex-col justify-center [direction:ltr]`}>
                <span className="text-[10px] font-black tracking-[3px] text-[#C9A000] uppercase mb-2 block">{r.label}</span>
                <h3 className="font-black text-gray-900 leading-snug mb-4 whitespace-pre-line" style={{ fontSize: "clamp(20px,2.3vw,26px)" }}>{r.title}</h3>
                <p className="text-[14px] text-gray-600 leading-relaxed mb-5">{r.body}</p>
                <div className="flex flex-wrap gap-2">
                  {r.tags.map((t) => <span key={t} className="bg-[#FDF6D0] border border-[#E8B800] text-[#C9A000] text-[12px] font-bold px-3 py-1 rounded-sm">{t}</span>)}
                </div>
              </div>
              <div className={`relative min-h-[300px] bg-[#F7F4E8] border-l-2 border-gray-900 overflow-hidden [direction:ltr] ${r.reverse ? "border-l-0 border-r-2" : ""}`}>
                {r.img ? (
                  <Image src={r.img} alt={r.title} fill className="object-cover" />
                ) : (
                  <div className="flex flex-col items-center justify-center gap-3 p-8 h-full bg-blue-50">
                    <span className="text-7xl">📱</span>
                    <span className="bg-[#E8B800] text-gray-900 font-black text-sm px-4 py-2 rounded-sm">モバイルオーダー対応</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BAND */}
      <div className="bg-[#E8B800] py-14">
        <div className="max-w-[1160px] mx-auto px-6 flex items-center justify-between gap-8 flex-wrap">
          <div>
            <h2 className="font-black text-gray-900 leading-snug mb-2" style={{ fontSize: "clamp(18px,2.5vw,26px)" }}>
              まずは無料相談から。<br />初期費用0円でお試しいただけます。
            </h2>
            <p className="text-[14px] text-gray-700">通常、ご相談から最短1週間でスタートできます。受付時間：平日 10:00〜18:00</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <a href="#contact" className="bg-gray-900 text-white font-black text-[14px] px-8 py-4 rounded-sm hover:bg-gray-700 transition-colors">📄 資料をダウンロード</a>
            <a href="#contact" className="border-2 border-gray-900 text-gray-900 font-black text-[14px] px-8 py-[14px] rounded-sm hover:bg-gray-900 hover:text-white transition-colors">💬 オンライン相談</a>
          </div>
        </div>
      </div>

      {/* SOLUTIONS */}
      <section className="py-20 bg-gray-100" id="solutions">
        <div className="max-w-[1160px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="block font-black italic text-[#E8B800] leading-none" style={{ fontSize: "clamp(48px,6vw,80px)" }}>SOLUTIONS</span>
            <h2 className="font-black text-gray-900 relative inline-block pb-5 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-1 after:bg-[#E8B800] after:rounded" style={{ fontSize: "clamp(20px,2.8vw,28px)" }}>
              「うまかキッチン」で解決できること
            </h2>
            <p className="text-[15px] text-gray-500 mt-5">企業のランチ環境にまつわる、あらゆる課題に対応します。</p>
          </div>
          <div className="grid grid-cols-3 border-2 border-gray-900">
            {[
              { num: "01", title: "採用力を強化したい", body: "「食事補助あり」「社食あり」は求職者にとって魅力的な福利厚生。初期費用なしで実現できます。" },
              { num: "02", title: "食環境を充実させたい", body: "仕出し弁当の「冷たい・飽きる・選択肢がない」から脱却。毎日変わる日替わりメニューで満足度UP。" },
              { num: "03", title: "社内コミュニケーションを活性化したい", body: "キッチンカー周辺が自然な交流スポットに。部署を超えた会話が生まれます。" },
              { num: "04", title: "従業員の健康を支援したい", body: "健康的な日替わりメニューを社食価格で提供。栄養バランスの取れた食事で健康経営を推進。" },
              { num: "05", title: "コストを抑えながら社食を導入したい", body: "常設型社食の設備投資・人件費・食品ロスが不要。運営コスト50〜70%削減を実現できます。" },
              { num: "06", title: "従業員満足度を上げたい", body: "温かいランチ・企業補助・モバイル決済。3つが揃うことで、昼食体験を根本から変えます。" },
            ].map((s, i) => (
              <div key={s.num} className={`bg-white p-7 hover:bg-[#FDF6D0] transition-colors ${i % 3 < 2 ? "border-r border-gray-200" : ""} ${i < 3 ? "border-b border-gray-200" : ""}`}>
                <div className="text-5xl font-black italic text-[#E8B800] leading-none mb-3">{s.num}</div>
                <h3 className="text-[15px] font-black text-gray-900 mb-2 leading-snug">{s.title}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-20" id="cases">
        <div className="max-w-[1160px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="block font-black italic text-[#E8B800] leading-none" style={{ fontSize: "clamp(44px,6vw,76px)" }}>CASE STUDY</span>
            <h2 className="font-black text-gray-900 relative inline-block pb-5 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-1 after:bg-[#E8B800] after:rounded" style={{ fontSize: "clamp(20px,2.8vw,28px)" }}>
              導入事例
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {[
              { tag: "IT・ベンチャー", title: "導入後、社員のランチ満足度が大幅に向上。コミュニケーションも活性化。", quote: "以前は仕出し弁当を使っていましたが、冷たくて不評でした。うまかキッチン導入後は毎日温かいランチが食べられると好評です。" },
              { tag: "製造業", title: "設備投資ゼロで社食を実現。コスト削減と社員満足を両立できた。", quote: "工場の駐車場を貸すだけで社食機能が実現できるとは思いませんでした。初期費用もかからず大好評です。" },
              { tag: "医療・福祉", title: "昼休みの外出時間が削減。スタッフの休憩が本当の休憩に。", quote: "忙しい医療現場では昼の外出が難しく悩んでいました。モバイルオーダーで事前注文できるのでとても助かっています。" },
            ].map((c) => (
              <div key={c.tag} className="border-2 border-gray-900 hover:-translate-y-1 hover:shadow-[6px_6px_0_#E8B800] transition-all overflow-hidden">
                <span className="inline-block bg-[#E8B800] text-gray-900 text-[11px] font-black tracking-wider px-3 py-1.5 m-4">{c.tag}</span>
                <h3 className="text-[14px] font-black text-gray-900 px-4 py-2 leading-snug border-b border-gray-100">{c.title}</h3>
                <p className="p-4 text-[13px] text-gray-600 leading-relaxed">
                  <span className="text-2xl text-[#E8B800] font-black float-left mr-1 -mt-1">&ldquo;</span>
                  {c.quote}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#F7F4E8]" id="faq">
        <div className="max-w-[1160px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="block font-black italic text-[#E8B800] leading-none" style={{ fontSize: "clamp(52px,7vw,88px)" }}>FAQ</span>
            <h2 className="font-black text-gray-900 relative inline-block pb-5 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-1 after:bg-[#E8B800] after:rounded" style={{ fontSize: "clamp(20px,2.8vw,28px)" }}>
              よくある質問
            </h2>
          </div>
          <div className="max-w-[820px] mx-auto border-2 border-gray-900">
            {faqs.map((faq, i) => (
              <div key={i} className={i < faqs.length - 1 ? "border-b border-gray-200" : ""}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-[15px] text-gray-900 hover:bg-[#FDF6D0] transition-colors">
                  <span className="text-[18px] font-black italic text-[#C9A000] mr-3 shrink-0">Q</span>
                  <span className="flex-1">{faq.q}</span>
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center text-lg font-black shrink-0 transition-all ${openFaq === i ? "bg-[#E8B800] text-gray-900 rotate-45" : "bg-gray-900 text-white"}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 pl-16 text-[14px] text-gray-600 leading-relaxed">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GET STARTED */}
      <div className="bg-[#E8B800] py-14" id="contact">
        <div className="max-w-[1160px] mx-auto px-6 flex items-center justify-between gap-8 flex-wrap">
          <div>
            <h2 className="font-black text-gray-900 leading-snug mb-2" style={{ fontSize: "clamp(18px,2.5vw,26px)" }}>
              社員の満足度を上げながら、コストを下げる。
            </h2>
            <p className="text-[14px] text-gray-700">
              うまかキッチンで、持続可能な社食を実現しませんか？<br />
              受付時間：平日 10:00〜18:00 ／ info@machi-shashoku.com
            </p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <a href="#" className="bg-gray-900 text-white font-black text-[14px] px-8 py-4 rounded-sm hover:bg-gray-700 transition-colors">📄 資料ダウンロード（無料）</a>
            <a href="#" className="border-2 border-gray-900 text-gray-900 font-black text-[14px] px-8 py-[14px] rounded-sm hover:bg-gray-900 hover:text-white transition-colors">💬 オンラインで相談する</a>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 pt-14 pb-7">
        <div className="max-w-[1160px] mx-auto px-6">
          <div className="grid grid-cols-[280px_1fr] gap-16 pb-10 border-b border-white/10 mb-7">
            <div>
              <div className="w-11 h-11 bg-[#E8B800] rounded flex items-center justify-center text-2xl mb-3">🍜</div>
              <div className="text-xl font-black text-white mb-2">うまかキッチン</div>
              <p className="text-xs text-white/40 leading-relaxed">キッチンカーを活用した<br />新しいスタイルの社食サービス</p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              {[
                { title: "SERVICE", links: [{ label: "サービスとは", href: "#service" }, { label: "選ばれる理由", href: "#reasons" }, { label: "課題解決", href: "#solutions" }] },
                { title: "INFO", links: [{ label: "導入事例", href: "#cases" }, { label: "よくある質問", href: "#faq" }, { label: "お問い合わせ", href: "#contact" }] },
              ].map((col) => (
                <div key={col.title}>
                  <h4 className="text-[11px] tracking-[2px] uppercase text-[#E8B800] mb-3">{col.title}</h4>
                  <ul className="flex flex-col gap-2">
                    {col.links.map((l) => <li key={l.label}><a href={l.href} className="text-[13px] text-white/55 hover:text-white transition-colors">{l.label}</a></li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between text-xs text-white/30 flex-wrap gap-2">
            <p>© 2025 うまかキッチン All Rights Reserved.</p>
            <div className="flex gap-5">
              <a href="#" className="hover:text-white/60 transition-colors">プライバシーポリシー</a>
              <a href="#" className="hover:text-white/60 transition-colors">利用規約</a>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING CTA */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5">
        <a href="#contact" className="bg-[#E8B800] text-gray-900 font-black text-[13px] px-5 py-3.5 rounded-sm shadow-[4px_4px_0_#1a1a1a] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#1a1a1a] transition-all text-center">📄 資料DL</a>
        <a href="#contact" className="bg-gray-900 text-white font-black text-[13px] px-5 py-3.5 rounded-sm shadow-[4px_4px_0_#E8B800] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#E8B800] transition-all text-center">💬 相談する</a>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
