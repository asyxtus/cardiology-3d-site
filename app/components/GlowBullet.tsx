// app/components/GlowBullet.tsx

export default function GlowBullet() {
  return (
    <div className="relative mt-1 flex h-3 w-3 items-center justify-center">
      {/* Soft pulsing glow */}
      <div className="absolute h-3 w-3 rounded-full bg-teal-400/40 blur-md animate-ping" />

      {/* Solid core */}
      <div className="relative h-3 w-3 rounded-full bg-gradient-to-br from-teal-400 via-cyan-400 to-sky-500 shadow-sm shadow-teal-500/50" />
    </div>
  );
}