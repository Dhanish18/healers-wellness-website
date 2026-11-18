import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
export function Breadcrumbs({ currentPage, separatorType = 'slash' }) {
    const navigate = useNavigate();
    const goToTreatments = () => {
        navigate('/', { state: { scrollTo: 'treatment-modalities' } });
    };
    return (_jsxs("nav", { "aria-label": "Breadcrumb", className: "flex items-center gap-1.5 text-on-surface-variant font-label-md text-label-md uppercase tracking-wider", children: [_jsx("button", { className: "hover:text-primary transition-colors cursor-pointer uppercase", onClick: () => navigate('/'), type: "button", children: "Home" }), separatorType === 'slash' ? (_jsx("span", { className: "text-primary/40", children: "/" })) : (_jsx("span", { className: "material-symbols-outlined text-[14px] text-tertiary-fixed-dim", children: "chevron_right" })), _jsx("button", { className: "hover:text-primary transition-colors cursor-pointer uppercase", onClick: goToTreatments, type: "button", children: "Treatments" }), separatorType === 'slash' ? (_jsx("span", { className: "text-primary/40", children: "/" })) : (_jsx("span", { className: "material-symbols-outlined text-[14px] text-tertiary-fixed-dim", children: "chevron_right" })), _jsx("span", { className: "text-primary font-semibold", children: currentPage })] }));
}
