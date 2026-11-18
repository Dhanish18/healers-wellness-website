import { useLocation, useNavigate } from 'react-router-dom';
import { PRIMARY_NAV_ITEMS, SANCTUARY_INFO } from '../../data/navigation';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (route: string) => {
    onClose();
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
    <>
      <div
        className={`fixed inset-0 bg-inverse-surface/40 backdrop-blur-sm z-[60] transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        id="drawer-backdrop"
        onClick={onClose}
      />
      <aside
        className={`fixed top-0 right-0 bottom-0 w-[84%] max-w-sm bg-surface-bright/95 backdrop-blur-2xl z-[70] transition-transform duration-300 ease-out flex flex-col justify-between pt-safe pb-safe shadow-[0_24px_64px_-12px_rgba(31,31,31,0.15)] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        id="nav-drawer"
      >
        <div className="flex flex-col h-full overflow-y-auto">
          <div className="h-16 px-margin flex items-center justify-between">
            <span className="font-headline-sm text-headline-sm text-on-surface">
              Sanctuary Menu
            </span>
            <button
              aria-label="Close Menu"
              className="w-11 h-11 flex items-center justify-center text-on-surface hover:text-primary transition-colors cursor-pointer"
              onClick={onClose}
              type="button"
            >
              <span className="material-symbols-outlined text-[24px]">close</span>
            </button>
          </div>

          <div className="px-margin py-space-sm">
            <button
              className="w-full flex items-center justify-center py-space-md px-space-lg rounded-lg bg-gradient-to-br from-[#F3DC96] via-[#E5C062] to-[#B8963E] text-on-secondary-fixed font-label-lg text-label-lg uppercase tracking-wider shadow-[0_8px_24px_rgba(184,150,62,0.28)] hover:brightness-105 transition-all cursor-pointer"
              onClick={() => handleNavigate('/#consultation-booking')}
              type="button"
            >
              <span className="material-symbols-outlined text-[18px] mr-2">calendar_month</span>
              Book Consultation
            </button>
          </div>

          <nav className="px-margin py-space-md flex flex-col gap-space-xs">
            {PRIMARY_NAV_ITEMS.map((item) => {
              const isActive = item.route === location.pathname;
              return (
                <button
                  key={item.path}
                  className={`flex items-center justify-between py-3 px-space-sm rounded-lg transition-colors text-left cursor-pointer ${
                    isActive
                      ? 'bg-surface-container-low text-primary font-medium'
                      : 'text-on-surface hover:bg-surface-container-low'
                  }`}
                  onClick={() => handleNavigate(item.route)}
                  type="button"
                >
                  <span className="font-body-md text-body-md">
                    {item.drawerLabel || item.label}
                  </span>
                  <span className="material-symbols-outlined text-outline text-[18px]">
                    chevron_right
                  </span>
                </button>
              );
            })}
          </nav>

          <div className="mt-auto p-margin bg-surface-container-low">
            <div className="flex items-center gap-space-xs mb-1 text-primary">
              <span className="material-symbols-outlined text-[16px]">schedule</span>
              <span className="font-label-sm text-label-sm uppercase">Hospital Timings</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              {SANCTUARY_INFO.hours}
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
