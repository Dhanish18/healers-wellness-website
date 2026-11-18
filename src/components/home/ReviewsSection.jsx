const reviewLinks = [
  'https://maps.app.goo.gl/9yZ7fU8Mg8jNR5918',
  'https://maps.app.goo.gl/d3jniDWJN9GBQdae9',
  'https://maps.app.goo.gl/spsaeMvoBkXhUwfg9',
];

export function ReviewsSection() {
  return (
    <section aria-labelledby="patient-reviews-title" className="px-margin md:px-margin-tablet lg:px-margin-desktop py-space-lg max-w-7xl w-full mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-space-md">
        <div>
          <h2 className="font-headline-md text-headline-md text-on-surface" id="patient-reviews-title">What Our Patients Say</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1">Patient reviews on Google</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
        {reviewLinks.map((href, index) => (
          <a className="group min-h-44 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow p-space-md md:p-space-lg flex flex-col justify-between" href={href} key={href} target="_blank" rel="noopener noreferrer">
            <div>
              <span aria-hidden="true" className="font-bold text-lg bg-gradient-to-br from-blue-500 via-green-500 to-red-500 bg-clip-text text-transparent">G</span>
              <h3 className="font-title-md text-title-md text-on-surface mt-2">Google patient review {index + 1}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Open this patient review on Google Maps.</p>
            </div>
            <span className="inline-flex items-center gap-1 font-label-sm text-label-sm uppercase tracking-wider text-primary mt-space-md group-hover:underline">Read review<span aria-hidden="true" className="material-symbols-outlined text-[18px]">open_in_new</span></span>
          </a>
        ))}
      </div>
    </section>
  );
}
