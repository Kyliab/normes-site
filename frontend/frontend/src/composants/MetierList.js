import React, { useEffect, useState } from "react";
import axios from "../api";

function MetierList({ onSelect }) {
  const [metiers, setMetiers] = useState([]);

  useEffect(() => {
    axios.get("/api/metiers").then((res) => setMetiers(res.data));
  }, []);

  return (
    <div>
      <h2>Liste des métiers :</h2>
      {metiers.map((m) => (
        <button
          key={m._id}
          style={{ margin: 5, padding: "8px 16px" }}
          onClick={() => onSelect(m)}
        >
          {m.nom}
        </button>
      ))}
    </div>
  );
}

export default MetierList;
