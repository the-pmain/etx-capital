import { Button } from "@/components/ui/Button.jsx";
import { site } from "@/config/site.js";
import { messages } from "@/i18n/index.js";
import { routes, withLocale } from "@/lib/paths.js";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function CookieNotice({ locale }) {
  const t = messages(locale);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      setVisible(window.localStorage.getItem(site.noticeStorageKey) !== "1");
    } catch {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label={t.cookie.label}
      className="border-hairline bg-surface/95 fixed inset-x-4 bottom-4 z-60 mx-auto max-w-3xl rounded-xl border p-5 backdrop-blur-md sm:inset-x-6"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-muted text-sm leading-relaxed">
          {t.cookie.text}{" "}
          <Link
            to={withLocale(locale, routes.confidentiality)}
            className="text-gold hover:text-gold-soft underline underline-offset-2"
          >
            {t.cookie.more}
          </Link>
        </p>
        <Button
          className="shrink-0"
          onClick={() => {
            setVisible(false);
            try {
              window.localStorage.setItem(site.noticeStorageKey, "1");
            } catch {
              /* ignore */
            }
          }}
        >
          {t.cookie.accept}
        </Button>
      </div>
    </div>
  );
}
