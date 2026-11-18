import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
export function BookingModal({ isOpen, onClose, title, subtitle, icon, nameLabel, namePlaceholder, focusLabel, focusOptions, dateLabel, submitLabel, confirmationTitle = 'Evaluation Scheduled', confirmationMessage = 'Your consultation inquiry has been relayed to our care team. A clinical coordinator will contact you shortly.', mode, onSubmitToast, }) {
    const [submitted, setSubmitted] = useState(false);
    const [name, setName] = useState('');
    const [focus, setFocus] = useState(focusOptions[0] ?? '');
    const [date, setDate] = useState('');
    if (!isOpen)
        return null;
    const resetAndClose = () => {
        setSubmitted(false);
        setName('');
        setDate('');
        onClose();
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (mode === 'inline-confirm') {
            setSubmitted(true);
            setTimeout(() => {
                resetAndClose();
            }, 3200);
        }
        else {
            resetAndClose();
            onSubmitToast?.();
        }
    };
    return (_jsx("div", { className: "fixed inset-0 z-50 bg-inverse-surface/60 backdrop-blur-sm flex items-end md:items-center justify-center p-0 md:p-4 transition-opacity", onClick: resetAndClose, children: _jsx("div", { className: "bg-surface-container-lowest w-full max-w-lg rounded-t-2xl md:rounded-2xl p-space-lg shadow-2xl flex flex-col gap-space-md", onClick: (e) => e.stopPropagation(), children: submitted ? (_jsxs("div", { className: "py-space-md flex flex-col items-center text-center gap-space-sm", children: [_jsx("div", { className: "w-14 h-14 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed mb-1 shadow-sm", children: _jsx("span", { className: "material-symbols-outlined text-[32px]", children: "check_circle" }) }), _jsx("h4", { className: "font-headline-sm text-headline-sm text-on-surface", children: confirmationTitle }), _jsx("p", { className: "font-body-md text-body-md text-on-surface-variant font-light", children: confirmationMessage }), _jsx("button", { className: "mt-4 px-6 py-2.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider cursor-pointer", onClick: resetAndClose, type: "button", children: "Dismiss" })] })) : (_jsxs(_Fragment, { children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { className: "material-symbols-outlined text-primary text-[24px]", children: icon }), _jsx("h4", { className: "font-headline-sm text-headline-sm text-on-surface", children: title })] }), _jsx("button", { "aria-label": "Close modal", className: "w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:text-primary cursor-pointer", onClick: resetAndClose, type: "button", children: _jsx("span", { className: "material-symbols-outlined text-[20px]", children: "close" }) })] }), _jsx("p", { className: "font-body-sm text-body-sm text-on-surface-variant font-light", children: subtitle }), _jsxs("form", { className: "flex flex-col gap-3", onSubmit: handleSubmit, children: [_jsxs("div", { className: "flex flex-col gap-space-xs", children: [_jsx("label", { className: "font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant", children: nameLabel }), _jsx("input", { className: "w-full bg-surface px-3 py-2.5 rounded-lg text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-xs", onChange: (e) => setName(e.target.value), placeholder: namePlaceholder, required: true, type: "text", value: name })] }), _jsxs("div", { className: "flex flex-col gap-space-xs", children: [_jsx("label", { className: "font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant", children: focusLabel }), _jsx("select", { className: "w-full bg-surface px-3 py-2.5 rounded-lg text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-xs", onChange: (e) => setFocus(e.target.value), value: focus, children: focusOptions.map((opt) => (_jsx("option", { value: opt, children: opt }, opt))) })] }), _jsxs("div", { className: "flex flex-col gap-space-xs", children: [_jsx("label", { className: "font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant", children: dateLabel }), _jsx("input", { className: "w-full bg-surface px-3 py-2.5 rounded-lg text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-xs", onChange: (e) => setDate(e.target.value), required: true, type: "date", value: date })] }), _jsx("button", { className: "w-full py-3.5 mt-2 rounded-lg bg-gradient-to-r from-[#F3DC96] via-[#E5C062] to-[#B8963E] text-on-secondary-fixed font-title-md text-title-md font-semibold tracking-wide shadow-md hover:brightness-105 active:scale-95 transition-all text-center cursor-pointer", type: "submit", children: submitLabel })] })] })) }) }));
}
