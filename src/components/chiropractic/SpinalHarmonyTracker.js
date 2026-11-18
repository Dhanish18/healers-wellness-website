import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { SPINE_ZONES } from '../../data/chiropracticData';
export function SpinalHarmonyTracker() {
    const [selectedKey, setSelectedKey] = useState('cervical');
    const [fading, setFading] = useState(false);
    const activeZone = SPINE_ZONES.find((z) => z.key === selectedKey) ?? SPINE_ZONES[0];
    const handleSelect = (key) => {
        if (key === selectedKey)
            return;
        setFading(true);
        window.setTimeout(() => {
            setSelectedKey(key);
            setFading(false);
        }, 150);
    };
    return (_jsx("section", { className: "px-margin md:px-margin-tablet lg:px-margin-desktop mb-space-xl max-w-6xl w-full mx-auto", children: _jsxs("div", { className: "bg-gradient-to-br from-surface-container-low via-surface-container to-surface-container-high rounded-xl p-space-md md:p-space-lg shadow-sm", children: [_jsxs("div", { className: "flex items-center justify-between mb-space-sm", children: [_jsxs("div", { children: [_jsx("span", { className: "font-label-sm text-label-sm text-primary uppercase font-bold tracking-widest", children: "Spinal Harmony Tracker" }), _jsx("h4", { className: "font-title-md text-title-md text-on-surface", children: "Three Structural Zones" })] }), _jsx("span", { className: "material-symbols-outlined text-primary text-[24px]", children: "balance" })] }), _jsx("p", { className: "font-body-sm text-body-sm text-on-surface-variant mb-space-md", children: "Tap a spinal quadrant to see corresponding neuromuscular pathway restoration." }), _jsx("div", { className: "grid grid-cols-3 gap-space-xs mb-space-sm", children: SPINE_ZONES.map((zone) => {
                        const isActive = zone.key === selectedKey;
                        return (_jsx("button", { className: `py-2.5 px-2 rounded-lg font-label-md text-label-md text-center shadow-sm transition-all focus:outline-none active:scale-95 cursor-pointer ${isActive
                                ? 'bg-primary-fixed text-on-primary-fixed font-bold'
                                : 'bg-surface-container-lowest text-on-surface hover:bg-surface-container-low'}`, onClick: () => handleSelect(zone.key), type: "button", children: zone.buttonLabel }, zone.key));
                    }) }), _jsx("div", { className: `bg-surface-container-lowest rounded-lg p-space-sm md:p-space-md transition-opacity duration-150 shadow-inner ${fading ? 'opacity-30' : 'opacity-100'}`, children: _jsxs("div", { className: "flex items-start gap-2.5", children: [_jsx("span", { className: "material-symbols-outlined text-primary text-[20px] mt-0.5", children: activeZone.icon }), _jsxs("div", { children: [_jsx("h5", { className: "font-title-md text-title-md text-on-surface font-semibold", children: activeZone.title }), _jsx("p", { className: "font-body-sm text-body-sm text-on-surface-variant mt-0.5", children: activeZone.description })] })] }) })] }) }));
}
