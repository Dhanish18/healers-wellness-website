import { useEffect, useRef, useState } from 'react';

type BreathPhase = 'idle' | 'inhale' | 'hold' | 'exhale' | 'complete';

export function BreathGuideCard() {
  const [phase, setPhase] = useState<BreathPhase>('idle');
  const [progressWidth, setProgressWidth] = useState<string>('0%');
  const timersRef = useRef<number[]>([]);

  const clearTimers = () => {
    timersRef.current.forEach((id) => window.clearTimeout(id));
    timersRef.current = [];
  };

  useEffect(() => {
    return () => clearTimers();
  }, []);

  const startBreathGuide = () => {
    clearTimers();
    setPhase('inhale');
    setProgressWidth('0%');

    const t0 = window.setTimeout(() => {
      setProgressWidth('100%');
    }, 50);

    const t1 = window.setTimeout(() => {
      setPhase('hold');
    }, 4000);

    const t2 = window.setTimeout(() => {
      setPhase('exhale');
      setProgressWidth('0%');
    }, 7000);

    const t3 = window.setTimeout(() => {
      setPhase('complete');
    }, 11000);

    timersRef.current = [t0, t1, t2, t3];
  };

  const isRunning = phase === 'inhale' || phase === 'hold' || phase === 'exhale';

  const promptText = {
    idle: '“Notice the rhythm of your resting breath; harmony begins where strain concludes.”',
    inhale: 'Inhale slowly... welcoming fresh pranic oxygen.',
    hold: 'Hold gently... letting stillness saturate your cells.',
    exhale: 'Exhale deeply... releasing all systemic tension.',
    complete: 'Your natural balance is restored. Have a peaceful day.',
  }[phase];

  const buttonLabel = isRunning
    ? 'Centering...'
    : phase === 'complete'
      ? 'Repeat Breath'
      : 'Breathe With Us';

  return (
    <section className="px-margin md:px-margin-tablet lg:px-margin-desktop mb-space-lg max-w-5xl w-full mx-auto">
      <div className="bg-surface-container-low rounded-xl p-space-md shadow-sm relative overflow-hidden">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined material-symbols-filled text-primary text-[20px]">
              light_mode
            </span>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-semibold">
              Morning Centering Pulse
            </span>
          </div>
          <button
            className="px-2.5 py-1 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-[10px] uppercase font-bold tracking-wider hover:bg-secondary-fixed-dim transition-all disabled:opacity-70 cursor-pointer"
            disabled={isRunning}
            onClick={startBreathGuide}
            type="button"
          >
            {buttonLabel}
          </button>
        </div>

        <div className="mt-2 text-left transition-all duration-500">
          <p className="font-body-sm text-body-sm text-on-surface italic">{promptText}</p>
        </div>

        {phase !== 'idle' && (
          <div className="w-full bg-surface-container h-1 rounded-full mt-2 overflow-hidden">
            <div
              className="bg-primary h-full"
              style={{
                width: progressWidth,
                transition: 'width 4s ease-in-out',
              }}
            />
          </div>
        )}
      </div>
    </section>
  );
}
