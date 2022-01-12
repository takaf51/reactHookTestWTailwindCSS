// Dependencies
import React, { useState } from "react";
import "./tailwind.output.css";

const App = ({ value, onClick }) => {
  const [appState, toggleState] = useState({
    activeObject: null,
    objects: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]
  });

  function stateStyle() {
    return "w-96 h-96 bg-blue-500";
  }

  return (
    <div className="flex h-full flex-row flex-wrap justify-center justify-items-center">
      {appState.objects.map((element, index) => (
        <div key={index} className={stateStyle()}></div>
      ))}
    </div>
  );
};

export default App;
