function Button({ able, shuffle }) {
  return (
    <button
      style={{
        padding: 10 + "px",
        borderRadius: 20 + "px",
        marginTop: 20 + "px",
        cursor: `${!able ? "pointer" : "progress"}`,
      }}
      onClick={shuffle}
      disabled={able}
    >
      Draw
    </button>
  );
}

export default Button;
