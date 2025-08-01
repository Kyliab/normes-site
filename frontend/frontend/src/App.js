import React, { useState } from "react";
import MetierList from "./components/MetierList";
import NormeList from "./components/NormeList";
import SubscribeForm from "./components/SubscribeForm";

function App() {
  const [selectedMetier, setSelectedMetier] = useState(null);

  return (
    <div style={{ maxWidth: 700, margin: "auto", fontFamily: "Arial" }}>
      <h1>Portail des normes professionnelles</h1>
      {!selectedMetier ? (
        <MetierList onSelect={setSelectedMetier} />
      ) : (
        <div>
          <h2>Normes pour : {selectedMetier.nom}</h2>
          <NormeList metierId={selectedMetier._id} />
          <SubscribeForm metier={selectedMetier} />
          <button style={{ marginTop: 20 }} onClick={() => setSelectedMetier(null)}>
            Retour à la liste des métiers
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
