import { useEffect, useState } from "react";
import CardJoker from "../CardJoker";
import Card from "../Card";
import Button from "../Button";

function CardWrapper() {
  const [card, setCard] = useState([]);
  const [able, setAble] = useState(false);

  useEffect(() => {
    shuffle;
  });

  async function shuffle() {
    const res = await fetch(
      "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    );
    const data = await res.json();
    cardImage(data.deck_id);
  }

  async function cardImage(id) {
    setAble(true);
    try {
      const res = await fetch(
        `https://deckofcardsapi.com/api/deck/${id}/draw/?count=1`
      );
      const data = await res.json();
      setCard([...card, { img: data.cards[0].image, deg: deg() }]);
    } catch (error) {
      console.log(error);
    } finally {
      setAble(false);
    }
  }

  function deg() {
    return card.length % 2 == 1 ? card.length * 10 : card.length * -10;
  }

  return (
    <div>
      <div
        style={{
          backgroundColor: "green",
          height: "100vh",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "40px",
          }}
        >
          <Button able={able} shuffle={shuffle} />

          <div
            style={{
              position: "relative",
              left: -113,
            }}
          >
            {console.log(card)}
            <CardJoker />
            {card?.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardWrapper;
