import { useCallback, useRef, useState } from "react";

export const useInputArray = () => {
  const [text, setText] = useState("");
  const [array, setArray] = useState([]);
  const textRef = useRef();

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("Please write within 5 characters");
      setText("");
      textRef.current.focus();
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.includes(text)) {
        alert("The word has already existed.");
        return prevArray;
      }

      if (text.trim() === "") {
        return prevArray;
      }

      return [...prevArray, text];
    });

    setText("");
    textRef.current.focus();
  }, [text]);

  return { text, array, textRef, handleChange, handleAdd };
};
