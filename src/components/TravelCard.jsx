function TravelCard({
  name,
  country,
  description,
  rating,
  favourites,
  onToggleFavourite,
}) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "16px",
        maxWidth: "300px",
      }}
    >
      <div
        style={{
          height: "120px",
          backgroundColor: "#2DD4BF",
          borderRadius: "8px",
          marginBottom: "12px",
        }}
      />
      <h3>{name}</h3>
      <p style={{ color: "#666" }}>{country}</p>
      <p>{description}</p>
      <p>
        {"★".repeat(rating)}
        {"☆".repeat(5 - rating)}
      </p>
      <button onClick={() => onToggleFavourite(name)}>
        {favourites.includes(name) ? "❤️" : "🤍"}
      </button>
    </div>
  );
}

export default TravelCard;
