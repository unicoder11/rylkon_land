/**
 * Clean black → paper handoff.
 * Black fades out over paper (not mixed into gray midtones).
 */
export function HeroBridge() {
  return (
    <div aria-hidden="true" className="relative bg-paper">
      <div
        className="h-16 sm:h-20"
        style={{
          background:
            "linear-gradient(to bottom, #000 0%, rgba(0,0,0,0.55) 42%, rgba(0,0,0,0.18) 72%, transparent 100%)",
        }}
      />
    </div>
  );
}
