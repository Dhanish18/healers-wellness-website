import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useLocation, useNavigate } from 'react-router-dom';
export function BottomNav() {
    const navigate = useNavigate();
    const location = useLocation();
    const scrollOrNavigate = (targetId) => {
        if (location.pathname === '/') {
            document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
        }
        else {
            navigate('/', { state: { scrollTo: targetId } });
        }
    };
    return (_jsx("nav", { className: "fixed bottom-0 inset-x-0 z-50 pb-safe bg-surface/85 backdrop-blur-xl shadow-[0_-1px_0_0_rgba(229,192,98,0.2)] md:hidden", children: _jsxs("div", { className: "flex justify-around items-center h-20 px-2", children: [_jsxs("button", { "aria-current": location.pathname === '/' ? 'page' : undefined, className: `flex flex-col items-center justify-center gap-1 w-16 h-14 transition-all cursor-pointer ${location.pathname === '/'
                        ? 'text-primary font-semibold'
                        : 'text-on-surface-variant hover:text-primary'}`, onClick: () => navigate('/'), type: "button", children: [_jsx("span", { className: "material-symbols-outlined text-[22px]", children: "spa" }), _jsx("span", { className: "font-label-sm text-[10px]", children: "Sanctuary" })] }), _jsxs("button", { className: "flex flex-col items-center justify-center gap-1 w-16 h-14 text-on-surface-variant hover:text-primary transition-all cursor-pointer", onClick: () => scrollOrNavigate('treatment-modalities'), type: "button", children: [_jsx("span", { className: "material-symbols-outlined text-[22px]", children: "local_florist" }), _jsx("span", { className: "font-label-sm text-[10px]", children: "Therapies" })] }), _jsxs("button", { className: "flex flex-col items-center justify-center gap-1 w-16 h-14 text-on-surface-variant hover:text-primary transition-all cursor-pointer", onClick: () => scrollOrNavigate('care-pillars'), type: "button", children: [_jsx("span", { className: "material-symbols-outlined text-[22px]", children: "medical_services" }), _jsx("span", { className: "font-label-sm text-[10px]", children: "Healers" })] }), _jsxs("button", { className: "flex flex-col items-center justify-center gap-1 w-16 h-14 text-on-surface-variant hover:text-primary transition-all cursor-pointer", onClick: () => navigate('/contact'), type: "button", children: [_jsx("span", { className: "material-symbols-outlined text-[22px]", children: "contact_support" }), _jsx("span", { className: "font-label-sm text-[10px]", children: "Contact" })] })] }) }));
}
