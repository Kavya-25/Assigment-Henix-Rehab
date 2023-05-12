import React, { useState} from "react";
import axios from "axios";
import './App.css'

function App() {
  const [fact, setFact] = useState("");
  const getData = () => {
    axios
      .get("https://catfact.ninja/fact")
      .then((res) => {
        setFact(res.data.fact);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="facts">
      {fact && <p className="factbox">{fact}</p>}
      <button onClick={getData}>Get New Fact</button>
    </div>
  );
}

export default App;
