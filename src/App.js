import React, { useState, useEffect, Suspense } from "react";
import { getApiSuggestions } from "./util";
import SearchInput from "./components/SearchInput";
import ListItem from "./components/ListItem";

function App() {
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchWord, setSearchWord] = useState("");
  const [selectedWord, setSelectedWord] = useState("");

  const getSuggestions = async (word) => {
    setSearchWord(word);
    if (word.length > 3) {
      setLoading(true);
      setSelectedWord("");
      let response = await getApiSuggestions(word);
      setOptions(response);
      setLoading(false);
    } else {
      setOptions([]);
    }
  };

  const getSelectedWord = (word) => {
    setSelectedWord(word);
  };

  return (
    <>
      <header>Type As You Go Application</header>
      <main>
        <SearchInput
          requests={getSuggestions}
          placeholder="Search As You Go!"
          selectedWord={selectedWord.API}
        />
        {!selectedWord?.API ? 
          <ListItem
            loading={loading}
            options={options}
            searchWord={searchWord}
            onClickFunction={getSelectedWord}
          /> : JSON.stringify(selectedWord)
        }
          
      </main>
    </>
  );
}

export default App;
