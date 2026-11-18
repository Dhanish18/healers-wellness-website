import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BreathGuideCard } from '../components/home/BreathGuideCard';
import { PageLayout } from '../components/layout/PageLayout';
import {
  CARE_PILLARS,
  HOME_IMAGES,
  HOME_STATS,
  INTEGRATED_MODALITIES,
} from '../data/homeData';
import { BRAND_ASSETS } from '../data/navigation';

export function HomePage() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    const hashTarget = location.hash ? location.hash.slice(1) : undefined;
    const targetId = state?.scrollTo || hashTarget;
    if (targetId) {
      window.setTimeout(() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
      }, 60);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const handleModalityClick = (route: string) => {
    if (route.startsWith('/#')) {
      const targetId = route.slice(2);
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    navigate(route);
  };

  return (
    <PageLayout
      logoSrc={BRAND_ASSETS.homeLogo}
      showBottomNav
      showFooterDisciplines
      variant="home"
      watermarkSrc={BRAND_ASSETS.homeWatermark}
    >
      {/* Hero Sanctuary Showcase */}
      <section className="relative px-margin md:px-margin-tablet lg:px-margin-desktop pt-space-lg pb-space-xl overflow-hidden flex flex-col items-center text-center max-w-7xl w-full mx-auto">
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-72 h-72 bg-gradient-to-b from-primary-fixed/25 via-secondary-container/20 to-transparent blur-3xl pointer-events-none rounded-full" />

        <div className="relative inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container shadow-sm mb-space-md">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">
            Sanctuary of Holistic Healing
          </span>
        </div>

        <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight max-w-sm md:max-w-2xl">
          Healers Integrated{' '}
          <span className="italic font-display-mobile md:font-display text-primary">
            Wellness Center
          </span>
        </h1>

        <div className="mt-2 inline-flex items-center justify-center gap-2">
          <span className="h-px w-6 bg-gradient-to-r from-transparent to-primary" />
          <p className="font-headline-sm text-headline-sm italic text-tertiary">
            body heals itself
          </p>
          <span className="h-px w-6 bg-gradient-to-l from-transparent to-primary" />
        </div>

        <p className="mt-space-sm font-body-sm md:font-body-md text-body-sm md:text-body-md text-on-surface-variant max-w-xs md:max-w-xl leading-relaxed">
          Awaken your body&apos;s intrinsic restorative power through evidence-guided ancient
          therapies, clinical naturopathy, and tailored integrative care.
        </p>

        <div className="relative w-full max-w-4xl mt-space-md rounded-xl overflow-hidden shadow-lg aspect-[16/9] bg-surface-container-high">
          <img
            alt="An ethereal high-end wellness sanctuary treatment pavilion surrounded by warm amber sunlight, lush indoor lotus plants, smooth basalt river stones, delicate steam, and serene clinical aesthetic with a palette of warm gold, cream, and soft timber."
            className="w-full h-full object-cover"
            src={HOME_IMAGES.heroPavilion}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/60 via-transparent to-transparent flex items-end p-4 md:p-6">
            <span className="font-label-sm text-label-sm uppercase text-surface-bright tracking-wider flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-secondary-fixed">spa</span>
              Accredited Integrative Hospital Pavilion
            </span>
          </div>
        </div>

        <div className="w-full max-w-md md:max-w-lg mt-space-lg flex flex-col sm:flex-row gap-space-sm">
          <a
            className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg bg-gradient-to-r from-[#F3DC96] via-[#E5C062] to-[#B8963E] text-on-secondary-fixed font-label-lg text-label-lg uppercase tracking-wider shadow-[0_8px_24px_rgba(184,150,62,0.28)] hover:brightness-105 active:scale-[0.98] transition-all"
            href="#consultation-booking"
          >
            <span className="material-symbols-outlined material-symbols-filled text-[20px]">
              calendar_add_on
            </span>
            Book Online Consultation
          </a>
          <a
            className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-surface-container text-on-surface font-label-lg text-label-lg uppercase tracking-wider hover:bg-surface-container-high transition-colors"
            href="#treatment-modalities"
          >
            <span className="material-symbols-outlined text-[18px]">explore</span>
            Our Treatments
          </a>
        </div>

        <div className="w-full max-w-2xl mt-space-lg bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
          <div className="grid grid-cols-3 gap-2 text-center">
            {HOME_STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <span className="font-headline-sm text-headline-sm text-primary font-semibold leading-none">
                  {stat.value}
                </span>
                <span className="font-label-sm text-[9px] md:text-[11px] uppercase tracking-tighter md:tracking-wider text-on-surface-variant mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Daily Vitality Intention */}
      <BreathGuideCard />

      {/* Treatments Overview Grid */}
      <section
        className="px-margin md:px-margin-tablet lg:px-margin-desktop py-space-md flex flex-col gap-space-md max-w-7xl w-full mx-auto"
        id="treatment-modalities"
      >
        <div className="flex flex-col">
          <div className="inline-flex items-center gap-1.5 text-primary mb-1">
            <span className="material-symbols-outlined text-[16px]">healing</span>
            <span className="font-label-sm text-label-sm uppercase tracking-widest font-semibold">
              Restorative Therapies
            </span>
          </div>
          <h2 className="font-headline-md text-headline-md text-on-surface">
            Integrated Modalities
          </h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Synergistic clinical disciplines designed to resolve pathology and renew vitality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-sm md:gap-space-md">
          {INTEGRATED_MODALITIES.map((modality) => (
            <button
              key={modality.id}
              className="group bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all active:scale-[0.99] flex gap-space-sm items-start text-left cursor-pointer"
              onClick={() => handleModalityClick(modality.route)}
              type="button"
            >
              <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center shrink-0 text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-[24px]">{modality.icon}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-title-md text-title-md text-on-surface group-hover:text-primary transition-colors">
                    {modality.title}
                  </h3>
                  <span className="material-symbols-outlined text-outline text-[18px] group-hover:translate-x-0.5 transition-transform shrink-0">
                    arrow_forward
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 leading-snug">
                  {modality.description}
                </p>
                <span className="inline-block mt-2 font-label-sm text-[9px] uppercase px-2 py-0.5 rounded bg-surface-container text-tertiary">
                  {modality.tag}
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Virtual Consultation + Clinical Botanical Imagery */}
      <div className="px-margin md:px-margin-tablet lg:px-margin-desktop my-space-lg max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-stretch">
        <section className="lg:col-span-7 flex" id="consultation-booking">
          <div className="relative w-full rounded-2xl bg-surface-container-lowest p-space-lg shadow-xl overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#F3DC96] via-[#E5C062] to-[#B8963E]" />

            <div>
              <div className="flex items-center justify-between mb-space-sm gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-fixed/50 text-on-secondary-fixed font-label-sm text-label-sm uppercase font-semibold">
                  <span className="material-symbols-outlined text-[14px]">videocam</span>
                  Virtual Clinical Appointments
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-label-sm text-primary font-semibold shrink-0">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Live Today
                </span>
              </div>

              <h3 className="font-headline-sm text-headline-sm text-on-surface leading-tight">
                Connect Directly with Senior Consultants
              </h3>
              <p className="mt-2 font-body-sm text-body-sm text-on-surface-variant">
                Direct video evaluation with Senior Naturopathic Consultants for personalized
                constitutional analysis, medical report reviews, and dietary prescriptions.
              </p>

              <div className="mt-space-md p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">
                    schedule
                  </span>
                  <div>
                    <span className="font-label-sm text-[10px] uppercase tracking-wider text-outline font-semibold block">
                      Consultation Hours
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface font-medium">
                      Monday – Saturday | 10:00 AM – 6:00 PM (IST)
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">
                    verified_user
                  </span>
                  <div>
                    <span className="font-label-sm text-[10px] uppercase tracking-wider text-outline font-semibold block">
                      Care Standard
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface">
                      Evidence-based Naturopathy &amp; Integrative Protocol Delivery
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-space-md flex flex-col gap-2">
              <a
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-space-md rounded-lg bg-[#25D366] text-white font-label-lg text-label-lg uppercase tracking-wider shadow-md hover:brightness-105 active:scale-[0.98] transition-all"
                href="https://wa.me/919876543210?text=Hello%20Healers%20Team%2C%20I%20would%20like%20to%20schedule%20an%20Online%20Clinical%20Consultation."
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[20px]">chat</span>
                Consult on WhatsApp
              </a>
              <p className="text-center font-label-sm text-[10px] text-on-surface-variant">
                Instant appointment scheduling &amp; clinical pre-screening
              </p>
            </div>
          </div>
        </section>

        <section className="lg:col-span-5 flex">
          <div className="relative w-full rounded-xl lg:rounded-2xl overflow-hidden shadow-md h-48 lg:h-auto lg:min-h-[320px] bg-surface-container">
            <img
              alt="A warm organic apothecary laboratory with glass bottles filled with herbal essences, brass mortars, fresh medicinal rosemary and chamomile, soft backlit sunlight through sheer linen curtains in an elegant holistic hospital setting."
              className="w-full h-full object-cover"
              src={HOME_IMAGES.apothecary}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent flex flex-col justify-end p-space-md md:p-space-lg text-surface-bright">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed">
                Herbal Apothecary &amp; Dispensary
              </span>
              <p className="font-headline-sm text-headline-sm italic text-surface-bright leading-none mt-1">
                Nature synthesised with clinical intent.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Why Choose Us / Holistic Care Philosophy */}
      <section
        className="px-margin md:px-margin-tablet lg:px-margin-desktop py-space-md flex flex-col gap-space-md max-w-7xl w-full mx-auto"
        id="care-pillars"
      >
        <div className="text-center max-w-xs md:max-w-lg mx-auto">
          <div className="inline-flex items-center gap-1 text-primary mb-1">
            <span className="material-symbols-outlined text-[16px]">balance</span>
            <span className="font-label-sm text-label-sm uppercase tracking-widest font-semibold">
              Our Guiding Matrix
            </span>
          </div>
          <h2 className="font-headline-md text-headline-md text-on-surface">The 4 Care Pillars</h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
            Foundational principles empowering our clinical sanctum.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-space-sm md:gap-space-md">
          {CARE_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-surface-container-low rounded-xl p-space-md flex flex-col gap-2 shadow-sm"
            >
              <div
                className={`w-10 h-10 rounded-full ${pillar.iconBgClass} flex items-center justify-center ${pillar.iconTextClass}`}
              >
                <span className="material-symbols-outlined text-[20px]">{pillar.icon}</span>
              </div>
              <div>
                <h4 className="font-title-md text-title-md text-on-surface font-semibold leading-snug">
                  {pillar.title}
                </h4>
                <p className="font-body-sm text-[12px] md:text-body-sm text-on-surface-variant mt-1 leading-snug">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hospital Sanctuary Location & Contact Card */}
      <section className="px-margin md:px-margin-tablet lg:px-margin-desktop pt-space-md pb-space-lg max-w-7xl w-full mx-auto">
        <div className="bg-surface-container-lowest rounded-2xl p-space-md md:p-space-lg shadow-md flex flex-col gap-space-md">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">
              Physical Sanctuary
            </span>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mt-1">
              Visit Our Hospital Enclave
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-space-md items-stretch">
            <div className="md:col-span-6 w-full h-44 md:h-auto md:min-h-[220px] rounded-xl bg-surface-container-high bg-cover bg-center overflow-hidden shadow-inner relative flex items-end p-3">
              <div className="bg-surface-bright/90 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[18px]">pin_drop</span>
                <span className="font-label-sm text-label-sm text-on-surface font-medium">
                  New Delhi Sanctuary Campus
                </span>
              </div>
            </div>

            <div className="md:col-span-6 flex flex-col justify-between gap-space-md">
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-[20px]">location_on</span>
                  </div>
                  <div>
                    <span className="font-label-sm text-[10px] uppercase text-outline font-semibold">
                      Hospital Address
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface font-medium">
                      Plot 42, Harmony Boulevard, Sanctuary Enclave, New Delhi 110016
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-[20px]">phone_in_talk</span>
                  </div>
                  <div>
                    <span className="font-label-sm text-[10px] uppercase text-outline font-semibold">
                      Direct Enquiries
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface font-medium">
                      <a className="hover:text-primary transition-colors" href="tel:+919876543210">
                        +91 98765 43210
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-[20px]">mail</span>
                  </div>
                  <div>
                    <span className="font-label-sm text-[10px] uppercase text-outline font-semibold">
                      Clinical Inquiries
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface font-medium">
                      <a
                        className="hover:text-primary transition-colors"
                        href="mailto:care@healerswellness.com"
                      >
                        care@healerswellness.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <a
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-surface-container-high text-on-surface font-label-sm text-label-sm uppercase font-semibold hover:bg-primary-fixed transition-colors"
                  href="tel:+919876543210"
                >
                  <span className="material-symbols-outlined text-[16px]">call</span>
                  Call Hospital
                </a>
                <a
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-surface-container-high text-on-surface font-label-sm text-label-sm uppercase font-semibold hover:bg-primary-fixed transition-colors"
                  href="https://maps.google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[16px]">directions</span>
                  Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
