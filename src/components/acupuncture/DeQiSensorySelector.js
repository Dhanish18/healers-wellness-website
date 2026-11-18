import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { DEQI_STAGES } from '../../data/acupunctureData';
export function DeQiSensorySelector() {
    const [activeKey, setActiveKey] = useState('insertion');
    const activeStage = DEQI_STAGES.find((s) => s.key === activeKey) ?? DEQI_STAGES[0];
    return (_jsx("section", { className: "px-margin md:px-margin-tablet lg:px-margin-desktop mb-space-xl max-w-6xl w-full mx-auto", children: _jsxs("div", { className: "bg-gradient-to-br from-surface-container-high to-surface-container rounded-xl p-space-md md:p-space-lg shadow-sm", children: [_jsxs("div", { className: "flex items-center justify-between mb-3", children: [_jsx("span", { className: "font-label-sm text-label-sm uppercase tracking-wider text-primary", children: "Micro-Sensory Touch" }), _jsx("span", { className: "font-label-sm text-label-sm bg-surface-bright px-2 py-0.5 rounded text-on-surface-variant font-medium", children: "De-Qi Phenomenon" })] }), _jsxs("p", { className: "font-body-sm text-body-sm text-on-surface mb-3", children: ["Experience the distinct warm, dull sensation known as", ' ', _jsx("span", { className: "italic text-primary font-medium", children: "De-Qi" }), "\u2014the physical confirmation of neurological meridian engagement."] }), _jsx("div", { className: "grid grid-cols-3 gap-1.5 p-1 bg-surface-container-highest/60 rounded-lg text-center", children: DEQI_STAGES.map((stage) => {
                        const isSelected = stage.key === activeKey;
                        return (_jsx("button", { className: `py-1.5 px-2 rounded font-label-sm text-label-sm transition-all cursor-pointer ${isSelected
                                ? 'bg-surface-bright text-primary shadow-sm'
                                : 'text-on-surface-variant hover:text-on-surface'}`, onClick: () => setActiveKey(stage.key), type: "button", children: stage.tabLabel }, stage.key));
                    }) }), _jsx("div", { className: "mt-3 p-3 bg-surface-container-lowest/80 rounded-lg font-body-sm text-body-sm text-on-surface-variant transition-opacity duration-300", children: activeStage.description })] }) }));
}
