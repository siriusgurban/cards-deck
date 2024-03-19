function Card({ item }) {
  return (
    <div>
      <img
        style={{
          position: "absolute",
          transform: `rotate(${item?.deg}${"deg"})`,
        }}
        src={item?.img}
        alt="card"
      />
    </div>
  );
}

export default Card;
