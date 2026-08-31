import { defaultLocale } from "@/config/site.js";
import { useOutletContext } from "react-router-dom";

export function useLocale() {
  const ctx = useOutletContext();
  return ctx?.locale || defaultLocale;
}
