import { useEffect, useState } from 'react';
import { SpinalHarmonyTracker } from '../components/chiropractic/SpinalHarmonyTracker';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ToastNotification } from '../components/common/ToastNotification';
import { PageLayout } from '../components/layout/PageLayout';
import {
  CHIROPRACTIC_CONDITIONS,
  CHIROPRACTIC_IMAGES,
  CHIROPRACTIC_PHILOSOPHY,
  CHIROPRACTIC_PROTOCOLS,
} from '../data/chiropracticData';
import { BRAND_ASSETS } from '../data/navigation';

export function ChiropracticPage() {
  const [toastVisible, setToastVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openConsultationBooking = () => {
    setToastVisible(true);
    window.setTimeout(() => {
      setToastVisible(false);
    }, 4500);
  };

  return (
    <PageLayout
      logoSrc={BRAND_ASSETS.chiropracticLogo}
      onBookClick={openConsultationBooking}
      title="Chiropractic"
      variant="detail"
      watermarkSrc={BRAND_ASSETS.chiropracticWatermark}
    >
      {/* Top Visual Banner with Editorial Breadcrumbs & Hero Narrative */}
      <section className="relative w-full px-margin md:px-margin-tablet lg:px-margin-desktop pt-space-md pb-space-lg flex flex-col overflow-hidden max-w-6xl mx-auto">
        <div className="mb-space-sm">
          <Breadcrumbs currentPage="Chiropractic" separatorType="chevron" />
        </div>

        <div className="flex flex-col gap-space-xs mt-1">
          <div className="inline-flex items-center gap-1.5 self-start px-2.5 py-1 rounded-full bg-secondary-fixed/50 text-on-secondary-fixed font-label-sm text-label-sm uppercase">
            <span className="material-symbols-outlined material-symbols-filled text-[14px]">
              spa
            </span>
            Neuromusculoskeletal Medicine
          </div>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight mt-1">
            Chiropractic Care
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Restoring Spinal Integrity, Postural Harmony &amp; Nervous Function
          </p>
        </div>

        <div className="relative w-full mt-space-md rounded-xl overflow-hidden shadow-lg bg-surface-container-high">
          <img
            alt="Close up serene photograph of licensed chiropractor gently aligning cervical spine in an opulent sunlit wellness pavilion with warm honey oak paneling, linen curtains, and soft ambient golden lighting, organic minimalist sanctuary mood."
            className="w-full h-56 md:h-80 object-cover"
            src={CHIROPRACTIC_IMAGES.hero}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-inverse-surface/20 to-transparent flex flex-col justify-end p-space-md md:p-space-lg text-inverse-on-surface">
            <span className="font-label-sm text-label-sm text-[#F3DC96] tracking-widest uppercase">
              Evidence-Based Holistic Alignment
            </span>
            <p className="font-headline-sm text-headline-sm italic text-surface-bright leading-snug">
              Non-invasive decompression for natural cellular recovery.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Spine Biomechanics Pulse Strip */}
      <section className="px-margin md:px-margin-tablet lg:px-margin-desktop -mt-space-sm mb-space-lg max-w-6xl w-full mx-auto">
        <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-md flex items-center justify-between gap-2">
          <div className="flex items-center gap-space-sm">
            <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed shrink-0">
              <span className="material-symbols-outlined text-[22px]">vital_signs</span>
            </div>
            <div>
              <h3 className="font-title-md text-title-md text-on-surface">
                Spinal Subluxation Index
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Real-time biomechanical diagnostics
              </p>
            </div>
          </div>
          <div className="text-right shrink-0">
            <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
              Zero Surgery
            </span>
            <div className="font-label-md text-label-md text-on-surface-variant">
              100% Manual Precision
            </div>
          </div>
        </div>
      </section>

      {/* About Chiropractic Care Section */}
      <section className="px-margin md:px-margin-tablet lg:px-margin-desktop mb-space-xl flex flex-col gap-space-md max-w-6xl w-full mx-auto">
        <div className="flex items-center gap-space-xs">
          <span className="w-6 h-[1px] bg-primary" />
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">
            Clinical Philosophy
          </span>
        </div>
        <h3 className="font-headline-sm text-headline-sm text-on-surface leading-tight">
          Gentle Structural Realignment for Unhindered Neural Transmission
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Spinal health forms the physical axis of systemic vitality. In our serene wellness
          sanctuary, licensed chiropractic specialists employ subtle, targeted biomechanical
          adjustments to alleviate subluxations—micro-misalignments of the vertebral column that
          restrict peripheral nerve pathways, impede microcirculation, and cause chronic muscular
          compensation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm md:gap-space-md mt-1">
          {CHIROPRACTIC_PHILOSOPHY.map((item) => (
            <div
              key={item.title}
              className="bg-surface-container rounded-xl p-space-md flex gap-space-sm items-start"
            >
              <div className="w-9 h-9 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm shrink-0">
                <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
              </div>
              <div className="flex flex-col">
                <h4 className="font-title-md text-title-md text-on-surface">{item.title}</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative w-full rounded-xl overflow-hidden shadow-sm mt-space-xs">
          <img
            alt="High quality calming aesthetic view of an ergonomic chiropractic drop table in an organic luxury treatment room surrounded by indoor botanical olive trees, beige limestone walls, and warm golden lighting."
            className="w-full h-44 md:h-64 object-cover"
            src={CHIROPRACTIC_IMAGES.suites}
          />
          <div className="absolute bottom-2 left-3 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-sm">
            <span className="font-label-sm text-label-sm text-on-surface font-medium">
              Bespoke Decompression Suites • 100% Private
            </span>
          </div>
        </div>
      </section>

      {/* Interactive Spine Biomechanics Visualizer */}
      <SpinalHarmonyTracker />

      {/* Our Services Section */}
      <section className="px-margin md:px-margin-tablet lg:px-margin-desktop mb-space-xl flex flex-col gap-space-md max-w-6xl w-full mx-auto">
        <div className="flex flex-col gap-space-xs">
          <div className="flex items-center gap-space-xs">
            <span className="w-6 h-[1px] bg-primary" />
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">
              Specialized Modalities
            </span>
          </div>
          <h3 className="font-headline-sm text-headline-sm text-on-surface">
            Our Clinical Protocols
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Each procedure is custom-titrated following comprehensive physical palpation and digital
            spinal screening.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm md:gap-space-md">
          {CHIROPRACTIC_PROTOCOLS.map((protocol) => (
            <div
              key={protocol.title}
              className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm transition-all"
            >
              <div className="flex items-start gap-space-sm">
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-[20px]">{protocol.icon}</span>
                </div>
                <div>
                  <h4 className="font-title-md text-title-md text-on-surface">{protocol.title}</h4>
                  <span className="font-label-sm text-label-sm text-primary font-medium">
                    {protocol.category}
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5">
                    {protocol.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Holistic Care For Section */}
      <section className="px-margin md:px-margin-tablet lg:px-margin-desktop mb-space-xl flex flex-col gap-space-md max-w-6xl w-full mx-auto">
        <div className="flex flex-col gap-space-xs">
          <div className="flex items-center gap-space-xs">
            <span className="w-6 h-[1px] bg-primary" />
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">
              Targeted Indications
            </span>
          </div>
          <h3 className="font-headline-sm text-headline-sm text-on-surface">Holistic Care For</h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Our clinical team delivers non-invasive restorative management for complex conditions:
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-space-xs md:gap-space-sm">
          {CHIROPRACTIC_CONDITIONS.map((cond) => (
            <div
              key={cond.title}
              className="bg-surface-container p-space-sm rounded-xl flex flex-col justify-between"
            >
              <div className="w-7 h-7 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary mb-1">
                <span className="material-symbols-outlined text-[16px]">{cond.icon}</span>
              </div>
              <div>
                <h4 className="font-title-md text-title-md text-on-surface leading-tight">
                  {cond.title}
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                  {cond.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-space-md rounded-xl bg-surface-container-low shadow-sm flex items-center gap-space-sm">
          <span className="material-symbols-outlined material-symbols-filled text-primary text-[32px] shrink-0">
            verified_user
          </span>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Every therapy starts with digital thermal mapping and manual spinal motion palpation to
            ensure your absolute safety and clinical precision.
          </p>
        </div>
      </section>

      {/* Doctor Care Insight Section */}
      <section className="px-margin md:px-margin-tablet lg:px-margin-desktop mb-space-xl max-w-6xl w-full mx-auto">
        <div className="relative bg-surface-container-lowest rounded-xl p-space-md md:p-space-lg shadow-md overflow-hidden">
          <div className="flex items-center gap-space-sm mb-space-sm">
            <img
              alt="Portrait of senior clinical chiropractor in organic linen medical coat smiling gently in front of natural daylight with clean healthcare sanctuary background."
              className="w-14 h-14 rounded-full object-cover shadow-md"
              src={CHIROPRACTIC_IMAGES.doctor}
            />
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                Sanctuary Lead Specialist
              </span>
              <h4 className="font-title-md text-title-md text-on-surface font-semibold">
                Dr. Julian Vance, D.C.
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Doctor of Chiropractic, 16+ Years Experience
              </p>
            </div>
          </div>

          <blockquote className="font-body-md text-body-md text-on-surface italic bg-surface-container-low p-space-sm rounded-lg mb-space-sm">
            &quot;The body possesses an innate, continuous impulse toward self-healing. When we
            relieve mechanical compression on the spinal cord, natural vitality seamlessly
            cascades.&quot;
          </blockquote>

          <div className="flex items-center justify-between text-on-surface-variant font-label-md text-label-md">
            <span>Board Certified Chiropractic Orthopedist</span>
            <span className="text-primary font-bold">Healers Enclave</span>
          </div>
        </div>
      </section>

      {/* Book Online Consultation CTA Banner */}
      <section className="px-margin md:px-margin-tablet lg:px-margin-desktop mb-space-xl max-w-6xl w-full mx-auto">
        <div className="bg-inverse-surface text-inverse-on-surface rounded-xl p-space-md md:p-space-lg shadow-xl flex flex-col gap-space-md relative overflow-hidden">
          <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-primary/20 blur-3xl pointer-events-none" />

          <div className="flex items-start justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#E5C062]/20 text-[#F3DC96] font-label-sm text-label-sm uppercase mb-space-xs">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                Accepting New Appointments
              </div>
              <h3 className="font-headline-sm text-headline-sm text-surface-bright">
                Experience Spinal Renewal
              </h3>
            </div>
          </div>

          <div className="bg-surface-container-highest/10 rounded-lg p-space-sm flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#E5C062] text-[20px]">
                calendar_clock
              </span>
              <span className="font-label-md text-label-md text-surface-container-high">
                Consultation Hours:
              </span>
            </div>
            <span className="font-label-md text-label-md text-[#F3DC96] font-semibold">
              Mon – Sat | 10:00 AM – 6:00 PM
            </span>
          </div>

          <p className="font-body-sm text-body-sm text-surface-dim">
            Begin with an in-depth 45-minute spinal diagnostic assessment, thermal scan, and
            customized manual adjustment protocol.
          </p>

          <div className="flex flex-col md:flex-row gap-space-xs mt-1">
            <button
              className="w-full py-3.5 px-space-md rounded-lg font-label-lg text-label-lg font-semibold tracking-wide text-on-secondary-fixed bg-gradient-to-r from-[#F3DC96] via-[#E5C062] to-[#B8963E] shadow-[0_8px_20px_rgba(184,150,62,0.3)] hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
              onClick={openConsultationBooking}
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">event_available</span>
              Schedule Spinal Consultation
            </button>

            <a
              className="w-full py-3.5 px-space-md rounded-lg font-label-lg text-label-lg font-medium text-surface-bright bg-surface-container-highest/20 hover:bg-surface-container-highest/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              href="https://wa.me/18004325377?text=Hello%20Healers%20Sanctuary,%20I%20would%20like%20to%20inquire%20about%20a%20Chiropractic%20Care%20consultation."
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[20px] text-[#25D366]">chat</span>
              Consult on WhatsApp
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-center text-surface-dim font-label-sm text-label-sm pt-1">
            <span className="material-symbols-outlined text-[15px] text-[#E5C062]">lock</span>
            Strictly confidential • No surgical procedures • Direct insurance receipts provided
          </div>
        </div>
      </section>

      <ToastNotification
        icon="calendar_month"
        message="A concierge coordinator is matching you with Dr. Vance for this week's schedule."
        onClose={() => setToastVisible(false)}
        title="Spinal Consultation Selected"
        visible={toastVisible}
      />
    </PageLayout>
  );
}
