import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollToTopProps } from "../../Interfaces/interface";

function ScrollTop({ children }: ScrollToTopProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(100, 100);
  }, [pathname]);
  return <>{children}</>;
}

export default ScrollTop;
