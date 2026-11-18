import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PageLayout } from '../components/layout/PageLayout';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { BRAND_ASSETS } from '../data/navigation';
import SERVICE_PAGE_CONTENT from '../data/servicePages';

export function WellnessServicePage({ serviceKey }) {
  const service = SERVICE_PAGE_CONTENT[serviceKey];

  useEffect(() => { window.scrollTo(0, 0); }, [serviceKey]);

  if (!service) return null;

  return (
    <PageLayout logoSrc={BRAND_ASSETS.homeLogo} title={service.title} variant="detail" watermarkSrc={BRAND_ASSETS.homeWatermark}>
      <div className="flex flex-col w-full pb-12">
        <section className="relative px-margin md:px-margin-tablet lg:px-margin-desktop pt-space-lg pb-space-lg overflow-hidden max-w-6xl w-full mx-auto">
          <div className="absolute -top-16 -right-16 w-60 h-60 rounded-full bg-secondary-fixed/40 blur-3xl pointer-events-none" />
          <div className="flex flex-col gap-space-md relative">
            <Breadcrumbs currentPage={service.title} separatorType="slash" />
            <div className="rounded-2xl overflow-hidden bg-[#2f352b] text-white p-space-lg md:p-10 min-h-80 md:min-h-[26rem] flex flex-col justify-end relative shadow-lg">
              <img src={service.heroImage} alt={service.heroAlt} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
              <span className="material-symbols-outlined absolute right-8 top-8 text-[90px] md:text-[120px] text-white/30">{service.icon}</span>
              <div className="relative z-10">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-[#F3DC96] font-semibold">{service.eyebrow}</span>
                <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg max-w-3xl mt-2">{service.headline}</h2>
                <p className="font-body-md text-body-md text-white/90 max-w-3xl mt-space-sm">{service.intro}</p>
              </div>
            </div>
            {service.schedule && (
              <div className="flex items-center gap-space-sm rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
                <span className="w-10 h-10 rounded-lg bg-primary-fixed text-on-primary-fixed flex items-center justify-center shrink-0"><span aria-hidden="true" className="material-symbols-outlined">schedule</span></span>
                <div><span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-semibold">Yoga schedule</span><p className="font-title-md text-title-md text-on-surface">{service.schedule}</p></div>
              </div>
            )}
          </div>
        </section>

        <section className="px-margin md:px-margin-tablet lg:px-margin-desktop py-space-md max-w-6xl w-full mx-auto">
          <div className="rounded-2xl bg-surface-container-lowest shadow-sm p-space-md md:p-space-lg">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">Our approach</span>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mt-2">{service.approachTitle}</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm max-w-4xl">{service.approach}</p>
          </div>
        </section>

        <section className="px-margin md:px-margin-tablet lg:px-margin-desktop py-space-md max-w-6xl w-full mx-auto">
          <div className="mb-space-md"><span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">Care highlights</span><h3 className="font-headline-md text-headline-md text-on-surface mt-1">What to expect</h3></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm md:gap-space-md">
            {service.highlights.map((item) => <article className="bg-surface-container-lowest rounded-xl p-space-md md:p-space-lg shadow-sm" key={item.title}><span className="w-11 h-11 rounded-lg bg-primary-fixed flex items-center justify-center text-on-primary-fixed"><span className="material-symbols-outlined text-[22px]">{item.icon}</span></span><h4 className="font-title-md text-title-md text-on-surface mt-space-sm">{item.title}</h4><p className="font-body-sm text-body-sm text-on-surface-variant mt-1">{item.text}</p></article>)}
          </div>
        </section>

        <section className="px-margin md:px-margin-tablet lg:px-margin-desktop py-space-md max-w-6xl w-full mx-auto">
          <div className="rounded-2xl bg-surface-container-low p-space-md md:p-space-lg">
            <div className="mb-space-md"><span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">Your visit</span><h3 className="font-headline-md text-headline-md text-on-surface mt-1">A simple path to begin</h3></div>
            <ol className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
              {service.steps.map((step, index) => <li className="flex items-start gap-space-sm" key={step}><span className="w-8 h-8 rounded-full bg-secondary-fixed text-on-secondary-fixed font-semibold flex items-center justify-center shrink-0">{index + 1}</span><span className="font-body-sm text-body-sm text-on-surface-variant pt-1">{step}</span></li>)}
            </ol>
          </div>
        </section>

        <section className="px-margin md:px-margin-tablet lg:px-margin-desktop py-space-lg max-w-6xl w-full mx-auto">
          <div className="rounded-2xl bg-surface-container-lowest shadow-sm p-space-md md:p-space-lg flex flex-col sm:flex-row sm:items-center sm:justify-between gap-space-md">
            <div><h3 className="font-headline-sm text-headline-sm text-on-surface">Want to learn if this service is right for you?</h3><p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Contact our team to discuss your goals and arrange a consultation.</p></div>
            <Link className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-[#F3DC96] via-[#E5C062] to-[#B8963E] text-on-secondary-fixed font-label-sm text-label-sm uppercase tracking-wider shrink-0" to="/contact">Contact our team<span className="material-symbols-outlined text-[18px]">arrow_forward</span></Link>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}


