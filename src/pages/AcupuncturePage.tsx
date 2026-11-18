import { useEffect, useState } from 'react';
import { DeQiSensorySelector } from '../components/acupuncture/DeQiSensorySelector';
import { BookingModal } from '../components/common/BookingModal';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ToastNotification } from '../components/common/ToastNotification';
import { PageLayout } from '../components/layout/PageLayout';
import {
  ACUPUNCTURE_BOOKING_FOCUSES,
  ACUPUNCTURE_CONDITIONS,
  ACUPUNCTURE_CONVERGENCE,
  ACUPUNCTURE_IMAGES,
  ACUPUNCTURE_SERVICES,
  ACUPUNCTURE_SESSION_STEPS,
} from '../data/acupunctureData';
import { BRAND_ASSETS } from '../data/navigation';

export function AcupuncturePage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const showToast = () => {
    setToastVisible(true);
    window.setTimeout(() => {
      setToastVisible(false);
    }, 4000);
  };

  return (
    <PageLayout
      logoSrc={BRAND_ASSETS.acupunctureLogo}
      onBookClick={() => setBookingOpen(true)}
      title="Acupuncture"
      variant="detail"
      watermarkSrc={BRAND_ASSETS.acupunctureWatermark}
    >
      <div className="flex flex-col w-full pb-12">
        {/* Hero Section */}
        <section className="relative px-margin md:px-margin-tablet lg:px-margin-desktop pt-4 pb-6 overflow-hidden max-w-6xl w-full mx-auto">
          <div className="absolute -top-16 -right-16 w-60 h-60 rounded-full bg-secondary-fixed/40 blur-3xl pointer-events-none" />

          <div className="mb-space-md">
            <Breadcrumbs currentPage="Acupuncture" separatorType="slash" />
          </div>

          <div className="flex flex-col gap-space-xs">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
              Integrative Neuro-Meridian Care
            </span>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight">
              Precision Acupuncture
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-1 max-w-3xl">
              Restoring Meridian Flow &amp; Neurological Equilibrium through centuries of refined
              Eastern diagnostics married with neuro-fascial science.
            </p>
          </div>

          <div className="mt-space-md relative rounded-xl overflow-hidden shadow-sm bg-surface-container-low">
            <div className="relative w-full h-56 md:h-80 bg-surface-container">
              <img
                alt="Close up photography of delicate single-use acupuncture needle placement on a calm patient back in a serene warm luxury wellness sanctuary, soft amber and gold dappled lighting, warm linen textures, spa atmosphere with minimalist aesthetics"
                className="w-full h-full object-cover"
                src={ACUPUNCTURE_IMAGES.hero}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/85 via-inverse-surface/20 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-inverse-on-surface gap-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined material-symbols-filled text-[18px] text-secondary-fixed">
                    verified
                  </span>
                  <span className="font-label-sm text-label-sm tracking-wider uppercase">
                    0.18mm Japanese Sterile Filiform Needles
                  </span>
                </div>
                <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-bright/20 backdrop-blur-sm text-inverse-on-surface shrink-0">
                  Painless Depth
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Pulse Bar / Micro Metric */}
        <section className="px-margin md:px-margin-tablet lg:px-margin-desktop mb-space-lg max-w-6xl w-full mx-auto">
          <div className="bg-surface-container-low rounded-xl p-space-md shadow-sm flex items-center justify-between gap-space-sm">
            <div className="flex items-center gap-space-sm min-w-0">
              <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined material-symbols-filled text-[20px]">
                  spa
                </span>
              </div>
              <div className="min-w-0">
                <p className="font-title-md text-title-md text-on-surface truncate">
                  98.4% Meridian Attunement
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                  Clinically documented nervous system reset
                </p>
              </div>
            </div>
            <button
              aria-label="Explore modalities"
              className="shrink-0 p-2 rounded-lg bg-surface-container hover:bg-secondary-fixed/50 text-primary transition-colors cursor-pointer"
              onClick={() =>
                document.getElementById('services-grid')?.scrollIntoView({ behavior: 'smooth' })
              }
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">south</span>
            </button>
          </div>
        </section>

        {/* About Section: TCM + Neuro-Fascial Mapping */}
        <section className="px-margin md:px-margin-tablet lg:px-margin-desktop mb-space-xl flex flex-col gap-space-md max-w-6xl w-full mx-auto">
          <div className="flex flex-col gap-space-xs">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">
              Biomedical Convergence
            </span>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">
              Where Ancient Wisdom Meets Neuroscience
            </h3>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-sm">
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Our protocol bridges classical{' '}
              <strong className="text-on-surface font-medium">
                Traditional Chinese Medicine (TCM)
              </strong>{' '}
              with rigorous modern neuro-fascial anatomy. By tracking electrical conductivity along
              somatic channels, we target exact micro-neural junctions rather than generalized
              pressure zones.
            </p>
            <div className="py-2">
              <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-primary-container/40 to-transparent" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm md:gap-space-md pt-1">
              {ACUPUNCTURE_CONVERGENCE.map((item) => (
                <div key={item.title} className="flex items-start gap-space-sm">
                  <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[16px]">{item.icon}</span>
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-title-md text-title-md text-on-surface">{item.title}</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive De-Qi Sensory Indicator */}
        <DeQiSensorySelector />

        {/* Our Services Section */}
        <section
          className="px-margin md:px-margin-tablet lg:px-margin-desktop mb-space-xl flex flex-col gap-space-md max-w-6xl w-full mx-auto"
          id="services-grid"
        >
          <div className="flex flex-col gap-space-xs">
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">
                Clinical Disciplines
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                7 Integrated Modalities
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">
              Targeted Acupuncture Services
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Customized after thorough pulse, tongue, and neurological diagnostic intake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm md:gap-space-md">
            {ACUPUNCTURE_SERVICES.map((service) => (
              <div
                key={service.title}
                className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-2"
              >
                <div className="flex items-start justify-between gap-space-sm">
                  <div className="flex items-center gap-space-sm">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                        service.iconHighlighted
                          ? 'bg-secondary-container text-on-secondary-container'
                          : 'bg-surface-container-high text-primary'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[20px]">{service.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-title-md text-title-md text-on-surface">
                        {service.title}
                      </h4>
                      <span className="font-label-sm text-label-sm text-primary uppercase">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-[18px] text-outline-variant">
                    arrow_forward
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Visual Atmospheric Treatment Vignette */}
        <section className="px-margin md:px-margin-tablet lg:px-margin-desktop mb-space-xl max-w-6xl w-full mx-auto">
          <div className="rounded-xl overflow-hidden shadow-sm relative bg-surface-container md:grid md:grid-cols-12">
            <img
              alt="Luxurious organic healing hospital room with natural timber paneling, soft warm spotlight, organic ceramic bowls filled with dried botanicals, clean towels, and serene atmosphere"
              className="w-full h-44 md:h-full md:min-h-[200px] md:col-span-5 object-cover"
              src={ACUPUNCTURE_IMAGES.vignette}
            />
            <div className="p-space-md md:p-space-lg bg-surface-container-lowest flex flex-col justify-center gap-1 md:col-span-7">
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">
                Sanctuary Experience
              </span>
              <p className="font-title-md text-title-md text-on-surface">
                Private Restorative Suites
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Each 50-minute appointment occurs inside sound-insulated chambers equipped with warm
                FAR-infrared jade heat mats and medical-grade HEPA filtration.
              </p>
            </div>
          </div>
        </section>

        {/* Holistic Care For Section */}
        <section className="px-margin md:px-margin-tablet lg:px-margin-desktop mb-space-xl flex flex-col gap-space-md max-w-6xl w-full mx-auto">
          <div className="flex flex-col gap-space-xs">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">
              Indications &amp; Clinical Efficacy
            </span>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">Holistic Care For</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Evidence-based integrated protocols for complex neuro-muscular and psycho-somatic
              conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-space-sm">
            {ACUPUNCTURE_CONDITIONS.map((cond) => (
              <div
                key={cond.title}
                className="bg-surface-container-low rounded-xl p-space-sm flex items-center justify-between shadow-sm gap-2"
              >
                <div className="flex items-center gap-space-sm min-w-0">
                  <div className="w-8 h-8 rounded-full bg-secondary-container/60 text-on-secondary-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[16px]">{cond.icon}</span>
                  </div>
                  <div className="truncate">
                    <h4 className="font-body-md text-body-md font-medium text-on-surface truncate">
                      {cond.title}
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                      {cond.subtitle}
                    </p>
                  </div>
                </div>
                <span className="font-label-sm text-label-sm bg-surface-container-highest px-2 py-1 rounded text-primary shrink-0">
                  {cond.badge}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Clinical Process / Treatment Sequence */}
        <section className="px-margin md:px-margin-tablet lg:px-margin-desktop mb-space-xl max-w-6xl w-full mx-auto">
          <div className="bg-surface-container-lowest rounded-xl p-space-md md:p-space-lg shadow-sm">
            <h4 className="font-title-md text-title-md text-on-surface mb-2">
              What to Expect During Your Session
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-space-md pt-2">
              {ACUPUNCTURE_SESSION_STEPS.map((item) => (
                <div key={item.step} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary text-on-primary font-label-sm text-label-sm flex items-center justify-center shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <p className="font-title-md text-title-md text-on-surface">{item.title}</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Book Online Consultation CTA Banner */}
        <section className="px-margin md:px-margin-tablet lg:px-margin-desktop max-w-6xl w-full mx-auto">
          <div className="relative bg-gradient-to-br from-inverse-surface via-[#2B2824] to-inverse-surface text-inverse-on-surface rounded-2xl p-space-lg shadow-xl overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-primary-container/20 blur-2xl pointer-events-none" />
            <div className="flex flex-col gap-space-md relative z-10">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse" />
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-[#E5C062]">
                    Direct Medical Access
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-inverse-on-surface">
                  Begin Your Restorative Journey
                </h3>
                <p className="font-body-sm text-body-sm text-surface-container-high leading-relaxed mt-1">
                  Schedule an in-depth preliminary case review with our Lead Acupuncturist and
                  Integrative Neurologist.
                </p>
              </div>

              <div className="bg-surface-bright/10 backdrop-blur-md rounded-xl p-3 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#E5C062]/20 flex items-center justify-center text-[#E5C062] shrink-0">
                  <span className="material-symbols-outlined text-[20px]">calendar_clock</span>
                </div>
                <div className="min-w-0">
                  <span className="font-label-sm text-label-sm uppercase text-[#E5C062] tracking-wider block">
                    Consultation Timings
                  </span>
                  <span className="font-body-sm text-body-sm text-surface-bright font-medium block truncate">
                    Mon – Sat | 10:00 AM – 6:00 PM
                  </span>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-space-sm pt-1">
                <a
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#25D366] text-white font-title-md text-title-md font-semibold shadow-md active:scale-95 transition-transform"
                  href="https://wa.me/18004325377?text=Hello%20Healers%20Sanctuary,%20I%20would%20like%20to%20consult%20regarding%20Precision%20Acupuncture."
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[22px]">chat</span>
                  <span>Consult via WhatsApp</span>
                </a>
                <button
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-gradient-to-r from-secondary-fixed via-primary-container to-secondary-fixed text-on-primary-container font-title-md text-title-md font-semibold shadow-lg hover:brightness-105 active:scale-95 transition-all cursor-pointer"
                  onClick={() => setBookingOpen(true)}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[22px]">event_available</span>
                  <span>Book Center Appointment</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-center pt-1 text-surface-container-high/80">
                <span className="material-symbols-outlined text-[16px] text-[#E5C062]">
                  verified_user
                </span>
                <span className="font-label-sm text-label-sm">
                  NABH Accredited • 100% Single-Use Sterile Kits
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <BookingModal
        dateLabel="Preferred Date & Slot"
        focusLabel="Primary Health Focus"
        focusOptions={ACUPUNCTURE_BOOKING_FOCUSES}
        icon="healing"
        isOpen={bookingOpen}
        mode="toast"
        nameLabel="Full Patient Name"
        namePlaceholder="Lady or Sir / Name"
        onClose={() => setBookingOpen(false)}
        onSubmitToast={showToast}
        submitLabel="Confirm Intake Reservation"
        subtitle="Our clinical concierge will verify your medical history and reserve your personalized restorative suite."
        title="Book Acupuncture Intake"
      />

      <ToastNotification
        icon="check_circle"
        message="Inquiry received. A wellness physician will reach out via WhatsApp."
        visible={toastVisible}
      />
    </PageLayout>
  );
}
