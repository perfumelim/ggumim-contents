import React from "react";
import { Provider } from "jotai";
import Showcase from "./components/Showcase";

function App() {
  return (
    <div className="App">
      <Provider>
        <Showcase />
      </Provider>
    </div>
  );
}

export default App;
