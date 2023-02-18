import { useEffect } from "react";

export const useBg = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "skyblue";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
};
