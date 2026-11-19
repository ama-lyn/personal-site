const GREETING = 'Hi,' 
const HEADLINE_LEAD = 'I build for'
const HEADLINE_WORD = 'people.' 
const WELCOME = 'welcome to my little corner of the internet. take a look around.'
const STATUS = ['currently: building a chrome extension', 'open to fellowships'] 

function postmarkDate() {
  const now = new Date()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  return `${month}·${String(now.getFullYear()).slice(2)}`
}

function Flower({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <g className="fill-white stroke-pink-deep" strokeWidth="2">
        <circle cx="24" cy="11" r="8" />
        <circle cx="37" cy="21" r="8" />
        <circle cx="32" cy="37" r="8" />
        <circle cx="16" cy="37" r="8" />
        <circle cx="11" cy="21" r="8" />
      </g>
      <circle cx="24" cy="25" r="6" className="fill-[#F5B94B]" />
    </svg>
  )
}

function Stamp({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`flex h-[100px] w-[84px] items-center justify-center border-[6px] border-double border-white bg-mint outline-2 outline-offset-0 outline-dashed outline-[#cfc6bd] ${className}`}
    >
      <Flower size={44} />
    </div>
  )
}

function Postmark({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`flex h-[78px] w-[78px] -rotate-12 flex-col items-center justify-center rounded-full border-2 border-ink/45 font-mono text-[11px] uppercase leading-[1.4] tracking-[0.06em] text-ink-soft ${className}`}
    >
      <span>posted</span>
      <span>{postmarkDate()}</span>
    </div>
  )
}

export function HomeLetter() {
  return (
    <section
      aria-labelledby="home-title"
      className="mx-auto flex min-h-[calc(100svh-18rem)] w-full max-w-[890px] items-center"
    >
      <div className="relative w-full lg:h-[486px]">
        {/* Envelope (large screens only, purely decorative) */}
        <div
          aria-hidden="true"
          className="airmail-border absolute top-0 left-[130px] hidden h-[480px] w-[760px] -rotate-3 rounded-lg p-2.5 shadow-[0_14px_34px_rgba(74,59,63,0.2)] lg:block"
        >
          <div className="relative h-full w-full rounded-[3px] bg-paper">
            <Stamp className="absolute top-[30px] right-[34px]" />
            <Postmark className="absolute top-[48px] right-[130px]" />
            <p className="absolute right-[50px] bottom-12 font-caveat text-[30px] leading-[1.1] text-ink">
              to: a new friend
              <br />
              from: gwen
            </p>
          </div>
        </div>

        {/* Letter */}
        <article className="ruled-paper relative mx-auto w-full max-w-[560px] rotate-1 rounded-[3px] px-7 py-10 shadow-[0_18px_40px_rgba(74,59,63,0.24)] sm:px-[52px] sm:py-[42px] lg:absolute lg:top-[42px] lg:left-0 lg:mx-0 lg:min-h-[440px] lg:rotate-2">
          {/* On small screens the stamp sits on the letter itself */}
          <div className="absolute -top-3 -right-2 rotate-6 scale-75 lg:hidden" aria-hidden="true">
            <Stamp />
          </div>

          <p className="font-display text-[32px] leading-none text-ink italic">{GREETING}</p>
          <h1
            id="home-title"
            className="mt-3.5 text-[44px] leading-[1.05] font-extrabold tracking-[-0.02em] text-ink sm:text-[54px]"
          >
            {HEADLINE_LEAD}
            <br />
            <em className="font-display font-medium text-accent">{HEADLINE_WORD}</em>
          </h1>
          <p className="mt-4 text-[17px] leading-normal text-ink-soft">{WELCOME}</p>
          <p className="mt-3.5 font-mono text-[11px] leading-relaxed tracking-[0.12em] text-ink-soft uppercase">
            {STATUS[0]}
            <br />
            {STATUS[1]}
          </p>
          <p className="mt-3 font-caveat text-4xl leading-none text-accent">&mdash; gwen</p>
        </article>
      </div>
    </section>
  )
}
