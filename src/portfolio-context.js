import { createContext, useContext } from "react";

export const PortfolioContext = createContext(null);

export function usePortfolio() {
  const mode = useContext(PortfolioContext);
  if (!mode) throw new Error("usePortfolio must be used inside PortfolioProvider");
  return mode;
}
