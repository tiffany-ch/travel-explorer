function TravelCard({ country, isFavourited, onToggleFavourite }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "16px",
        maxWidth: "300px",
      }}
    >
      <img
        src={country.flag.url_png}
        alt={`Flag of ${country.names.common}`}
        style={{
          width: "100%",
          height: 160,
          objectFit: "cover",
          marginBottom: "12px",
        }}
      />
      <h3>{country.names.common}</h3>
      <p>Region: {country.region}</p>
      <p>Capital: {country.capitals?.[0]?.name || "N/A"}</p>
      <p>Population: {country.population?.toLocaleString()}</p>
      <button onClick={onToggleFavourite}>{isFavourited ? "❤️" : "🤍"}</button>
    </div>
  );
}

export default TravelCard;
