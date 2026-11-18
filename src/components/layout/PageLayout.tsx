import { useState, type ReactNode } from 'react';
import { BottomNav } from './BottomNav';
import { Footer } from './Footer';
import { Header } from './Header';
import { MobileDrawer } from './MobileDrawer';
import { WatermarkBackdrop } from './WatermarkBackdrop';
import { WhatsAppFab } from './WhatsAppFab';

interface PageLayoutProps {
  variant: 'home' | 'detail';
  title?: string;
  logoSrc: string;
  watermarkSrc: string;
  showBottomNav?: boolean;
  showFooterDisciplines?: boolean;
  onBookClick?: () => void;
  children: ReactNode;
}

export function PageLayout({
  variant,
  title,
  logoSrc,
  watermarkSrc,
  showBottomNav = false,
  showFooterDisciplines = false,
  onBookClick,
  children,
}: PageLayoutProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <WatermarkBackdrop src={watermarkSrc} />

      <Header
        logoSrc={logoSrc}
        onBookClick={onBookClick}
        onOpenDrawer={() => setDrawerOpen(true)}
        title={title}
        variant={variant}
      />

      {variant === 'home' && (
        <MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
      )}

      <main
        className={`flex-1 flex flex-col relative w-full pt-16 ${
          showBottomNav ? 'pb-24 md:pb-0' : ''
        } z-10`}
      >
        <div className="flex flex-col w-full flex-1">{children}</div>
        <Footer logoSrc={logoSrc} showDisciplines={showFooterDisciplines} />
      </main>

      <WhatsAppFab hasBottomNav={showBottomNav} />
      {showBottomNav && <BottomNav />}
    </>
  );
}
