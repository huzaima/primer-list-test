import React from "react";
import "./App.css";
import { List } from "./components/List";
import { useDictionary } from "./hooks/useDictionary";

function App() {
  const dictionary = useDictionary();
  return (
    <div className="app">
      <div className="header">
      <div>
        List of words
      </div>
      </div>
      <div className="content">
        <List items={dictionary} />
      </div>
    </div>
  );
}

export default App;
