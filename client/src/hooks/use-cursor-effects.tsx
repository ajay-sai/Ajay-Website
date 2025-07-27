import { useEffect } from "react";

export function useCursorEffects() {
  useEffect(() => {
    // Disabled custom cursor effects
    return () => {};
  }, []);
}
