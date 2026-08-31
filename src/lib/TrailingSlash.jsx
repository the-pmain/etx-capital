import { Navigate, useLocation } from "react-router-dom";

export function TrailingSlash({ children }) {
  const { pathname, search, hash } = useLocation();
  if (pathname !== "/" && !pathname.endsWith("/")) {
    return <Navigate to={`${pathname}/${search}${hash}`} replace />;
  }
  return children;
}
