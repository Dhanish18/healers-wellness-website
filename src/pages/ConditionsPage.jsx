import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PageLayout } from '../components/layout/PageLayout';
import { BROCHURE_CONDITIONS, BROCHURE_SERVICES } from '../data/brochureData';
import { BRAND_ASSETS } from '../data/navigation';

export function ConditionsPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <PageLayout logoSrc={BRAND_ASSETS.homeLogo} title="What We Treat" variant="detail" watermarkSrc={BRAND_ASSETS.homeWatermark}>
      <section className="px-margin md:px-margin-tablet lg:px-margin-desktop pt-space-xl pb-space-lg max-w-6xl w-full mx-auto">
        <div className="max-w-3xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">Care areas</span>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight mt-2">What our team can discuss with you</h2>
          <p className="font-body-md text-body-md text-on-surface-variant font-light leading-relaxed mt-space-md">Our team offers consultations and complementary care across a range of health concerns. The right approach depends on your individual needs and assessment.</p>
        </div>
      </section>

      <section aria-label="Conditions" className="px-margin md:px-margin-tablet lg:px-margin-desktop pb-space-lg max-w-6xl w-full mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space-sm md:gap-space-md">
          {BROCHURE_CONDITIONS.map((condition) => (
            <article className="flex items-center gap-space-sm rounded-xl bg-surface-container-lowest p-space-md shadow-sm" key={condition}>
              <span className="w-9 h-9 rounded-lg bg-primary-fixed text-on-primary-fixed flex items-center justify-center shrink-0"><span aria-hidden="true" className="material-symbols-outlined text-[20px]">health_and_safety</span></span>
              <h3 className="font-title-md text-title-md text-on-surface">{condition}</h3>
            </article>
          ))}
        </div>
        <p className="font-body-sm text-body-sm text-outline mt-space-md">These services are complementary and do not replace medical diagnosis or treatment. Please consult your medical provider for health concerns.</p>
      </section>

      <section className="px-margin md:px-margin-tablet lg:px-margin-desktop py-space-lg max-w-6xl w-full mx-auto">
        <div className="mb-space-md">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">From our brochure</span>
          <h2 className="font-headline-md text-headline-md text-on-surface mt-1">Services available at the center</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-sm md:gap-space-md">
          {BROCHURE_SERVICES.map((service) => (
            <article className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm" key={service.title}>
              <div className="flex items-center gap-2 text-primary"><span aria-hidden="true" className="material-symbols-outlined">{service.icon}</span><h3 className="font-title-md text-title-md text-on-surface">{service.title}</h3></div>
              <ul className="mt-space-sm flex flex-col gap-2">
                {service.items.map((item) => <li className="font-body-sm text-body-sm text-on-surface-variant flex items-start gap-2" key={item}><span className="text-primary" aria-hidden="true">•</span><span>{item}</span></li>)}
              </ul>
              <Link className="inline-flex items-center gap-1 mt-space-md font-label-sm text-label-sm uppercase tracking-wider text-primary hover:underline" to={service.route}>Explore service<span aria-hidden="true" className="material-symbols-outlined text-[16px]">arrow_forward</span></Link>
            </article>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
