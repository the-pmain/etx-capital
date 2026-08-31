import { CookieNotice } from "@/components/layout/CookieNotice.jsx";
import { Footer } from "@/components/layout/Footer.jsx";
import { Header } from "@/components/layout/Header.jsx";
import { ToastProvider } from "@/components/layout/Toast.jsx";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

function RouteScroll() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (hash) {
        document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView({ block: "start" });
      } else {
        window.scrollTo({ top: 0 });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [hash, pathname]);

  return null;
}

export function SiteLayout({ locale }) {
  return (
    <ToastProvider locale={locale}>
      <div className="flex min-h-dvh flex-col">
        <RouteScroll />
        <Header locale={locale} />
        <main id="main" className="flex-1">
          <Outlet context={{ locale }} />
        </main>
        <Footer locale={locale} />
        <CookieNotice locale={locale} />
      </div>
    </ToastProvider>
  );
}
