import { useState } from 'react';
import { SPINE_ZONES } from '../../data/chiropracticData';
import type { SpineZone } from '../../types/wellness';

export function SpinalHarmonyTracker() {
  const [selectedKey, setSelectedKey] = useState<SpineZone['key']>('cervical');
  const [fading, setFading] = useState(false);

  const activeZone = SPINE_ZONES.find((z) => z.key === selectedKey) ?? SPINE_ZONES[0];

  const handleSelect = (key: SpineZone['key']) => {
    if (key === selectedKey) return;
    setFading(true);
    window.setTimeout(() => {
      setSelectedKey(key);
      setFading(false);
    }, 150);
  };

  return (
    <section className="px-margin md:px-margin-tablet lg:px-margin-desktop mb-space-xl max-w-6xl w-full mx-auto">
      <div className="bg-gradient-to-br from-surface-container-low via-surface-container to-surface-container-high rounded-xl p-space-md md:p-space-lg shadow-sm">
        <div className="flex items-center justify-between mb-space-sm">
          <div>
            <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-widest">
              Spinal Harmony Tracker
            </span>
            <h4 className="font-title-md text-title-md text-on-surface">Three Structural Zones</h4>
          </div>
          <span className="material-symbols-outlined text-primary text-[24px]">balance</span>
        </div>

        <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
          Tap a spinal quadrant to see corresponding neuromuscular pathway restoration.
        </p>

        <div className="grid grid-cols-3 gap-space-xs mb-space-sm">
          {SPINE_ZONES.map((zone) => {
            const isActive = zone.key === selectedKey;
            return (
              <button
                key={zone.key}
                className={`py-2.5 px-2 rounded-lg font-label-md text-label-md text-center shadow-sm transition-all focus:outline-none active:scale-95 cursor-pointer ${
                  isActive
                    ? 'bg-primary-fixed text-on-primary-fixed font-bold'
                    : 'bg-surface-container-lowest text-on-surface hover:bg-surface-container-low'
                }`}
                onClick={() => handleSelect(zone.key)}
                type="button"
              >
                {zone.buttonLabel}
              </button>
            );
          })}
        </div>

        <div
          className={`bg-surface-container-lowest rounded-lg p-space-sm md:p-space-md transition-opacity duration-150 shadow-inner ${
            fading ? 'opacity-30' : 'opacity-100'
          }`}
        >
          <div className="flex items-start gap-2.5">
            <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">
              {activeZone.icon}
            </span>
            <div>
              <h5 className="font-title-md text-title-md text-on-surface font-semibold">
                {activeZone.title}
              </h5>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                {activeZone.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
