import jokercard from "../../assets/images/jokercard.jpg";

function CardJoker() {
  return (
    <div>
      <img
        style={{
          position: "absolute",
          borderRadius: 12 + "px",
        }}
        src={jokercard}
        alt="card"
        width={226}
        height={314}
      />
    </div>
  );
}

export default CardJoker;
