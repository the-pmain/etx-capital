import { Logo } from "@/components/ui/Logo.jsx";
import { Button } from "@/components/ui/Button.jsx";
import { Icon } from "@/components/ui/Icon.jsx";
import { LanguageSelect } from "@/components/ui/LanguageSelect.jsx";
import { messages } from "@/i18n/index.js";
import { navItems, withLocale } from "@/lib/paths.js";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export function Header({ locale }) {
  const t = messages(locale);
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.classList.toggle("overflow-hidden", open);
    return () => document.documentElement.classList.remove("overflow-hidden");
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const menu = menuRef.current;
    const focusable = [...menu.querySelectorAll('a[href], button:not([disabled])')];
    focusable[0]?.focus();

    const onKey = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || !focusable.length) return;
      const first = focusable[0];
      const last = focusable.at(-1);
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const home = withLocale(locale, "/");

  return (
    <>
      <a
        href="#main"
        className="bg-gold text-bg font-display sr-only rounded px-4 py-2 text-sm font-semibold focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100"
      >
        {t.skip}
      </a>
      <header className="border-hairline bg-bg/85 sticky top-0 z-50 border-b backdrop-blur-md">
        <div className="mx-auto flex h-18 max-w-page items-center gap-6 px-6">
          <Link to={home} className="text-ink hover:text-gold inline-flex min-h-11 shrink-0 items-center transition-colors" aria-label={t.nav.home}>
            <Logo className="h-6 w-auto" />
          </Link>
          <nav aria-label={t.nav.menu} className="ml-auto hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={withLocale(locale, item.path)}
                className={({ isActive }) =>
                  `text-sm transition-colors hover:text-gold ${isActive ? "text-ink" : "text-muted"}`
                }
              >
                {t.nav[item.id]}
              </NavLink>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-3 lg:ml-0">
            <LanguageSelect
              locale={locale}
              pathname={pathname}
              label={t.nav.language}
              compact
              className="hidden sm:block"
            />
            <Button to={`${withLocale(locale, "/careers/")}#recruiter-call`} className="hidden sm:inline-flex">
              {t.nav.discuss}
            </Button>
            <button
              ref={menuButtonRef}
              type="button"
              className="border-hairline text-ink hover:border-gold hover:text-gold inline-flex size-11 items-center justify-center rounded-lg border transition-colors lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? t.nav.menuClose : t.nav.menuOpen}
              onClick={() => setOpen((value) => !value)}
            >
              <Icon name={open ? "x" : "menu"} className="size-5" />
            </button>
          </div>
        </div>
      </header>
      {open ? (
        <div
          ref={menuRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label={t.nav.menu}
          className="border-hairline bg-bg/98 fixed inset-x-0 top-18 bottom-0 z-40 overflow-y-auto border-t backdrop-blur-xl lg:hidden"
        >
          <nav aria-label={t.nav.menu} className="mx-auto flex max-w-page flex-col gap-1 px-6 py-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={withLocale(locale, item.path)}
                className="font-display border-hairline border-b py-4 text-lg text-ink transition-colors hover:text-gold"
              >
                {t.nav[item.id]}
              </Link>
            ))}
            <div className="mt-6 flex items-center justify-between gap-4">
              <LanguageSelect locale={locale} pathname={pathname} label={t.nav.language} align="left" />
              <Button to={`${withLocale(locale, "/careers/")}#recruiter-call`} size="md">
                {t.nav.discuss}
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </>
  );
}

export function LangSwitch({ locale, pathname, className = "" }) {
  return (
    <LanguageSelect
      locale={locale}
      pathname={pathname}
      label={messages(locale).nav.language}
      align="left"
      className={className}
    />
  );
}
