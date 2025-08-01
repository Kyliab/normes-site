import React, { useState } from "react";
import axios from "../api";

function SubscribeForm({ metier }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [userId, setUserId] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      let user = await axios.post("/api/users", { email });
      setUserId(user.data._id);
      await axios.post(`/api/users/${user.data._id}/subscribe`, { metier: metier._id });
      setMessage("Abonnement réussi !");
    } catch (err) {
      setMessage("Erreur lors de l'abonnement.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        S'abonner à ce métier :
        <input
          type="email"
          value={email}
          required
          placeholder="Votre email"
          onChange={(e) => setEmail(e.target.value)}
          style={{ margin: "0 10px" }}
        />
      </label>
      <button type="submit">S'abonner</button>
      <div>{message}</div>
    </form>
  );
}

export default SubscribeForm;
