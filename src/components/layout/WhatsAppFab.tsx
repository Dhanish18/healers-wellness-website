import { SANCTUARY_INFO } from '../../data/navigation';

interface WhatsAppFabProps {
  hasBottomNav?: boolean;
}

export function WhatsAppFab({ hasBottomNav = false }: WhatsAppFabProps) {
  return (
    <div
      className={`fixed ${
        hasBottomNav ? 'bottom-24 md:bottom-8' : 'bottom-6'
      } right-4 z-40 flex items-center group`}
    >
      <div className="pointer-events-none opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-200 mr-2 bg-inverse-surface/90 text-inverse-on-surface px-3 py-1.5 rounded-lg shadow-lg font-label-sm text-label-sm whitespace-nowrap">
        Consult via WhatsApp
        <br />
        <span className="text-[10px] text-[#E5C062]">{SANCTUARY_INFO.phoneDisplay}</span>
      </div>
      <a
        aria-label="WhatsApp Consultation"
        className="relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_8px_24px_rgba(37,211,102,0.35)] transition-transform active:scale-95 focus:outline-none"
        href={SANCTUARY_INFO.whatsappBase}
        rel="noopener noreferrer"
        target="_blank"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
        <span className="material-symbols-outlined text-[28px] relative z-10">chat</span>
      </a>
    </div>
  );
}
