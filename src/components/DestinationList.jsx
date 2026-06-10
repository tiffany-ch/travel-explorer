import TravelCard from "./TravelCard";

function DestinationList({ destinations }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
      {destinations.map((dest) => (
        <TravelCard
          key={dest.id}
          name={dest.name}
          country={dest.country}
          description={dest.description}
          rating={dest.rating}
        />
      ))}
    </div>
  );
}

export default DestinationList;
