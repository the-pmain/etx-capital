import { SiteLayout } from "@/layouts/SiteLayout.jsx";
import { AboutPage } from "@/pages/AboutPage.jsx";
import { CareersPage } from "@/pages/CareersPage.jsx";
import { ContactsPage } from "@/pages/ContactsPage.jsx";
import { HomePage } from "@/pages/HomePage.jsx";
import { JobPage } from "@/pages/JobPage.jsx";
import { ConfidentialityPage, ConsentPage, PrivacyPage } from "@/pages/LegalPages.jsx";
import { WhyPage } from "@/pages/WhyPage.jsx";
import { defaultLocale, locales } from "@/config/site.js";
import { Navigate, Route, Routes } from "react-router-dom";

const pages = (
  <>
    <Route index element={<HomePage />} />
    <Route path="about" element={<AboutPage />} />
    <Route path="why-etx" element={<WhyPage />} />
    <Route path="careers" element={<CareersPage />} />
    <Route path="careers/:slug" element={<JobPage />} />
    <Route path="contacts" element={<ContactsPage />} />
    <Route path="privacy" element={<PrivacyPage />} />
    <Route path="confidentiality" element={<ConfidentialityPage />} />
    <Route path="consent/:purpose" element={<ConsentPage />} />
  </>
);

export function App() {
  return (
    <Routes>
      <Route element={<SiteLayout locale={defaultLocale} />}>{pages}</Route>
      {locales
        .filter((locale) => locale !== defaultLocale)
        .map((locale) => (
          <Route key={locale} path={locale} element={<SiteLayout locale={locale} />}>
            {pages}
          </Route>
        ))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
