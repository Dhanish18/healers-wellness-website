interface WatermarkBackdropProps {
  src: string;
}

export function WatermarkBackdrop({ src }: WatermarkBackdropProps) {
  return (
    <div className="fixed inset-0 pointer-events-none flex items-center justify-center z-0 overflow-hidden">
      <img
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none"
        src={src}
        style={{
          width: '320px',
          maxWidth: '80vw',
          height: 'auto',
          opacity: 0.16,
          mixBlendMode: 'multiply',
          filter: 'contrast(1.15)',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}
