import { useState } from 'react';
import { DEQI_STAGES } from '../../data/acupunctureData';
import type { DeQiStage } from '../../types/wellness';

export function DeQiSensorySelector() {
  const [activeKey, setActiveKey] = useState<DeQiStage['key']>('insertion');
  const activeStage = DEQI_STAGES.find((s) => s.key === activeKey) ?? DEQI_STAGES[0];

  return (
    <section className="px-margin md:px-margin-tablet lg:px-margin-desktop mb-space-xl max-w-6xl w-full mx-auto">
      <div className="bg-gradient-to-br from-surface-container-high to-surface-container rounded-xl p-space-md md:p-space-lg shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary">
            Micro-Sensory Touch
          </span>
          <span className="font-label-sm text-label-sm bg-surface-bright px-2 py-0.5 rounded text-on-surface-variant font-medium">
            De-Qi Phenomenon
          </span>
        </div>

        <p className="font-body-sm text-body-sm text-on-surface mb-3">
          Experience the distinct warm, dull sensation known as{' '}
          <span className="italic text-primary font-medium">De-Qi</span>—the physical confirmation
          of neurological meridian engagement.
        </p>

        <div className="grid grid-cols-3 gap-1.5 p-1 bg-surface-container-highest/60 rounded-lg text-center">
          {DEQI_STAGES.map((stage) => {
            const isSelected = stage.key === activeKey;
            return (
              <button
                key={stage.key}
                className={`py-1.5 px-2 rounded font-label-sm text-label-sm transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-surface-bright text-primary shadow-sm'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
                onClick={() => setActiveKey(stage.key)}
                type="button"
              >
                {stage.tabLabel}
              </button>
            );
          })}
        </div>

        <div className="mt-3 p-3 bg-surface-container-lowest/80 rounded-lg font-body-sm text-body-sm text-on-surface-variant transition-opacity duration-300">
          {activeStage.description}
        </div>
      </div>
    </section>
  );
}
