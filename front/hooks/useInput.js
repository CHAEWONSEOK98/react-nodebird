import { useState, useCallback } from "react";

export default (initialValue = null) => {
  const [value, setVaule] = useState(initialValue);
  const handler = useCallback((e) => {
    setVaule(e.target.value);
  }, []);
  return [value, handler];
};
