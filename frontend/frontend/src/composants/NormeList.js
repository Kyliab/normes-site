import React, { useEffect, useState } from "react";
import axios from "../api";

function NormeList({ metierId }) {
  const [normes, setNormes] = useState([]);

  useEffect(() => {
    axios.get(`/api/normes/metier/${metierId}`).then((res) => setNormes(res.data));
  }, [metierId]);

  return (
    <ul>
      {normes.map((n) => (
        <li key={n._id}>
          <strong>{n.titre}</strong>
          <br />
          {n.description}
          {n.url && (
            <span>
              {" "}
              <a href={n.url} target="_blank" rel="noopener noreferrer">
                Voir la norme
              </a>
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

export default NormeList;
