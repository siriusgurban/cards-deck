import React, { useEffect, useState } from "react";

function Card() {
  const [card, setCard] = useState([]);

  useEffect(() => {
    shuffle;
  }, []);

  async function shuffle() {
    const res = await fetch(
      "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    );
    const data = await res.json();
    cardImage(data.deck_id);

    console.log(data, "data");
  }

  async function cardImage(id) {
    const res = await fetch(
      `https://deckofcardsapi.com/api/deck/${id}/draw/?count=1`
    );
    const data = await res.json();
    console.log(data, "dataImage");
    setCard([data.cards[0].image, ...card]);
  }

  function deg(i) {
    return card.length % 2 == 1 ? i * 10 : i * -10;
  }

  return (
    <div>
      <div style={{ backgroundColor: "green", height: "100vh" }}>
        <div className="flex justify-center">
          <button
            style={{
              padding: 10 + "px",
              borderRadius: 20 + "px",
              marginTop: 20 + "px",
            }}
            onClick={shuffle}
          >
            Draw
          </button>
        </div>
        <div>
          {console.log(card, "card")}
          {card?.reverse()?.map((item, index) => {
            return (
              <div
                key={index}
                className={{
                  position: "relative",
                  transform: `rotate(${deg(index)}${"deg"})`,
                }}
              >
                <img
                  style={{
                    position: "absolute",
                  }}
                  src={item}
                  alt="card"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Card;
