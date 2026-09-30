/**
 * NotFound — in-app 404 for unknown routes.
 *
 * App.jsx used to send every unmatched path to <Landing />, which meant
 * public/404.html was never reachable and a mistyped URL silently looked
 * like the homepage (bad for both users and SEO).
 */
import { Link } from "react-router-dom";
import { site, modesList } from "../config";
import Seo from "./Seo";
import Icon from "./Icon";

export default function NotFound() {
  return (
    <>
      <Seo
        title={`Page not found — ${site.seo.title}`}
        description="That page does not exist. Head back to the homepage or pick a service."
        path="/404"
      />

      <main className="notfound">
        <span className="notfound-code">404</span>
        <h1 className="notfound-title">
          This page <span className="gradient-text">does not exist</span>
        </h1>
        <p className="notfound-text">
          The link may be out of date, or the address might have a typo.
        </p>

        <div className="notfound-actions">
          <Link to="/" className="btn btn-primary">
            <Icon name="arrowRight" size={16} /> Back to home
          </Link>
          {modesList.map((m) => (
            <Link key={m.key} to={m.route} className="btn btn-ghost">
              {m.label}
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
