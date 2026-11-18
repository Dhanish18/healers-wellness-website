export function ConsultationOffer() {
  return (
    <section aria-labelledby="free-consultation-heading" className="px-margin md:px-margin-tablet lg:px-margin-desktop py-space-lg max-w-7xl w-full mx-auto">
      <div className="rounded-2xl bg-primary-fixed/50 p-space-md md:p-space-lg flex flex-col sm:flex-row sm:items-center sm:justify-between gap-space-md">
        <div>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">New patients</span>
          <h2 className="font-headline-sm text-headline-sm text-on-surface mt-1" id="free-consultation-heading">Free first online consultation</h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Message our team to ask about the introductory online consultation.</p>
        </div>
        <a className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#F3DC96] via-[#E5C062] to-[#B8963E] px-5 py-3 font-label-sm text-label-sm uppercase tracking-wider text-on-secondary-fixed shrink-0" href="https://wa.me/918754213685?text=Hello%2C%20I%27d%20like%20to%20ask%20about%20the%20free%20first%20online%20consultation." target="_blank" rel="noopener noreferrer">
          <span aria-hidden="true" className="material-symbols-outlined text-[18px]">chat</span>Ask on WhatsApp
        </a>
      </div>
    </section>
  );
}
