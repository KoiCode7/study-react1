import { useCallback, useMemo, useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(true);

  const doubleCount = useMemo(() => count * 2, [count]);

  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((prevCount) => prevCount + 1);
    }
  }, [count]);

  const handleDisplay = useCallback(() => {
    if (count > 3 && count < 6) {
      return;
    }
    setIsShow((prevIsShow) => !prevIsShow);
  }, [count]);

  return { count, isShow, doubleCount, handleClick, handleDisplay };
};
