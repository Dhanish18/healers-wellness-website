import { useNavigate } from 'react-router-dom';

interface BreadcrumbsProps {
  currentPage: string;
  separatorType?: 'slash' | 'chevron';
}

export function Breadcrumbs({ currentPage, separatorType = 'slash' }: BreadcrumbsProps) {
  const navigate = useNavigate();

  const goToTreatments = () => {
    navigate('/', { state: { scrollTo: 'treatment-modalities' } });
  };

  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-1.5 text-on-surface-variant font-label-md text-label-md uppercase tracking-wider"
    >
      <button
        className="hover:text-primary transition-colors cursor-pointer uppercase"
        onClick={() => navigate('/')}
        type="button"
      >
        Home
      </button>
      {separatorType === 'slash' ? (
        <span className="text-primary/40">/</span>
      ) : (
        <span className="material-symbols-outlined text-[14px] text-tertiary-fixed-dim">
          chevron_right
        </span>
      )}
      <button
        className="hover:text-primary transition-colors cursor-pointer uppercase"
        onClick={goToTreatments}
        type="button"
      >
        Treatments
      </button>
      {separatorType === 'slash' ? (
        <span className="text-primary/40">/</span>
      ) : (
        <span className="material-symbols-outlined text-[14px] text-tertiary-fixed-dim">
          chevron_right
        </span>
      )}
      <span className="text-primary font-semibold">{currentPage}</span>
    </nav>
  );
}
