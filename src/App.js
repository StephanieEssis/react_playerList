import React from "react";
import PlayersList from "./playersList";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center", margin: "20px" }}>Cartes de joueurs FIFA</h1>
      <PlayersList />
    </div>
  );
}

export default App;
