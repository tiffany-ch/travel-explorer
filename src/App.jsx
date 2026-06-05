import TravelCard from "./components/TravelCard";

const destinations = [
  {
    id: 1,
    name: "Bali",
    country: "Indonesia",
    description: "Tropical paradise with rice terraces and surf breaks.",
    rating: 5,
  },
  {
    id: 2,
    name: "Patagonia",
    country: "Argentina",
    description: "Epic hiking through glaciers and mountain peaks.",
    rating: 4,
  },
  {
    id: 3,
    name: "Kyoto",
    country: "Japan",
    description: "Ancient temples, bamboo forests, and zen gardens.",
    rating: 5,
  },
  {
    id: 4,
    name: "Cape Town",
    country: "South Africa",
    description: "Where mountains meet the ocean. Great surf too.",
    rating: 4,
  },
];

function App() {
  return (
    <div style={{ padding: "24px" }}>
      <h1>Travel Explorer</h1>
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
    </div>
  );
}

export default App;
