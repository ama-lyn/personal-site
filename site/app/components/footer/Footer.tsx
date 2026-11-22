export function Footer() {
  return (
    <footer className="mt-section-sm w-full md:mt-section">
      <div className="mx-auto flex max-w-reading flex-col items-center gap-2 border-t border-dashed border-border-soft pt-8 text-center">
        <p className="text-base font-semibold text-ink">
          made with <span aria-hidden="true" className="text-accent">♡</span>
          <span className="sr-only">love</span> by Gwen
        </p>
        <p className="text-sm text-ink-soft">© 2026 Gwen. All rights reserved.</p>
        <a
          href="#"
          className="mt-2 rounded-full border-[1.5px] border-ink/30 px-4 py-1.5 font-mono text-xs tracking-[0.12em] text-ink uppercase transition-colors hover:border-ink hover:bg-ink hover:text-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dashed focus-visible:outline-accent"
        >
          back to top ↑
        </a>
      </div>
    </footer>
  );
}
