import React, { useState, useCallback, useEffect } from "react";
import debounce from "lodash.debounce";
import "./SearchInput.css";

export default function SearchInput({ requests, placeholder, selectedWord }) {
  
    const [inputValue, setInputValue] = useState(selectedWord);

    useEffect(() => {
        setInputValue(selectedWord);
    }, [selectedWord])

  const debouncedSave = useCallback(
    debounce((newValue) => requests(newValue), 300),
    []
  );

  const updateValue = (newValue) => {
    setInputValue(newValue);
    debouncedSave(newValue);
  };

  return (
    <React.Fragment>
      <input
        value={inputValue}
        onChange={(input) => updateValue(input.target.value)}
        placeholder={placeholder}
      />
    </React.Fragment>
  );
}
