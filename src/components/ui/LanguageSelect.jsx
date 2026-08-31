import { localeMeta, locales } from "@/config/site.js";
import { switchLocalePath } from "@/lib/paths.js";
import { useEffect, useId, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "./Icon.jsx";

export function LanguageSelect({
  locale,
  pathname,
  label,
  className = "",
  align = "right",
  compact = false,
}) {
  const navigate = useNavigate();
  const listboxId = useId();
  const rootRef = useRef(null);
  const optionRefs = useRef([]);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(() => locales.indexOf(locale));

  useEffect(() => {
    setOpen(false);
    setActiveIndex(locales.indexOf(locale));
  }, [locale, pathname]);

  useEffect(() => {
    if (!open) return;
    optionRefs.current[activeIndex]?.focus();

    const closeOnOutsideClick = (event) => {
      if (!rootRef.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener("pointerdown", closeOnOutsideClick);
    return () => document.removeEventListener("pointerdown", closeOnOutsideClick);
  }, [activeIndex, open]);

  const selectLocale = (nextLocale) => {
    setOpen(false);
    if (nextLocale !== locale) navigate(switchLocalePath(pathname, nextLocale));
  };

  const onOptionKeyDown = (event) => {
    let nextIndex = activeIndex;
    if (event.key === "ArrowDown") nextIndex = (activeIndex + 1) % locales.length;
    else if (event.key === "ArrowUp") nextIndex = (activeIndex - 1 + locales.length) % locales.length;
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = locales.length - 1;
    else if (event.key === "Escape") {
      setOpen(false);
      rootRef.current?.querySelector("button")?.focus();
      return;
    } else if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      selectLocale(locales[activeIndex]);
      return;
    } else return;

    event.preventDefault();
    setActiveIndex(nextIndex);
  };

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <button
        type="button"
        aria-label={label}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={open ? listboxId : undefined}
        onClick={() => setOpen((value) => !value)}
        className={`border-hairline bg-surface/70 text-ink hover:border-gold/70 hover:bg-surface focus-visible:border-gold focus-visible:ring-gold/25 font-display inline-flex min-h-11 items-center justify-between gap-2 rounded-xl border font-semibold shadow-sm backdrop-blur-md transition-all focus-visible:ring-4 focus-visible:outline-none ${
          compact ? "min-w-20 px-3 text-xs" : "min-w-40 px-4 text-sm"
        }`}
      >
        <span className="flex items-center gap-2">
          <span className="text-gold text-[0.68rem] tracking-[0.12em] uppercase">{locale}</span>
          {compact ? null : <span>{localeMeta[locale].nativeName}</span>}
        </span>
        <Icon
          name="chevron-down"
          className={`text-muted size-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open ? (
        <div
          id={listboxId}
          role="listbox"
          aria-label={label}
          aria-activedescendant={`${listboxId}-${locales[activeIndex]}`}
          className={`border-hairline bg-bg/98 absolute z-70 mt-2 min-w-56 overflow-hidden rounded-2xl border p-2 shadow-2xl shadow-black/35 backdrop-blur-xl ${
            align === "left" ? "left-0" : "right-0"
          }`}
        >
          {locales.map((code, index) => {
            const selected = code === locale;
            return (
              <button
                key={code}
                id={`${listboxId}-${code}`}
                ref={(node) => {
                  optionRefs.current[index] = node;
                }}
                type="button"
                role="option"
                aria-selected={selected}
                tabIndex={index === activeIndex ? 0 : -1}
                onFocus={() => setActiveIndex(index)}
                onKeyDown={onOptionKeyDown}
                onClick={() => selectLocale(code)}
                className={`font-display flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors focus:outline-none ${
                  selected
                    ? "bg-gold/10 text-gold"
                    : "text-ink hover:bg-surface-2 focus:bg-surface-2"
                }`}
              >
                <span className="text-muted w-6 text-[0.68rem] font-semibold tracking-[0.12em] uppercase">
                  {code}
                </span>
                <span className="flex-1 font-semibold">{localeMeta[code].nativeName}</span>
                {selected ? <Icon name="check" className="size-4" /> : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
