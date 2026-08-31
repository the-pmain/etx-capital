import { Link } from "react-router-dom";

const sizes = {
  sm: "h-11 px-5 text-sm",
  md: "h-13 px-7 text-base",
};

const variants = {
  gold: "btn-gold",
  outline: "border border-hairline text-ink hover:border-gold hover:text-gold",
};

export function Button({
  as = "button",
  to,
  href,
  variant = "gold",
  size = "sm",
  className = "",
  children,
  ...props
}) {
  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-lg font-display font-semibold tracking-[0.01em]",
    "transition-[color,background-color,border-color,transform] duration-200",
    "active:scale-[0.98] active:duration-[120ms] motion-reduce:active:scale-100",
    "disabled:cursor-not-allowed disabled:opacity-55 disabled:active:scale-100",
    sizes[size],
    variants[variant],
    className,
  ].join(" ");

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  const Tag = as;
  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
}
