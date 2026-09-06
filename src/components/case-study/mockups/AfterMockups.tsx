// "After" states for Myra, useAR, and ARestro, built at the same scale as
// their "before" counterparts for a fair side-by-side in the compare slider.
// Colors sampled from each project's real brand assets.

export function MyraAfterMockup() {
  return (
    <div className="flex h-full w-full flex-col bg-[#FBEDE8] p-5" style={{ fontFamily: "Inter, sans-serif" }}>
      <span className="text-xs font-semibold" style={{ color: "#9C3A3E" }}>Myra</span>
      <div className="mt-6 flex flex-1 flex-col items-center justify-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-full border-4" style={{ borderColor: "#9C3A3E" }}>
          <span className="text-lg font-bold" style={{ color: "#9C3A3E" }}>Day 22</span>
        </div>
        <p className="mt-4 text-xs" style={{ color: "#2A2321" }}>{"\u0932\u0941\u091f\u093f\u092f\u0932 \u091a\u0930\u0923"} &middot; Luteal phase</p>
      </div>
      <p className="text-[10px] italic" style={{ color: "#8B6F6A" }}>Nepali-first. Reshapes for pregnancy, loss, and postpartum too.</p>
    </div>
  );
}

export function ARCameraMockup() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-end bg-[#1a1410] p-5" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="absolute left-4 top-4 flex items-center gap-1 rounded bg-black/50 px-2 py-1">
        <span className="h-1.5 w-1.5 rounded-full bg-[#E8543D]" />
        <span className="text-[9px] text-white">LIVE</span>
      </div>
      <div className="mb-4 w-full max-w-[220px] border border-white/20 bg-black/60 p-3 backdrop-blur-sm">
        <p className="text-xs font-bold text-white">Copper Mahadev Head</p>
        <p className="mt-1 text-[9px] leading-relaxed text-white/70">
          Indreshwor Mahadev Temple complex, Panauti. Newari pagoda-style craftsmanship.
        </p>
        <div className="mt-2 flex gap-1">
          <span className="rounded bg-white/10 px-1.5 py-0.5 text-[8px] text-white">Read more</span>
          <span className="rounded bg-white/10 px-1.5 py-0.5 text-[8px] text-white">{"EN / \u0928\u0947 / \u65e5"}</span>
        </div>
      </div>
    </div>
  );
}

export function ARestroAfterMockup() {
  const items = ["Restaurant Name", "Order Details", "Table Reserved"];
  return (
    <div className="flex h-full w-full flex-col gap-2 bg-[#F4F4F4] p-4" style={{ fontFamily: "Inter, sans-serif" }}>
      {items.map((label) => (
        <div key={label} className="border border-[#1E9E52] bg-white p-3">
          <p className="text-xs font-bold text-[#1E9E52]">{label}</p>
          <p className="text-[9px] text-[#888]">Same card, same green, same corners</p>
        </div>
      ))}
      <p className="mt-1 text-center text-[9px] italic text-[#888]">One visual system, everywhere</p>
    </div>
  );
}
