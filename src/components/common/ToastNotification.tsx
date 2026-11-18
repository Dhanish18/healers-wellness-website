interface ToastNotificationProps {
  visible: boolean;
  icon: string;
  title?: string;
  message: string;
  onClose?: () => void;
}

export function ToastNotification({
  visible,
  icon,
  title,
  message,
  onClose,
}: ToastNotificationProps) {
  return (
    <div
      className={`fixed bottom-24 inset-x-4 max-w-md mx-auto z-50 transition-all duration-300 ${
        visible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-24 opacity-0 pointer-events-none'
      }`}
    >
      {title ? (
        <div className="bg-surface-container-lowest text-on-surface p-space-md rounded-xl shadow-2xl flex items-start gap-space-sm border-0 ring-1 ring-primary/20">
          <span className="material-symbols-outlined text-primary text-[28px] mt-0.5">{icon}</span>
          <div className="flex-1">
            <h5 className="font-title-md text-title-md font-semibold text-on-surface">{title}</h5>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">{message}</p>
          </div>
          {onClose && (
            <button
              aria-label="Close notification"
              className="text-on-surface-variant hover:text-on-surface p-1 cursor-pointer"
              onClick={onClose}
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          )}
        </div>
      ) : (
        <div className="bg-inverse-surface text-inverse-on-surface p-3 rounded-xl shadow-xl flex items-center gap-3">
          <span className="material-symbols-outlined text-[#E5C062] text-[22px]">{icon}</span>
          <span className="font-body-sm text-body-sm">{message}</span>
        </div>
      )}
    </div>
  );
}
