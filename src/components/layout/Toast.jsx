import { Icon } from "@/components/ui/Icon.jsx";
import { messages } from "@/i18n/index.js";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const ToastContext = createContext({ show: () => {} });

export function useToast() {
  return useContext(ToastContext);
}

export function ToastProvider({ locale, children }) {
  const t = messages(locale);
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const hide = useCallback(() => setOpen(false), []);

  const show = useCallback((message) => {
    setText(message);
    setOpen(true);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const id = window.setTimeout(hide, 7000);
    return () => window.clearTimeout(id);
  }, [hide, open, text]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") hide();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [hide]);

  const value = useMemo(() => ({ show, pausedMessage: t.toast.paused }), [show, t.toast.paused]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      {open ? (
        <div
          role="status"
          aria-live="polite"
          aria-label={t.toast.label}
          className="border-hairline bg-surface/95 fixed inset-x-4 bottom-4 z-70 mx-auto max-w-md rounded-xl border p-5 backdrop-blur-md sm:inset-x-auto sm:right-6 sm:bottom-6"
        >
          <div className="flex items-start gap-4">
            <Icon name="info" className="text-gold mt-0.5 size-5 shrink-0" />
            <p className="text-ink text-sm leading-relaxed">{text}</p>
            <button
              type="button"
              aria-label={t.toast.close}
              className="text-muted hover:text-gold -mt-1.5 -mr-1.5 inline-flex size-11 shrink-0 items-center justify-center rounded-lg transition-colors"
              onClick={hide}
            >
              <Icon name="x" className="size-4.5" />
            </button>
          </div>
        </div>
      ) : null}
    </ToastContext.Provider>
  );
}
