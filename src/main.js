const CONFIG = {
  lineUrl: '#contact', // LINE公式URL取得後に差し替え
  formEndpoint: '', // フォーム送信先取得後に差し替え
  phone: '042-650-6260'
};

const services = [
  ['01', '壁・クロス', '壁材やクロスの張り替えなど、部屋の印象を変える壁まわりの内装仕上げ。'],
  ['02', '天井仕上げ・軽天', '天井の仕上げと、壁・天井の下地となる軽量鉄骨の骨組みづくり。'],
  ['03', '床仕上げ', '空間の用途や暮らし方に合わせた床まわりの内装仕上げ。'],
  ['04', '間仕切り', '部屋や店舗のレイアウト変更に伴う間仕切りの新設・変更。'],
  ['05', '防音工事', '壁・床・天井など、音の悩みに合わせた内装面からの防音対策。'],
  ['06', '畳・ふすま', '和室の畳やふすまを含む、住まいに合わせた内装のご相談。']
];

const icon = (name) => {
  const paths = {
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.33 1.84.56 2.8.69A2 2 0 0 1 22 16.92z"/>',
    mail: '<path d="M4 4h16v16H4z"/><path d="m4 6 8 7 8-7"/>',
    line: '<path d="M21 11.3c0 4.1-4 7.5-9 7.5-.8 0-1.6-.1-2.3-.3L5 21l1.2-4C4.2 15.6 3 13.6 3 11.3c0-4.2 4-7.6 9-7.6s9 3.4 9 7.6Z"/><path d="M7.5 9v4M10 9v4M13 9v4M13 9l3 4M16 9v4"/>'
  };
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${paths[name]}</svg>`;
};

document.querySelector('#app').innerHTML = `
  <div class="grain"></div>
  <header class="header">
    <a class="brand" href="#top" aria-label="ページ上部へ"><span>LH</span><b>有限会社<br>エルエイチコンストラクション</b></a>
    <nav aria-label="メインナビゲーション">
      <a href="#services">対応工事</a><a href="#about">私たちについて</a><a href="#flow">ご相談の流れ</a><a href="#faq">よくある質問</a>
    </nav>
    <a class="header-cta" href="#contact">お問い合わせ ${icon('arrow')}</a>
    <button class="menu" aria-label="メニューを開く" aria-expanded="false"><i></i><i></i></button>
  </header>

  <main id="top">
    <section class="hero">
      <div class="orb orb-a"></div><div class="orb orb-b"></div>
      <div class="hero-copy reveal">
        <p class="eyebrow">INTERIOR FINISHING · HACHIOJI</p>
        <h1>壁も、床も、天井も。<br><em>暮らしに合う内装へ。</em></h1>
        <p class="lead">八王子市の内装仕上工事会社です。壁・天井・床、間仕切り、防音、畳・ふすままで。工事内容がまだ決まっていない段階でも、まずはご相談ください。</p>
        <div class="hero-actions">
          <a class="btn btn-line js-line" href="${CONFIG.lineUrl}">${icon('line')} LINEで写真を送って相談</a>
          <a class="btn btn-ghost" href="#contact">フォームで相談 ${icon('arrow')}</a>
        </div>
      </div>
      <div class="hero-visual reveal">
        <img src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=86" alt="明るく整えられた住宅内装のイメージ" />
        <span class="image-note">IMAGE PHOTO</span>
        <div class="floating-card"><small>AREA</small><b>東京都<br>八王子市を拠点に対応</b></div>
      </div>
      <a class="scroll" href="#services"><span></span>SCROLL</a>
    </section>

    <section class="intro section reveal" id="about">
      <p class="section-no">01 — ABOUT</p>
      <div>
        <h2>「どこを、どう直せばいい？」<br>その段階から話せる内装屋です。</h2>
        <p>壁紙を変えたい、部屋を仕切りたい、天井や床の傷みが気になる。内装の相談は、工事名が分からなくても大丈夫です。気になる場所と希望をお聞きし、必要な工事を整理します。</p>
        <p class="fact-note">有限会社エルエイチコンストラクションは、東京都八王子市川町に所在する内装仕上工事会社です。</p>
      </div>
    </section>

    <section class="services section" id="services">
      <div class="section-head reveal"><p class="section-no">02 — SERVICES</p><h2>相談できる内装工事</h2><p>住宅・店舗などの内装仕上げについてご相談いただけます。</p></div>
      <div class="service-grid">
        ${services.map(([n,t,d]) => `<article class="service-card reveal"><span>${n}</span><h3>${t}</h3><p>${d}</p><i>${icon('arrow')}</i></article>`).join('')}
      </div>
      <p class="source-note">※掲載内容は公開されている建設業者情報をもとに構成しています。建物・内容・地域により対応可否が異なるため、詳細はお問い合わせください。</p>
    </section>

    <section class="image-break reveal">
      <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=84" alt="内装工事中の職人のイメージ" />
      <div><p>SMALL OR LARGE</p><h2>小さな張り替えから、<br>空間全体の内装まで。</h2><span>掲載写真はイメージです</span></div>
    </section>

    <section class="benefits section">
      <div class="section-head reveal"><p class="section-no">03 — CONSULTATION</p><h2>こんなご相談から</h2></div>
      <div class="problem-list">
        <div class="reveal"><b>01</b><p>壁紙の汚れや剥がれをきれいにしたい</p></div>
        <div class="reveal"><b>02</b><p>部屋を分けたい、店舗の配置を変えたい</p></div>
        <div class="reveal"><b>03</b><p>床や天井の傷みが気になる</p></div>
        <div class="reveal"><b>04</b><p>音の悩みを内装から改善できるか聞きたい</p></div>
      </div>
    </section>

    <section class="flow section" id="flow">
      <div class="section-head reveal"><p class="section-no">04 — FLOW</p><h2>ご相談から施工まで</h2><p>まず状況を伺い、必要な確認をしたうえで進めます。</p></div>
      <ol>
        <li class="reveal"><span>01</span><div><h3>お問い合わせ</h3><p>電話またはフォームから、気になる場所・工事内容をお知らせください。</p></div></li>
        <li class="reveal"><span>02</span><div><h3>内容確認・現地確認</h3><p>ご希望を伺い、必要に応じて現地の状態や寸法を確認します。</p></div></li>
        <li class="reveal"><span>03</span><div><h3>工事内容のご案内</h3><p>確認した内容をもとに、工事範囲や進め方をご案内します。</p></div></li>
        <li class="reveal"><span>04</span><div><h3>施工</h3><p>日程を調整し、周囲に配慮しながら内装工事を進めます。</p></div></li>
      </ol>
    </section>

    <section class="faq section" id="faq">
      <div class="section-head reveal"><p class="section-no">05 — FAQ</p><h2>よくある質問</h2></div>
      <div class="faq-list">
        ${[
          ['小さな工事でも相談できますか？','工事の規模や内容によって対応可否が異なります。まずは場所と状態をお知らせください。'],
          ['工事内容が具体的に決まっていなくても大丈夫ですか？','はい。「壁の汚れが気になる」「部屋を仕切りたい」など、現在のお悩みからご相談ください。'],
          ['どの地域まで来てもらえますか？','八王子市を拠点としています。具体的な対応地域は、工事内容と住所を確認のうえご案内します。'],
          ['住宅以外も相談できますか？','公開情報では内装仕上工事を主な対応工事としています。店舗等についても、用途と工事内容を添えてお問い合わせください。']
        ].map(([q,a],i)=>`<details class="reveal"><summary><span>Q${String(i+1).padStart(2,'0')}</span>${q}<i></i></summary><p>${a}</p></details>`).join('')}
      </div>
    </section>

    <section class="contact section" id="contact">
      <div class="contact-copy reveal">
        <p class="section-no">06 — CONTACT</p><h2>まずは、気になる場所を<br>教えてください。</h2>
        <p>まだ具体的に決まっていなくても構いません。分かる範囲で入力してください。</p>
        <a class="phone" href="tel:${CONFIG.phone.replace(/-/g,'')}">${icon('phone')}<span><small>お電話でのご相談</small>${CONFIG.phone}</span></a>
        <p class="address">〒193-0821<br>東京都八王子市川町836</p>
      </div>
      <form class="contact-form reveal" id="inquiry-form" action="${CONFIG.formEndpoint}" method="POST" novalidate>
        <div class="field"><label for="name">お名前 <em>必須</em></label><input id="name" name="name" autocomplete="name" required placeholder="例）山田 太郎" /></div>
        <div class="two"><div class="field"><label for="tel">電話番号 <em>必須</em></label><input id="tel" name="tel" type="tel" autocomplete="tel" required placeholder="例）090-0000-0000" /></div><div class="field"><label for="email">メールアドレス <em>必須</em></label><input id="email" name="email" type="email" autocomplete="email" required placeholder="例）info@example.com" /></div></div>
        <div class="field"><label for="area">お住まいの地域</label><input id="area" name="area" autocomplete="address-level2" placeholder="例）八王子市" /></div>
        <div class="field"><label for="work">希望する工事内容 <em>必須</em></label><select id="work" name="work" required><option value="">選択してください</option>${services.map(([,t])=>`<option>${t}</option>`).join('')}<option>その他の内装工事</option><option>まだ具体的に決まっていない</option></select></div>
        <div class="field"><label for="message">お問い合わせ内容 <em>必須</em></label><textarea id="message" name="message" required rows="5" placeholder="気になる場所や状態、ご希望などをご記入ください。"></textarea></div>
        <label class="privacy"><input type="checkbox" required /><span>入力内容を問い合わせ対応のために利用することに同意します。</span></label>
        <p class="form-status" role="status" aria-live="polite"></p>
        <button class="submit" type="submit">無料で相談する ${icon('arrow')}</button>
      </form>
    </section>
  </main>

  <footer>
    <div class="footer-brand"><span>LH</span><p>有限会社<br>エルエイチコンストラクション</p></div>
    <div><p>東京都八王子市川町836</p><a href="tel:0426506260">TEL. 042-650-6260</a></div>
    <small>© LH CONSTRUCTION. ALL RIGHTS RESERVED.</small>
  </footer>

  <div class="mobile-cta"><a class="js-line" href="${CONFIG.lineUrl}">${icon('line')}LINEで相談</a><a href="#contact">${icon('mail')}お問い合わせ</a></div>
`;

const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('open', !open);
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); menu.setAttribute('aria-expanded','false'); }));

document.querySelectorAll('.js-line').forEach(link => link.addEventListener('click', (event) => {
  if (CONFIG.lineUrl === '#contact') {
    event.preventDefault(); document.querySelector('#contact').scrollIntoView({behavior:'smooth'});
    const status = document.querySelector('.form-status');
    status.textContent = 'LINE公式URLは現在準備中です。フォームまたはお電話をご利用ください。';
  }
}));

const form = document.querySelector('#inquiry-form');
form.addEventListener('submit', (event) => {
  const status = form.querySelector('.form-status');
  if (!form.checkValidity()) { event.preventDefault(); form.reportValidity(); status.textContent = '必須項目をご確認ください。'; return; }
  if (!CONFIG.formEndpoint) { event.preventDefault(); status.textContent = '送信先の設定中です。お急ぎの場合は 042-650-6260 へお電話ください。'; }
});

const observer = new IntersectionObserver(entries => entries.forEach(entry => { if(entry.isIntersecting) entry.target.classList.add('visible'); }), {threshold:.12});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

window.addEventListener('scroll', () => document.querySelector('.header').classList.toggle('scrolled', scrollY > 24), {passive:true});
