import { useState, type FormEvent } from 'react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  icon: string;
  nameLabel: string;
  namePlaceholder: string;
  focusLabel: string;
  focusOptions: string[];
  dateLabel: string;
  submitLabel: string;
  confirmationTitle?: string;
  confirmationMessage?: string;
  mode: 'inline-confirm' | 'toast';
  onSubmitToast?: () => void;
}

export function BookingModal({
  isOpen,
  onClose,
  title,
  subtitle,
  icon,
  nameLabel,
  namePlaceholder,
  focusLabel,
  focusOptions,
  dateLabel,
  submitLabel,
  confirmationTitle = 'Evaluation Scheduled',
  confirmationMessage = 'Your consultation inquiry has been relayed to our care team. A clinical coordinator will contact you shortly.',
  mode,
  onSubmitToast,
}: BookingModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [focus, setFocus] = useState(focusOptions[0] ?? '');
  const [date, setDate] = useState('');

  if (!isOpen) return null;

  const resetAndClose = () => {
    setSubmitted(false);
    setName('');
    setDate('');
    onClose();
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (mode === 'inline-confirm') {
      setSubmitted(true);
      setTimeout(() => {
        resetAndClose();
      }, 3200);
    } else {
      resetAndClose();
      onSubmitToast?.();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-inverse-surface/60 backdrop-blur-sm flex items-end md:items-center justify-center p-0 md:p-4 transition-opacity"
      onClick={resetAndClose}
    >
      <div
        className="bg-surface-container-lowest w-full max-w-lg rounded-t-2xl md:rounded-2xl p-space-lg shadow-2xl flex flex-col gap-space-md"
        onClick={(e) => e.stopPropagation()}
      >
        {submitted ? (
          <div className="py-space-md flex flex-col items-center text-center gap-space-sm">
            <div className="w-14 h-14 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed mb-1 shadow-sm">
              <span className="material-symbols-outlined text-[32px]">check_circle</span>
            </div>
            <h4 className="font-headline-sm text-headline-sm text-on-surface">
              {confirmationTitle}
            </h4>
            <p className="font-body-md text-body-md text-on-surface-variant font-light">
              {confirmationMessage}
            </p>
            <button
              className="mt-4 px-6 py-2.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider cursor-pointer"
              onClick={resetAndClose}
              type="button"
            >
              Dismiss
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[24px]">{icon}</span>
                <h4 className="font-headline-sm text-headline-sm text-on-surface">{title}</h4>
              </div>
              <button
                aria-label="Close modal"
                className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:text-primary cursor-pointer"
                onClick={resetAndClose}
                type="button"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <p className="font-body-sm text-body-sm text-on-surface-variant font-light">
              {subtitle}
            </p>

            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-space-xs">
                <label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                  {nameLabel}
                </label>
                <input
                  className="w-full bg-surface px-3 py-2.5 rounded-lg text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-xs"
                  onChange={(e) => setName(e.target.value)}
                  placeholder={namePlaceholder}
                  required
                  type="text"
                  value={name}
                />
              </div>

              <div className="flex flex-col gap-space-xs">
                <label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                  {focusLabel}
                </label>
                <select
                  className="w-full bg-surface px-3 py-2.5 rounded-lg text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-xs"
                  onChange={(e) => setFocus(e.target.value)}
                  value={focus}
                >
                  {focusOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-space-xs">
                <label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                  {dateLabel}
                </label>
                <input
                  className="w-full bg-surface px-3 py-2.5 rounded-lg text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-xs"
                  onChange={(e) => setDate(e.target.value)}
                  required
                  type="date"
                  value={date}
                />
              </div>

              <button
                className="w-full py-3.5 mt-2 rounded-lg bg-gradient-to-r from-[#F3DC96] via-[#E5C062] to-[#B8963E] text-on-secondary-fixed font-title-md text-title-md font-semibold tracking-wide shadow-md hover:brightness-105 active:scale-95 transition-all text-center cursor-pointer"
                type="submit"
              >
                {submitLabel}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
