import { motion } from 'framer-motion';
import { GaneshaBadge } from './GaneshaBadge';
const EASE_GATE = [0.83, 0, 0.17, 1] as const;

interface GateOpeningProps {
  opened: boolean;
  onOpen: () => void;
}

export function GateOpening({ opened, onOpen }: GateOpeningProps) {

  return (
    <motion.div
      className="fixed inset-0 z-[60]"
      style={{ pointerEvents: opened ? 'none' : 'auto' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {(['left', 'right'] as const).map((side) => (
        <motion.div
          key={side}
          initial={{ x: 0 }}
          animate={{ x: opened ? (side === 'left' ? '-101%' : '101%') : 0 }}
          transition={{ duration: 1.6, ease: EASE_GATE }}
          className={`absolute top-0 h-full w-1/2 overflow-hidden bg-royal-deep ${
            side === 'left' ? 'left-0' : 'right-0'
          }`}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url(/assets/gate-panel-theme.jpg)',
              backgroundSize: '200% 100%',
              backgroundPosition: side === 'left' ? 'left center' : 'right center',
            }}
          />
          <div className="absolute inset-0 bg-royal mix-blend-color" />
          <div className="absolute inset-0 bg-royal-deep/35" />
          <div
            className={`absolute inset-y-0 w-px bg-gold/60 ${
              side === 'left' ? 'right-0' : 'left-0'
            }`}
          />
          <div className="absolute inset-4 rounded-[2rem] border border-gold/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/35" />
        </motion.div>
      ))}

      <motion.div
        animate={{ opacity: opened ? 0 : 1, scale: opened ? 1.14 : 1 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="flex flex-col items-center"
        >
          <GaneshaBadge className="size-20" />
          <p className="mt-3 font-display text-lg tracking-[0.14em] text-gold">
            ॥ Shree Ganesha Namah ॥
          </p>
        </motion.div>

        <div
          className="relative mt-7 sm:mt-9 flex h-44 w-44 items-center justify-center"
          style={{ width: '11rem', height: '11rem' }}
        >
          {/* Subtle vertical light beam and guide lines passing through center */}
          <div
            className="pointer-events-none absolute w-14 blur-sm"
            style={{
              top: '-5rem',
              bottom: '-5rem',
              background: 'linear-gradient(to right, transparent, rgba(212, 175, 110, 0.2), transparent)',
            }}
          />
          <div
            className="pointer-events-none absolute w-[46px]"
            style={{
              top: '-3.5rem',
              bottom: '-3.5rem',
              borderLeft: '1px solid rgba(212, 175, 110, 0.3)',
              borderRight: '1px solid rgba(212, 175, 110, 0.3)',
            }}
          />
          <div
            className="pointer-events-none absolute w-px"
            style={{
              top: '-2.5rem',
              bottom: '-2.5rem',
              background: 'rgba(212, 175, 110, 0.45)',
            }}
          />

          {/* Outermost hairline circle */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              inset: '-8px',
              border: '1px solid rgba(212, 175, 110, 0.22)',
            }}
          />

          {/* Rotating dashed ring */}
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 46, repeat: Infinity, ease: 'linear' }}
            className="absolute rounded-full"
            style={{
              inset: '0px',
              border: '1px dashed rgba(212, 175, 110, 0.45)',
            }}
          />

          {/* Central translucent plate with wine/parchment glass and gold rim */}
          <motion.span
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.15, ease: EASE_GATE }}
            style={{
              inset: '12px',
              background: 'radial-gradient(circle, rgba(125, 58, 80, 0.55) 0%, rgba(75, 26, 44, 0.65) 100%)',
              border: '1.2px solid rgba(212, 175, 110, 0.75)',
              boxShadow: 'inset 0 0 16px rgba(212, 175, 110, 0.22)',
              backdropFilter: 'blur(3px)',
            }}
            className="absolute rounded-full"
          />

          {/* Subtle inner concentric hairline ring */}
          <span
            className="absolute rounded-full pointer-events-none"
            style={{
              inset: '20px',
              border: '1px solid rgba(212, 175, 110, 0.35)',
            }}
          />

          {/* Gentle breathing glow ring */}
          <motion.span
            animate={{ scale: [1, 1.06, 1], opacity: [0.35, 0, 0.35] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              inset: '12px',
              border: '1px solid rgba(212, 175, 110, 0.8)',
            }}
            className="absolute rounded-full pointer-events-none"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.5 }}
            className="relative flex items-center justify-center"
          >
            <img
              src="/assets/sp-monogram.png"
              alt="Sayali & Pranav Monogram Logo"
              width="96"
              height="96"
              className="h-24 w-24 object-contain drop-shadow-[0_2px_12px_rgba(203,168,124,0.45)]"
            />
          </motion.div>
        </div>

        <motion.button
          type="button"
          onClick={onOpen}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          whileTap={{ scale: 0.96 }}
          className="group relative mt-12 sm:mt-14 cursor-pointer overflow-hidden rounded-full border border-gold/70 px-9 py-3.5 text-[0.62rem] tracking-[0.35em] text-parchment uppercase transition-colors hover:bg-gold/15"
        >
          <motion.span
            animate={{ x: ['-120%', '120%'] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1 }}
            className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-parchment/25 to-transparent"
          />
          <span className="relative">Open the invitation</span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
