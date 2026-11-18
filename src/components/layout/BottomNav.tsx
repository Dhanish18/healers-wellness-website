import { useLocation, useNavigate } from 'react-router-dom';

export function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollOrNavigate = (targetId: string) => {
    if (location.pathname === '/') {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTo: targetId } });
    }
  };

  return (
    <nav className="fixed bottom-0 inset-x-0 z-50 pb-safe bg-surface/85 backdrop-blur-xl shadow-[0_-1px_0_0_rgba(229,192,98,0.2)] md:hidden">
      <div className="flex justify-around items-center h-20 px-2">
        <button
          aria-current={location.pathname === '/' ? 'page' : undefined}
          className={`flex flex-col items-center justify-center gap-1 w-16 h-14 transition-all cursor-pointer ${
            location.pathname === '/'
              ? 'text-primary font-semibold'
              : 'text-on-surface-variant hover:text-primary'
          }`}
          onClick={() => navigate('/')}
          type="button"
        >
          <span className="material-symbols-outlined text-[22px]">spa</span>
          <span className="font-label-sm text-[10px]">Sanctuary</span>
        </button>

        <button
          className="flex flex-col items-center justify-center gap-1 w-16 h-14 text-on-surface-variant hover:text-primary transition-all cursor-pointer"
          onClick={() => scrollOrNavigate('treatment-modalities')}
          type="button"
        >
          <span className="material-symbols-outlined text-[22px]">local_florist</span>
          <span className="font-label-sm text-[10px]">Therapies</span>
        </button>

        <button
          className="flex flex-col items-center justify-center gap-1 w-16 h-14 text-on-surface-variant hover:text-primary transition-all cursor-pointer"
          onClick={() => scrollOrNavigate('care-pillars')}
          type="button"
        >
          <span className="material-symbols-outlined text-[22px]">medical_services</span>
          <span className="font-label-sm text-[10px]">Healers</span>
        </button>

        <button
          className="flex flex-col items-center justify-center gap-1 w-16 h-14 text-on-surface-variant hover:text-primary transition-all cursor-pointer"
          onClick={() => scrollOrNavigate('consultation-booking')}
          type="button"
        >
          <span className="material-symbols-outlined text-[22px]">badge</span>
          <span className="font-label-sm text-[10px]">Care Portal</span>
        </button>
      </div>
    </nav>
  );
}
