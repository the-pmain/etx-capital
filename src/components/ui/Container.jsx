export function Container({ className = "", children }) {
  return <div className={`mx-auto max-w-page px-6 ${className}`}>{children}</div>;
}

export function Section({ className = "", children, ...props }) {
  return (
    <section className={`relative py-20 md:py-28 ${className}`} {...props}>
      {children}
    </section>
  );
}

export function Eyebrow({ children, className = "text-gold" }) {
  return (
    <p className={`font-display text-eyebrow font-semibold uppercase ${className}`}>{children}</p>
  );
}
