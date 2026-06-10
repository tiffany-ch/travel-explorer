import TravelCard from "./TravelCard";

function DestinationList({ destinations, favourites, onToggleFavourite }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
      {destinations.map((dest) => (
        <TravelCard
          key={dest.id}
          name={dest.name}
          country={dest.country}
          description={dest.description}
          rating={dest.rating}
          favourites={favourites}
          onToggleFavourite={onToggleFavourite}
        />
      ))}
    </div>
  );
}

export default DestinationList;
