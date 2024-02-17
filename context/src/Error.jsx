import Em from "./items/Maker";
import "./error.css";
import { useState, useEffect } from "react";

export const Error = () => {
  const [cards, setCards] = useState([]);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  
  const removeItem = (id) => {
    setCards(cards.filter((item) => item.id !== id));
  };

  const AddCards = () => {
    const newId =
      cards.length > 0 ? Math.max(...cards.map((item) => item.id)) + 1 : 1;
    const newCard = { id: newId, name: name, url: url };
    setCards([...cards, newCard]);
    setName(""); // Reset the input field for name
    setUrl(""); // Reset the input field for url
  };

  return (
    <>
      <div className="form-container">
        <input
          type="text"
          placeholder="Name"
          value={name}
          style={{ color: 'black' }}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={url}
          style={{ color: 'black' }}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button onClick={AddCards}>Create</button>
      </div>
      <div className="main_cards">
        {cards.map((item) => (
          <Em
            key={item.id}
            name={item.name}
            imageUrl={item.url}
            id={item.id}
            onRemove={() => removeItem(item.id)}
          />
        ))}
      </div>
    </>
  );
};
