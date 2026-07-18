import { useState, useEffect } from "react";
import { useNavigate, useBlocker } from "react-router-dom";

export function useBlockBackButton(targetUrl = "/") {
  const navigate = useNavigate();
  const [isAllowedToLeave, setIsAllowedToLeave] = useState(false);

  // 1. Блокируем системную стрелку браузера
  const blocker = useBlocker(
    ({ currentLocation, nextLocation }) =>
      !isAllowedToLeave && currentLocation.pathname !== nextLocation.pathname,
  );

  // 2. Сбрасываем блокировку, чтобы визуально страница не дергалась
  useEffect(() => {
    if (blocker.state === "blocked") {
      blocker.reset();
    }
  }, [blocker]);

  // 3. Функция для кнопки
  const handleCustomBack = () => {
    setIsAllowedToLeave(true); // Открываем замок блокировщика

    // Выполняем переход с задержкой в следующем тике таймера,
    // чтобы React успел обновить стейт isAllowedToLeave
    setTimeout(() => {
      navigate(targetUrl, { replace: true });
    }, 0);
  };

  return handleCustomBack;
}
