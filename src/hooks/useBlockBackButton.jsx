import { useEffect, useState } from "react";
import { useBlocker, useNavigate } from "react-router";

export function useBlockBackButton(targetUrl = "/") {
  const navigate = useNavigate();
  const [isAllowedToLeave, setIsAllowedToLeave] = useState(false);

  const blocker = useBlocker(
    ({ currentLocation, nextLocation }) =>
      !isAllowedToLeave && currentLocation.pathname !== nextLocation.pathname,
  );

  useEffect(() => {
    if (blocker.state === "blocked") {
      blocker.reset();
    }
  }, [blocker]);

  const allowNavigation = () => {
    setIsAllowedToLeave(true);

    setTimeout(() => {
      navigate(targetUrl, { replace: true });
    }, 0);
  };

  return allowNavigation;
}
