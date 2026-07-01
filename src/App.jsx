const slides = Array.from({ length: 11 }, (_, index) => ({
  number: String(index + 1).padStart(2, '0'),
  src: `/slides/slide-${String(index + 1).padStart(2, '0')}.png`,
}))

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-[#222222]">
      {/* 고정 내비게이션 */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-20 sm:px-8">
          <a href="#brand" className="text-sm font-semibold tracking-[0.06em] sm:text-base">
            POPOWEATHER
          </a>
          <nav aria-label="주요 메뉴" className="flex items-center gap-2 text-[10px] font-medium text-black/60 min-[430px]:gap-3 min-[430px]:text-[11px] sm:gap-7 sm:text-sm">
            <a className="nav-link" href="#deck">Deck</a>
            <a className="nav-link" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section id="brand" className="relative flex min-h-[92svh] scroll-mt-20 items-center pt-20">
          <div className="pointer-events-none absolute -right-24 top-24 size-64 rounded-full bg-[#EAF8FF]/55 blur-3xl sm:size-96" />
          <div className="relative mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 lg:py-32">
            <p className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-black/45">
              <span className="h-px w-8 bg-black/25" /> POPOWEATHER Brand Book
            </p>
            <h1 className="max-w-5xl text-[clamp(3.2rem,9vw,7.8rem)] font-semibold leading-[0.98] tracking-[-0.01em]">
              How’s Your<br />
              <span>Weather</span> Today?
            </h1>
            <div className="mt-10 flex max-w-5xl flex-col gap-10">
              <p className="text-base leading-8 text-black/60 sm:text-lg lg:whitespace-nowrap">
                포포웨더는 감정을 날씨에 비유해 표현하는 캐릭터 기반 라이프스타일 브랜드입니다.
              </p>
            </div>
          </div>
        </section>

        {/* 브랜드 덱: public/slides의 이미지를 순서대로 표시합니다. */}
        <section id="deck" className="section-shell scroll-mt-16">
          <div className="section-inner max-w-5xl">
            <div className="section-heading">
              <p className="eyebrow">Brand Story</p>
              <h2 style={{ letterSpacing: '-0.01em' }}>Brand Deck</h2>
              <p>포포웨더의 세계관, 캐릭터, 콘텐츠 방향을 소개합니다.</p>
            </div>
            <div className="mt-14 space-y-7 sm:mt-20 sm:space-y-12">
              {slides.map((slide) => (
                <figure key={slide.number}>
                  <figcaption className="mb-3 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-black/40 sm:mb-4 sm:text-xs">
                    Page {slide.number} / 11 <span className="h-px flex-1 bg-black/10" />
                  </figcaption>
                  <div className="slide-card">
                    <img
                      src={slide.src}
                      alt={`POPOWEATHER 브랜드 덱 ${Number(slide.number)}페이지`}
                      loading="lazy"
                    />
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* 브랜드 덱의 마지막 장면을 이어주는 짧은 마무리입니다. */}
        <section className="closing-section px-5 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-6xl">
            <p className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.01em] sm:text-7xl lg:text-8xl">
              Listen to your weather within.
            </p>
            <p className="mt-7 text-base leading-8 text-black/50 sm:text-lg">
              오늘의 마음날씨에 조용히 귀 기울여 보세요.
            </p>
          </div>
        </section>

        {/* 연락처 */}
        <section id="contact" className="section-shell scroll-mt-16">
          <div className="section-inner">
            <div className="rounded-[2rem] bg-[#222222] px-6 py-12 text-white sm:rounded-[3rem] sm:px-12 sm:py-16 lg:px-16">
              <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-end">
                <div>
                  <p className="eyebrow !text-white/45">Say Hello</p>
                  <h2 className="mt-4 text-5xl font-semibold sm:text-7xl" style={{ letterSpacing: '-0.01em' }}>Contact</h2>
                  <dl className="mt-10 grid max-w-lg grid-cols-[5rem_1fr] gap-y-3 text-sm sm:grid-cols-[6rem_1fr] sm:text-base">
                    <dt className="text-white/40">Brand</dt><dd>POPOWEATHER</dd>
                    <dt className="text-white/40">Creator</dt><dd>윤예진</dd>
                    <dt className="text-white/40">Email</dt><dd>popoweather@naver.com</dd>
                    <dt className="text-white/40">Instagram</dt><dd>@popoweather</dd>
                  </dl>
                </div>
                <div className="flex flex-col gap-3">
                  <a className="contact-button" href="mailto:popoweather@naver.com">이메일 보내기 <span>↗</span></a>
                  <a className="contact-button" href="https://instagram.com/popoweather" target="_blank" rel="noreferrer">인스타그램 보기 <span>↗</span></a>
                  <a className="contact-button" href="/popoweather-brand-deck.pdf" download>PDF 다운로드 <span>↓</span></a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 px-5 py-7 text-center text-xs text-black/35">
        © {new Date().getFullYear()} POPOWEATHER. How’s Your Weather Today?
      </footer>
    </div>
  )
}

export default App
