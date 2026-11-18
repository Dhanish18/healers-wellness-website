import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PageLayout } from '../components/layout/PageLayout';
import { CARE_PILLARS, HOME_STATS } from '../data/homeData';
import { BRAND_ASSETS } from '../data/navigation';

export function AboutPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <PageLayout logoSrc={BRAND_ASSETS.homeLogo} title="About Us" variant="detail" watermarkSrc={BRAND_ASSETS.homeWatermark}>
      <section className="px-margin md:px-margin-tablet lg:px-margin-desktop pt-space-xl pb-space-lg max-w-6xl w-full mx-auto">
        <div className="max-w-3xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">About Healers</span>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight mt-2">Whole-person care, guided by nature and grounded in clinical practice.</h2>
          <p className="font-body-md text-body-md text-on-surface-variant font-light leading-relaxed mt-space-md">Healers Integrated Wellness Center brings complementary therapies together in one welcoming sanctuary. We listen to each person’s goals, consider the whole picture, and shape care around individual needs.</p>
          <Link className="inline-flex items-center gap-2 mt-space-md py-3 px-5 rounded-lg bg-gradient-to-r from-[#F3DC96] via-[#E5C062] to-[#B8963E] text-on-secondary-fixed font-label-sm text-label-sm uppercase tracking-wider" to="/#treatment-modalities">Explore our services<span className="material-symbols-outlined text-[18px]">arrow_forward</span></Link>
        </div>
      </section>

      <section className="px-margin md:px-margin-tablet lg:px-margin-desktop py-space-lg max-w-6xl w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-space-lg items-center rounded-2xl bg-surface-container-lowest p-space-md md:p-space-lg shadow-sm">
          <div className="flex justify-center">
            <div className="w-52 h-52 md:w-64 md:h-64 rounded-full p-2 bg-white shadow-lg ring-1 ring-outline-variant/30">
              <img alt="Dr. Deepan Raj, Founder and CMO of Healers Integrated Wellness Center" className="w-full h-full rounded-full object-cover" src="/images/doctor.png" />
            </div>
          </div>
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">Meet our founder</span>
            <h2 className="font-headline-md text-headline-md text-on-surface mt-2">Dr. Deepan Raj</h2>
            <p className="font-title-md text-title-md text-primary font-semibold mt-1">Founder &amp; CMO</p>
            <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">Dr. Deepan Raj leads Healers Integrated Wellness Center with a focus on whole-person, integrative care.</p>
            <div className="flex flex-wrap gap-2 mt-space-md" aria-label="Qualifications">
              {['BNYS', 'M.Dip Chiro', 'M.Dip TCM', 'CCIM', 'CCOT', 'C.I.A.S.T.M.'].map((qualification) => <span className="rounded-lg border border-outline-variant bg-surface-container-low px-3 py-2 font-label-sm text-label-sm text-on-surface font-semibold" key={qualification}>{qualification}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="px-margin md:px-margin-tablet lg:px-margin-desktop py-space-md max-w-6xl w-full mx-auto">
        <div className="grid grid-cols-3 gap-2 rounded-xl bg-surface-container-lowest shadow-sm p-space-md text-center">
          {HOME_STATS.map((stat) => <div className="flex flex-col gap-1" key={stat.label}><span className="font-headline-sm text-headline-sm text-primary font-semibold">{stat.value}</span><span className="font-label-sm text-[10px] uppercase tracking-wider text-on-surface-variant">{stat.label}</span></div>)}
        </div>
      </section>

      <section className="px-margin md:px-margin-tablet lg:px-margin-desktop py-space-lg max-w-6xl w-full mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-space-md"><span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">How we care</span><h2 className="font-headline-md text-headline-md text-on-surface mt-1">Principles that guide us</h2><p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Care begins with understanding the person, not just the symptoms.</p></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-sm md:gap-space-md">
          {CARE_PILLARS.map((pillar) => <article className="bg-surface-container-low rounded-xl p-space-md flex flex-col gap-2 shadow-sm" key={pillar.title}><div className={`w-10 h-10 rounded-full ${pillar.iconBgClass} flex items-center justify-center ${pillar.iconTextClass}`}><span className="material-symbols-outlined text-[20px]">{pillar.icon}</span></div><h3 className="font-title-md text-title-md text-on-surface">{pillar.title}</h3><p className="font-body-sm text-body-sm text-on-surface-variant">{pillar.description}</p></article>)}
        </div>
      </section>
    </PageLayout>
  );
}


