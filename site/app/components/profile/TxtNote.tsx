// A little "window" note, e.g. currently.txt
export function TxtNote({ file, children }: { file: string; children: React.ReactNode }) {
  return (
    <div className="rounded-[14px] border-[1.5px] border-ink/15 bg-white px-4 pt-2.5 pb-3 shadow-[0_6px_16px_rgba(74,59,63,0.08)]">
      <div className="flex items-center gap-1.5" aria-hidden="true">
        <span className="size-[9px] rounded-full bg-pink" />
        <span className="size-[9px] rounded-full bg-yellow" />
        <span className="size-[9px] rounded-full bg-mint" />
        <span className="ml-2 font-mono text-[11px] text-ink-soft">{file}.txt</span>
      </div>
      <p className="mt-1 text-[15px] leading-[1.55] text-ink">{children}</p>
    </div>
  )
}
