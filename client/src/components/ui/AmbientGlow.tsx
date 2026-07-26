/**
 * Slow-drifting atmospheric light behind the whole page.
 *
 * Purely decorative, so it's aria-hidden and pointer-events-none. The drift
 * keyframes live in index.css and are neutralised by the reduced-motion guard.
 */
export default function AmbientGlow() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ zIndex: 0 }}
    >
      <div
        className="absolute rounded-full"
        style={{
          width: 'min(52vw, 720px)',
          height: 'min(52vw, 720px)',
          top: '-10%',
          left: '-8%',
          background:
            'radial-gradient(circle, rgba(182, 0, 168, 0.15) 0%, transparent 68%)',
          filter: 'blur(64px)',
          animation: 'drift-a 24s ease-in-out infinite',
          willChange: 'transform',
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: 'min(46vw, 640px)',
          height: 'min(46vw, 640px)',
          top: '32%',
          right: '-10%',
          background:
            'radial-gradient(circle, rgba(118, 33, 176, 0.14) 0%, transparent 68%)',
          filter: 'blur(72px)',
          animation: 'drift-b 30s ease-in-out infinite',
          willChange: 'transform',
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: 'min(40vw, 560px)',
          height: 'min(40vw, 560px)',
          bottom: '-12%',
          left: '22%',
          background:
            'radial-gradient(circle, rgba(190, 76, 0, 0.10) 0%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'drift-a 36s ease-in-out infinite reverse',
          willChange: 'transform',
        }}
      />
    </div>
  )
}
