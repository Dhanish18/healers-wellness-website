import { useLocation, useNavigate } from 'react-router-dom';
import { FOOTER_DISCIPLINES, SANCTUARY_INFO } from '../../data/navigation';

interface FooterProps {
  logoSrc: string;
  showDisciplines?: boolean;
}

export function Footer({ logoSrc, showDisciplines = false }: FooterProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLink = (route: string) => {
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
    <footer className="mt-space-xl bg-[#1F1F1F] text-inverse-on-surface px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#E5C062] to-transparent opacity-60 mb-space-lg" />

        <div
          className={`flex flex-col gap-space-lg ${
            showDisciplines
              ? 'md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-gutter'
              : 'md:grid md:grid-cols-3 md:gap-gutter'
          }`}
        >
          <div className="flex items-center gap-space-xs self-start">
            <img
              alt="Healers Integrated Wellness Center Logo"
              className="h-10 w-auto object-contain brightness-110"
              src={logoSrc}
            />
            <span className="font-headline-sm text-headline-sm text-[#F3DC96] tracking-tight">
              Healers
            </span>
          </div>

          <div className="flex flex-col gap-space-xs">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-[#E5C062]">
              Sanctuary Hours
            </span>
            <p className="font-body-sm text-body-sm text-surface-container-high">
              {SANCTUARY_INFO.hours}
            </p>
            <p className="font-body-sm text-body-sm text-surface-dim italic">
              {SANCTUARY_INFO.sundayNote}
            </p>
          </div>

          <div className="flex flex-col gap-space-xs">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-[#E5C062]">
              Location &amp; Contact
            </span>
            <p className="font-body-sm text-body-sm text-surface-container-high">
              {SANCTUARY_INFO.pavilionAddress}
            </p>
            <p className="font-body-sm text-body-sm text-surface-container-high">
              Tel: {SANCTUARY_INFO.phoneDisplay}
            </p>
          </div>

          {showDisciplines && (
            <div className="flex flex-col gap-space-xs">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-[#E5C062]">
                Holistic Disciplines
              </span>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 pt-1">
                {FOOTER_DISCIPLINES.map((item) => (
                  <button
                    key={item.path}
                    className="font-body-sm text-body-sm text-surface-dim hover:text-[#F3DC96] transition-colors text-left cursor-pointer"
                    onClick={() => handleLink(item.route)}
                    type="button"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="pt-space-lg text-center">
          <p className="font-label-sm text-label-sm text-surface-dim/60">
            © 2024 Healers Integrated Wellness Center. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
