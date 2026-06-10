import TravelCard from "./components/TravelCard";
import DestinationList from "./components/DestinationList";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
    <>
      <Header title="Travel Explorer" subtitle="Discover your next adventure" />
      <DestinationList destinations={destinations} />
      <Footer />
    </>
  );
}

export default App;
