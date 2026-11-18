import { useEffect, useState } from 'react';
import { BookingModal } from '../components/common/BookingModal';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { PageLayout } from '../components/layout/PageLayout';
import {
  NATUROPATHY_BADGES,
  NATUROPATHY_BOOKING_OBJECTIVES,
  NATUROPATHY_CONDITIONS,
  NATUROPATHY_IMAGES,
  NATUROPATHY_MILESTONES,
  NATUROPATHY_SERVICES,
} from '../data/naturopathyData';
import { BRAND_ASSETS } from '../data/navigation';

export function NaturopathyPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout
      logoSrc={BRAND_ASSETS.naturopathyLogo}
      onBookClick={() => setBookingOpen(true)}
      title="Naturopathy"
      variant="detail"
      watermarkSrc={BRAND_ASSETS.naturopathyWatermark}
    >
      {/* Top Sanctuary Story Arc / Breadcrumbs */}
      <section className="px-margin md:px-margin-tablet lg:px-margin-desktop pt-space-md pb-space-xs max-w-6xl w-full mx-auto">
        <Breadcrumbs currentPage="Naturopathy" separatorType="slash" />
      </section>

      {/* Hero Content Display */}
      <section className="px-margin md:px-margin-tablet lg:px-margin-desktop pt-space-xs pb-space-lg flex flex-col max-w-6xl w-full mx-auto">
        <div className="relative overflow-hidden rounded-xl bg-surface-container-low shadow-sm">
          <div className="relative h-60 md:h-80 w-full overflow-hidden">
            <img
              alt="Serene luxury clinical naturopathy wellness setting with warm morning sunlight streaming through sheer linen curtains, delicate botanical compresses resting on a dark teak wooden bowl, and calm therapeutic mineral water bath in an organic minimalist interior of warm limestone and brushed gold accents."
              className="w-full h-full object-cover"
              src={NATUROPATHY_IMAGES.hero}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-surface-container-low/40 to-transparent" />
            <div className="absolute top-3 left-3 bg-surface/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Restorative Protocol
              </span>
            </div>
          </div>

          <div className="p-space-md md:p-space-lg flex flex-col gap-space-xs">
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight">
              Clinical Naturopathy
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant font-light leading-relaxed">
              Harnessing Nature&apos;s Vital Force for Deep Cellular Regeneration
            </p>

            <div className="grid grid-cols-3 gap-space-xs md:gap-space-sm pt-space-sm">
              {NATUROPATHY_BADGES.map((badge) => (
                <div
                  key={badge.label}
                  className="bg-surface-container p-2.5 md:p-3 rounded-lg text-center flex flex-col items-center"
                >
                  <span className="material-symbols-outlined text-primary text-[20px] mb-1">
                    {badge.icon}
                  </span>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy & Medical-Grade Overview */}
      <section className="px-margin md:px-margin-tablet lg:px-margin-desktop py-space-md max-w-6xl w-full mx-auto">
        <div className="bg-surface-container-low p-space-lg rounded-xl shadow-sm relative overflow-hidden">
          <div className="flex items-center gap-space-xs mb-space-sm">
            <div className="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed shadow-sm">
              <span className="material-symbols-outlined text-[18px]">verified</span>
            </div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">
              Principle of Equilibrium
            </span>
          </div>

          <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-sm leading-snug">
            Vis Medicatrix Naturae: The Healing Power of Natural Order
          </h3>

          <p className="font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed font-light">
            At Healers, clinical naturopathy honors the innate somatic intelligence of human
            biology. We operate without reliance on synthetic pharmaceuticals, re-orchestrating
            physiological health by removing metabolic toxicity and revitalizing cellular pathways.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm md:gap-space-md pt-space-xs">
            {NATUROPATHY_MILESTONES.map((item) => (
              <div key={item.title} className="flex items-start gap-space-sm">
                <div className="mt-1 w-6 h-6 rounded-full bg-primary-fixed flex items-center justify-center flex-shrink-0 text-on-primary-fixed shadow-xs">
                  <span className="material-symbols-outlined text-[14px]">{item.icon}</span>
                </div>
                <div>
                  <h4 className="font-title-md text-title-md text-on-surface">{item.title}</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant font-light mt-0.5">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-space-lg bg-surface-container rounded-lg p-space-md flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-space-sm">
              <span className="material-symbols-outlined text-primary text-[24px]">
                energy_savings_leaf
              </span>
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">
                  Detox Index
                </span>
                <p className="font-title-md text-title-md text-on-surface">
                  Somatic Vitality Score
                </p>
              </div>
            </div>
            <div className="text-right">
              <span className="font-headline-sm text-headline-sm text-primary font-medium">
                98.4%
              </span>
              <p className="font-label-sm text-label-sm text-on-surface-variant">
                Patient Efficacy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Visual Experience Showcase */}
      <section className="px-margin md:px-margin-tablet lg:px-margin-desktop py-space-sm max-w-6xl w-full mx-auto">
        <div className="rounded-xl overflow-hidden shadow-sm bg-surface-container-high relative">
          <div className="relative h-44 md:h-64 w-full">
            <img
              alt="Macro perspective of herbal mud compress and hydrotherapy bath with floating medicinal blossoms, glowing softly under warm amber lighting in an architectural spa sanctum."
              className="w-full h-full object-cover"
              src={NATUROPATHY_IMAGES.experience}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-high via-surface-container-high/60 to-transparent" />
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
              <span className="font-headline-sm text-headline-sm text-on-surface">
                Ancient Modality, Precision Science
              </span>
              <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Naturopathic Services Section */}
      <section className="px-margin md:px-margin-tablet lg:px-margin-desktop pt-space-lg pb-space-md max-w-6xl w-full mx-auto">
        <div className="mb-space-md">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">
            Specialized Therapies
          </span>
          <h3 className="font-headline-sm text-headline-sm text-on-surface mt-1">
            Our Naturopathic Services
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant font-light mt-0.5">
            Targeted elemental therapies formulated for systemic reset and organ rejuvenation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm md:gap-space-md">
          {NATUROPATHY_SERVICES.map((service) => (
            <div
              key={service.title}
              className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <div className="flex items-start gap-space-sm">
                <div className="w-7 h-7 rounded-full bg-secondary-fixed flex items-center justify-center flex-shrink-0 text-on-secondary-fixed shadow-xs">
                  <span className="material-symbols-outlined material-symbols-filled text-[16px]">
                    check
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-title-md text-title-md text-on-surface truncate">
                      {service.title}
                    </h4>
                    <span className="font-label-sm text-label-sm text-primary uppercase font-medium shrink-0">
                      {service.category}
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant font-light mt-1">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Holistic Care For (Conditions Treated) */}
      <section className="px-margin md:px-margin-tablet lg:px-margin-desktop py-space-md max-w-6xl w-full mx-auto">
        <div className="bg-surface-container-low p-space-lg rounded-xl shadow-sm">
          <div className="flex items-center gap-space-xs mb-space-xs">
            <span className="material-symbols-outlined text-primary text-[20px]">healing</span>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">
              Clinical Indications
            </span>
          </div>
          <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">
            Holistic Care For
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant font-light mb-space-md">
            Proven therapeutic protocols targeting the root etiology of chronic physical strain.
          </p>

          <div className="flex flex-wrap gap-2">
            {NATUROPATHY_CONDITIONS.map((chip) => (
              <div
                key={chip.label}
                className="bg-surface-container-lowest px-3 py-2 rounded-lg flex items-center gap-2 shadow-xs"
              >
                <span className="material-symbols-outlined text-primary text-[18px]">
                  {chip.icon}
                </span>
                <span className="font-label-md text-label-md text-on-surface">{chip.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Philosophy Quote Block */}
      <section className="px-margin md:px-margin-tablet lg:px-margin-desktop py-space-sm max-w-6xl w-full mx-auto">
        <div className="bg-surface-container p-space-md md:p-space-lg rounded-xl shadow-xs text-center flex flex-col items-center">
          <span className="font-headline-sm text-headline-sm text-primary leading-none mb-1">
            “
          </span>
          <p className="font-headline-md text-title-md text-on-surface italic max-w-xs md:max-w-xl">
            Let food be your medicine, and let natural equilibrium restore what clinical chaos has
            fractured.
          </p>
          <span className="mt-space-sm font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant font-medium">
            Department of Clinical Naturopathy
          </span>
        </div>
      </section>

      {/* Book Online Consultation CTA Banner */}
      <section className="px-margin md:px-margin-tablet lg:px-margin-desktop pt-space-md pb-space-lg max-w-6xl w-full mx-auto">
        <div className="bg-inverse-surface text-inverse-on-surface p-space-lg rounded-xl shadow-xl relative overflow-hidden flex flex-col gap-space-md">
          <div className="absolute -right-8 -top-8 w-36 h-36 rounded-full bg-primary/20 blur-2xl pointer-events-none" />
          <div className="absolute -left-8 -bottom-8 w-36 h-36 rounded-full bg-secondary-fixed/10 blur-2xl pointer-events-none" />

          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-[#F3DC96] text-[20px]">
              calendar_month
            </span>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-[#E5C062] font-semibold">
              Consultation Registry
            </span>
          </div>

          <div>
            <h3 className="font-headline-sm text-headline-sm text-surface-container-lowest font-normal">
              Begin Your Restorative Pathway
            </h3>
            <p className="font-body-sm text-body-sm text-surface-dim font-light mt-1">
              Receive a tailored holistic health diagnosis with our senior clinical naturopaths.
            </p>
          </div>

          <div className="bg-inverse-surface/80 p-space-sm rounded-lg flex items-center gap-space-sm">
            <div className="w-10 h-10 rounded-full bg-[#E5C062]/20 flex items-center justify-center text-[#F3DC96] flex-shrink-0">
              <span className="material-symbols-outlined text-[20px]">schedule</span>
            </div>
            <div>
              <span className="font-label-sm text-label-sm text-[#E5C062] uppercase tracking-wider block">
                Sanctuary Evaluation Hours
              </span>
              <span className="font-title-md text-title-md text-surface-container-lowest">
                Mon – Sat | 10:00 AM – 6:00 PM
              </span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-space-sm pt-space-xs">
            <button
              className="w-full py-3.5 px-4 rounded-lg bg-gradient-to-r from-[#F3DC96] via-[#E5C062] to-[#B8963E] text-on-secondary-fixed font-title-md text-title-md font-semibold tracking-wide shadow-md hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-2 focus:outline-none cursor-pointer"
              onClick={() => setBookingOpen(true)}
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">event_available</span>
              <span>Schedule Online Naturopathy Evaluation</span>
            </button>

            <a
              className="w-full py-3 px-4 rounded-lg bg-surface-container-highest/20 hover:bg-surface-container-highest/30 text-surface-container-lowest font-title-md text-title-md font-medium tracking-wide active:scale-[0.98] transition-all flex items-center justify-center gap-2 focus:outline-none"
              href="https://wa.me/18004325377?text=Hello%20Healers%20Center,%20I%20would%20like%20to%20consult%20regarding%20Clinical%20Naturopathy."
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[#25D366] text-[20px]">chat</span>
              <span>Consult on WhatsApp</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-1.5 pt-space-xs text-center">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="font-label-sm text-label-sm text-surface-dim font-light">
              Evaluations supervised by Board-Certified Naturopaths
            </span>
          </div>
        </div>
      </section>

      <BookingModal
        confirmationMessage="Your consultation inquiry has been relayed to our Naturopathic Care Liaison. A clinical coordinator will contact you shortly."
        confirmationTitle="Evaluation Scheduled"
        dateLabel="Preferred Schedule"
        focusLabel="Primary Health Objective"
        focusOptions={NATUROPATHY_BOOKING_OBJECTIVES}
        icon="calendar_add_on"
        isOpen={bookingOpen}
        mode="inline-confirm"
        nameLabel="Full Name"
        namePlaceholder="e.g. Eleanor Vance"
        onClose={() => setBookingOpen(false)}
        submitLabel="Confirm Evaluation Request"
        subtitle="Select your preferred consultation modality with our Naturopathic Care Team."
        title="Book Evaluation"
      />
    </PageLayout>
  );
}
