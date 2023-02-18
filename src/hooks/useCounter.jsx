import { useCallback, useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(true);

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

  return { count, isShow, handleClick, handleDisplay };
};
