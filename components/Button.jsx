const variants = {
  main: "h-9 w-[140px] text-base font-medium",
  details: "h-11 gap-3 px-4 text-base font-semibold tracking-normal",
};

export default function Button({ children, variant = "main", href = "#" }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-[7px] bg-accent/60 text-white transition hover:bg-accent ${variants[variant]}`}
    >
      {children}
      {variant === "details" && (
        <svg
          width="26"
          height="12"
          viewBox="0 0 26 12"
          fill="none"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M1 6H24M19 1.5L24 6L19 10.5" />
        </svg>
      )}
    </a>
  );
}