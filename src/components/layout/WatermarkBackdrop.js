import { jsx as _jsx } from "react/jsx-runtime";
export function WatermarkBackdrop({ src }) {
    return (_jsx("div", { className: "fixed inset-0 pointer-events-none flex items-center justify-center z-0 overflow-hidden", children: _jsx("img", { alt: "", "aria-hidden": "true", className: "pointer-events-none select-none", src: src, style: {
                width: '320px',
                maxWidth: '80vw',
                height: 'auto',
                opacity: 0.16,
                mixBlendMode: 'multiply',
                filter: 'contrast(1.15)',
                pointerEvents: 'none',
            } }) }));
}
