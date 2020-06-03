import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createCard(emojipedia) {
  return (
    <Entry
      logo={emojipedia.emoji}
      name={emojipedia.name}
      explanation={emojipedia.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;
