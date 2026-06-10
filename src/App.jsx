import TravelCard from "./components/TravelCard";
import DestinationList from "./components/DestinationList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";

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
  const [searchTerm, setSearchTerm] = useState("");
  const [favourites, setFavourites] = useState([]);
  const [showFavouritesOnly, setShowFavouritesOnly] = useState(false);

  const filteredDestinations = destinations.filter(
    (dest) =>
      dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dest.country.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const toggleFavourite = (destName) => {
    setFavourites(
      (prev) =>
        prev.includes(destName)
          ? prev.filter((name) => name !== destName) // remove
          : [...prev, destName], // add
    );
  };

  const displayedDestinations = showFavouritesOnly
    ? filteredDestinations.filter((d) => favourites.includes(d.name))
    : filteredDestinations;

  return (
    <>
      <Header
        title="Travel Explorer"
        subtitle="Discover your next adventure"
        favouriteCount={favourites.length}
      />
      <input
        type="text"
        placeholder="Search destinations..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={() => setShowFavouritesOnly(!showFavouritesOnly)}>
        {showFavouritesOnly ? "Show All" : "Show Favourites Only"}
      </button>
      <DestinationList
        destinations={displayedDestinations}
        favourites={favourites}
        onToggleFavourite={toggleFavourite}
      />
      <Footer />
    </>
  );
}

export default App;
