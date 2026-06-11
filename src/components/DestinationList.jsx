import TravelCard from "./TravelCard";

function DestinationList({ destinations, favourites, onToggleFavourite }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "16px",
        padding: "16px",
      }}
    >
      {destinations.map((dest) => (
        <TravelCard
          key={dest.codes.alpha_3}
          country={dest}
          isFavourited={favourites.includes(dest.codes.alpha_3)}
          onToggleFavourite={() => onToggleFavourite(dest.codes.alpha_3)}
        />
      ))}
    </div>
  );
}

export default DestinationList;
