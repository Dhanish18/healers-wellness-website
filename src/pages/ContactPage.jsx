import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PageLayout } from '../components/layout/PageLayout';
import { BRAND_ASSETS } from '../data/navigation';

const contactOptions = [
  { icon: 'call', label: 'Call our team', value: '+91 87542 13685', href: 'tel:+918754213685' },
  { icon: 'mail', label: 'Email us', value: 'adpr22101999@gmail.com', href: 'mailto:adpr22101999@gmail.com' },
  { icon: 'chat', label: 'WhatsApp', value: 'Message our care team', href: 'https://wa.me/918754213685' },
];

export function ContactPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <PageLayout logoSrc={BRAND_ASSETS.homeLogo} title="Contact" variant="detail" watermarkSrc={BRAND_ASSETS.homeWatermark}>
      <section className="px-margin md:px-margin-tablet lg:px-margin-desktop pt-space-xl pb-space-lg max-w-6xl w-full mx-auto">
        <div className="max-w-3xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">We’re here to help</span>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight mt-2">Let’s find the right next step for your wellbeing.</h2>
          <p className="font-body-md text-body-md text-on-surface-variant font-light leading-relaxed mt-space-md">Reach out to our care team with a question or to arrange an appointment. We’ll help you find the right service and schedule.</p>
        </div>
      </section>

      <section className="px-margin md:px-margin-tablet lg:px-margin-desktop pb-space-lg max-w-6xl w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm md:gap-space-md">
          {contactOptions.map((option) => <a className="bg-surface-container-lowest rounded-xl p-space-md md:p-space-lg shadow-sm flex items-start gap-space-sm hover:shadow-md transition-shadow" href={option.href} key={option.label} rel={option.href.startsWith('https:') ? 'noopener noreferrer' : undefined} target={option.href.startsWith('https:') ? '_blank' : undefined}><span className="w-10 h-10 rounded-lg bg-primary-fixed flex items-center justify-center text-on-primary-fixed shrink-0"><span className="material-symbols-outlined">{option.icon}</span></span><span className="min-w-0"><span className="block font-label-sm text-label-sm uppercase tracking-wider text-outline">{option.label}</span><span className="block font-title-md text-title-md text-on-surface break-words mt-1">{option.value}</span></span></a>)}
        </div>
      </section>

      <section className="px-margin md:px-margin-tablet lg:px-margin-desktop pb-space-lg max-w-6xl w-full mx-auto">
        <div className="rounded-2xl bg-primary-fixed/50 p-space-md md:p-space-lg flex flex-col sm:flex-row sm:items-center sm:justify-between gap-space-md">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">New patients</span>
            <h2 className="font-headline-sm text-headline-sm text-on-surface mt-1">Free first online consultation</h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Message our team to ask about the introductory online consultation.</p>
          </div>
          <a className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#F3DC96] via-[#E5C062] to-[#B8963E] px-5 py-3 font-label-sm text-label-sm uppercase tracking-wider text-on-secondary-fixed shrink-0" href="https://wa.me/918754213685?text=Hello%2C%20I%27d%20like%20to%20ask%20about%20the%20free%20first%20online%20consultation." target="_blank" rel="noopener noreferrer"><span aria-hidden="true" className="material-symbols-outlined text-[18px]">chat</span>Ask on WhatsApp</a>
        </div>
      </section>

      <section className="px-margin md:px-margin-tablet lg:px-margin-desktop py-space-md max-w-6xl w-full mx-auto">
        <div className="rounded-2xl bg-surface-container-lowest p-space-md md:p-space-lg shadow-sm grid grid-cols-1 md:grid-cols-2 gap-space-lg">
          <div><span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">Visit the sanctuary</span><h3 className="font-headline-sm text-headline-sm text-on-surface mt-2">Healers Integrated Wellness Center</h3><p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">4/429A, Golden Avenue Street, Thabaal Thanthi Nagar, P&T Nagar Ext, Iyer Bungalow, Madurai, TN 625017</p><p className="font-body-sm text-body-sm text-outline mt-1">Landmark: Near Parktown Bus Stop</p><a className="inline-flex items-center gap-1 mt-space-md font-label-sm text-label-sm uppercase tracking-wider text-primary hover:underline" href="https://maps.app.goo.gl/EnaWnaagmvPucR9K6" target="_blank" rel="noopener noreferrer"><span className="material-symbols-outlined text-[18px]">directions</span>Get directions</a></div>
          <div className="rounded-xl bg-surface-container-low p-space-md md:p-space-lg"><span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">Opening hours</span><p className="font-title-md text-title-md text-on-surface mt-2">Monday – Friday &amp; Sunday</p><p className="font-body-md text-body-md text-on-surface-variant">9:30 AM – 1:30 PM<br />4:00 PM – 8:00 PM</p><p className="font-body-sm text-body-sm text-outline mt-2">Saturday: Closed</p><Link className="inline-flex items-center gap-1 mt-space-md font-label-sm text-label-sm uppercase tracking-wider text-primary hover:underline" to="/#treatment-modalities">Browse our services<span className="material-symbols-outlined text-[18px]">arrow_forward</span></Link></div>
        </div>
      </section>

      <section className="px-margin md:px-margin-tablet lg:px-margin-desktop py-space-md pb-space-xl max-w-6xl w-full mx-auto">
        <div className="flex items-end justify-between gap-4 mb-space-sm">
          <div><span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">Find us</span><h3 className="font-headline-sm text-headline-sm text-on-surface mt-1">Map preview</h3></div>
          <a className="inline-flex items-center gap-1 font-label-sm text-label-sm uppercase tracking-wider text-primary hover:underline shrink-0" href="https://maps.app.goo.gl/EnaWnaagmvPucR9K6" target="_blank" rel="noopener noreferrer"><span className="material-symbols-outlined text-[18px]">open_in_new</span>Open map</a>
        </div>
        <div className="h-64 md:h-80 overflow-hidden rounded-2xl bg-surface-container shadow-sm ring-1 ring-outline-variant/40">
          <iframe className="w-full h-full border-0" title="Map showing the Healers Integrated Wellness Center location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.5913995313113!2d78.127014!3d9.967912799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c7000976f21d%3A0x6344fa290944a412!2sHealers%20Integrated%20Wellness%20Centre!5e0!3m2!1sen!2sin!4v1794974051637!5m2!1sen!2sin" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
        </div>
      </section>
    </PageLayout>
  );
}









