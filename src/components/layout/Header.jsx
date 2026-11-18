import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { PRIMARY_NAV_ITEMS, SERVICE_NAV_ITEMS } from '../../data/navigation';

export function Header({ variant, title, logoSrc, onOpenDrawer, onBookClick }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [servicesOpen, setServicesOpen] = useState(false);

  const handleBack = () => {
    if (window.history.length > 1) navigate(-1);
    else navigate('/');
  };

  const handleNavClick = (route) => {
    if (route.startsWith('/#')) {
      const targetId = route.slice(2);
      if (location.pathname === '/') {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
        return;
      }
      navigate('/', { state: { scrollTo: targetId } });
      return;
    }
    navigate(route);
  };

  return (
    <header className={`fixed top-0 inset-x-0 z-50 ${variant === 'home' ? 'bg-surface/80' : 'bg-surface/85'} backdrop-blur-xl pt-safe shadow-[0_1px_0_0_rgba(229,192,98,0.25)]`}>
      <div className="h-16 px-margin md:px-margin-tablet lg:px-margin-desktop max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-space-sm">
          {variant === 'home' ? (
            <button aria-label="Open Menu" className="w-11 h-11 flex md:hidden items-center justify-center text-on-surface hover:text-primary transition-colors focus:outline-none cursor-pointer" onClick={onOpenDrawer} type="button">
              <span className="material-symbols-outlined text-[24px]">menu</span>
            </button>
          ) : (
            <button aria-label="Go Back" className="w-11 h-11 flex items-center justify-center text-on-surface hover:text-primary transition-colors focus:outline-none cursor-pointer" onClick={handleBack} type="button">
              <span className="material-symbols-outlined text-[24px]">arrow_back_ios_new</span>
            </button>
          )}
          {variant === 'home' ? (
            <Link className="flex items-center gap-space-xs" to="/">
              <img alt="Healers Integrated Wellness Center Logo" className="h-10 w-auto object-contain" src={logoSrc} />
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm tracking-tight text-on-surface leading-none">Healers</span>
                <span className="font-label-sm text-label-sm tracking-widest text-primary uppercase text-[9px]">Integrated Wellness</span>
              </div>
            </Link>
          ) : (
            <Link className="flex items-center gap-space-xs" to="/">
              <img alt="Healers Logo" className="h-8 w-auto object-contain" src={logoSrc} />
              <h1 className="font-headline-sm text-headline-sm text-on-surface truncate max-w-[180px]">{title}</h1>
            </Link>
          )}
        </div>

        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-2 lg:gap-4">
          {PRIMARY_NAV_ITEMS.map((item) => item.label === 'Services' ? (
            <div className="relative" key={item.label} onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button aria-expanded={servicesOpen} aria-haspopup="true" className={`text-sm font-medium transition-colors px-1 py-1 cursor-pointer ${servicesOpen || location.pathname.startsWith('/naturopathy') || location.pathname.startsWith('/acupuncture') || location.pathname.startsWith('/chiropractic') ? 'text-primary font-semibold' : 'text-on-surface hover:text-primary'}`} onClick={() => setServicesOpen((open) => !open)} onKeyDown={(event) => { if (event.key === 'Escape') setServicesOpen(false); }} type="button">
                Services <span aria-hidden="true" className="material-symbols-outlined align-middle text-[16px]">keyboard_arrow_down</span>
              </button>
              {servicesOpen && (
                <div className="absolute left-0 top-full pt-2 w-56" role="menu">
                  <div className="rounded-xl bg-surface-bright shadow-xl ring-1 ring-outline-variant/40 p-2">
                    {SERVICE_NAV_ITEMS.map((service) => (
                      <button className="w-full text-left px-3 py-2 rounded-lg text-sm text-on-surface hover:bg-surface-container-low hover:text-primary transition-colors cursor-pointer" key={service.label} onClick={() => { setServicesOpen(false); handleNavClick(service.route); }} role="menuitem" type="button">{service.label}</button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <a className="text-sm font-medium transition-colors px-1 py-1 text-on-surface hover:text-primary" href={item.href} key={item.label}>{item.label}</a>
          ))}
        </nav>

        <div className="flex items-center gap-space-sm">
          {variant === 'home' ? (
            <button className="hidden md:inline-flex items-center justify-center gap-1.5 py-2 px-3.5 rounded-lg bg-gradient-to-r from-[#F3DC96] via-[#E5C062] to-[#B8963E] text-on-secondary-fixed font-label-sm text-label-sm uppercase tracking-wider shadow-sm hover:brightness-105 active:scale-95 transition-all cursor-pointer" onClick={() => handleNavClick('/contact')} type="button">
              <span className="material-symbols-outlined text-[16px]">calendar_month</span>Book Consultation
            </button>
          ) : (
            onBookClick && <button className="hidden md:inline-flex items-center justify-center gap-1.5 py-2 px-3.5 rounded-lg bg-gradient-to-r from-[#F3DC96] via-[#E5C062] to-[#B8963E] text-on-secondary-fixed font-label-sm text-label-sm uppercase tracking-wider shadow-sm hover:brightness-105 active:scale-95 transition-all cursor-pointer" onClick={onBookClick} type="button"><span className="material-symbols-outlined text-[16px]">calendar_month</span>Book Consultation</button>
          )}
        </div>
      </div>
    </header>
  );
}
