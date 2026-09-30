/**
 * App.jsx — root router with page-transition fade between routes.
 * Uses a CSS class toggle so no extra library is needed.
 *
 * BrowserRouter (not HashRouter) so URLs read /web and /video instead of
 * /#/web. Direct hits on those paths are handled by the SPA rewrite in
 * vercel.json.
 */
import { useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Landing       from "./pages/Landing";
import PortfolioPage from "./pages/PortfolioPage";
import NotFound      from "./components/NotFound";

/* Adds a brief fade-out / fade-in between route changes */
function PageTransition({ children }) {
  const location   = useLocation();
  const [show, setShow] = useState(true);
  const prevPath   = useRef(location.pathname);

  useEffect(() => {
    if (prevPath.current === location.pathname) return;
    prevPath.current = location.pathname;

    // Fade out → scroll top → fade in
    setShow(false);
    const t = setTimeout(() => {
      window.scrollTo(0, 0);
      setShow(true);
    }, 220);
    return () => clearTimeout(t);
  }, [location.pathname]);

  return (
    <div
      style={{
        opacity:    show ? 1 : 0,
        transition: "opacity 0.22s ease",
        willChange: "opacity",
      }}
    >
      {children}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <PageTransition>
        <Routes>
          <Route path="/"      element={<Landing />} />
          <Route path="/web"   element={<PortfolioPage modeKey="web" />} />
          <Route path="/video" element={<PortfolioPage modeKey="video" />} />
          <Route path="*"      element={<NotFound />} />
        </Routes>
      </PageTransition>
    </BrowserRouter>
  );
}
