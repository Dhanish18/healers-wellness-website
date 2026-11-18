import { Link, useLocation, useNavigate } from 'react-router-dom';
import { PRIMARY_NAV_ITEMS } from '../../data/navigation';

interface HeaderProps {
  variant: 'home' | 'detail';
  title?: string;
  logoSrc: string;
  onOpenDrawer?: () => void;
  onBookClick?: () => void;
}

export function Header({
  variant,
  title,
  logoSrc,
  onOpenDrawer,
  onBookClick,
}: HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  const handleNavClick = (route: string) => {
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

  const desktopLinks =
    variant === 'home'
      ? PRIMARY_NAV_ITEMS
      : PRIMARY_NAV_ITEMS.filter((item) =>
          ['home', 'naturopathy', 'acupuncture', 'chiropractic'].includes(item.path)
        );

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 ${
        variant === 'home' ? 'bg-surface/80' : 'bg-surface/85'
      } backdrop-blur-xl pt-safe shadow-[0_1px_0_0_rgba(229,192,98,0.25)]`}
    >
      <div className="h-16 px-margin md:px-margin-tablet lg:px-margin-desktop max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-space-sm">
          {variant === 'home' ? (
            <button
              aria-label="Open Menu"
              className="w-11 h-11 flex md:hidden items-center justify-center text-on-surface hover:text-primary transition-colors focus:outline-none cursor-pointer"
              onClick={onOpenDrawer}
              type="button"
            >
              <span className="material-symbols-outlined text-[24px]">menu</span>
            </button>
          ) : (
            <button
              aria-label="Go Back"
              className="w-11 h-11 flex items-center justify-center text-on-surface hover:text-primary transition-colors focus:outline-none cursor-pointer"
              onClick={handleBack}
              type="button"
            >
              <span className="material-symbols-outlined text-[24px]">arrow_back_ios_new</span>
            </button>
          )}

          {variant === 'home' ? (
            <Link className="flex items-center gap-space-xs" to="/">
              <img
                alt="Healers Integrated Wellness Center Logo"
                className="h-10 w-auto object-contain"
                src={logoSrc}
              />
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm tracking-tight text-on-surface leading-none">
                  Healers
                </span>
                <span className="font-label-sm text-label-sm tracking-widest text-primary uppercase text-[9px]">
                  Integrated Wellness
                </span>
              </div>
            </Link>
          ) : (
            <Link className="flex items-center gap-space-xs" to="/">
              <img alt="Healers Logo" className="h-8 w-auto object-contain" src={logoSrc} />
              <h1 className="font-headline-sm text-headline-sm text-on-surface truncate max-w-[180px]">
                {title}
              </h1>
            </Link>
          )}
        </div>

        <nav className="hidden md:flex items-center gap-2 lg:gap-4">
          {desktopLinks.map((item) => {
            const isActive =
              item.route === location.pathname ||
              (item.route === '/' && location.pathname === '/');
            return (
              <button
                key={item.path}
                className={`text-sm font-medium transition-colors px-1 py-1 cursor-pointer ${
                  isActive && item.route === location.pathname
                    ? 'text-primary font-semibold'
                    : 'text-on-surface hover:text-primary'
                }`}
                onClick={() => handleNavClick(item.route)}
                type="button"
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-space-sm">
          {variant === 'home' ? (
            <button
              className="hidden md:inline-flex items-center justify-center gap-1.5 py-2 px-3.5 rounded-lg bg-gradient-to-r from-[#F3DC96] via-[#E5C062] to-[#B8963E] text-on-secondary-fixed font-label-sm text-label-sm uppercase tracking-wider shadow-sm hover:brightness-105 active:scale-95 transition-all cursor-pointer"
              onClick={() => handleNavClick('/#consultation-booking')}
              type="button"
            >
              <span className="material-symbols-outlined text-[16px]">calendar_month</span>
              Book Consultation
            </button>
          ) : (
            onBookClick && (
              <button
                className="hidden md:inline-flex items-center justify-center gap-1.5 py-2 px-3.5 rounded-lg bg-gradient-to-r from-[#F3DC96] via-[#E5C062] to-[#B8963E] text-on-secondary-fixed font-label-sm text-label-sm uppercase tracking-wider shadow-sm hover:brightness-105 active:scale-95 transition-all cursor-pointer"
                onClick={onBookClick}
                type="button"
              >
                <span className="material-symbols-outlined text-[16px]">calendar_month</span>
                Book Consultation
              </button>
            )
          )}
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-[0_2px_8px_rgba(118,90,0,0.2)]">
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>
        </div>
      </div>
    </header>
  );
}
