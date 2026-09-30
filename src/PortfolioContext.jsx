import { PortfolioContext } from "./portfolio-context";
import { modes } from "./config";

export function PortfolioProvider({ modeKey, children }) {
  const mode = modes[modeKey] || modes.web;
  return (
    <PortfolioContext.Provider value={mode}>
      {children}
    </PortfolioContext.Provider>
  );
}
