import TravelCard from "./components/TravelCard";
import DestinationList from "./components/DestinationList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

const API_KEY = "rc_live_6f1b02d4b218428f9c6b232d10a399a9";

// const destinations = [
//   {
//     id: 1,
//     name: "Bali",
//     country: "Indonesia",
//     description: "Tropical paradise with rice terraces and surf breaks.",
//     rating: 5,
//   },
//   {
//     id: 2,
//     name: "Patagonia",
//     country: "Argentina",
//     description: "Epic hiking through glaciers and mountain peaks.",
//     rating: 4,
//   },
//   {
//     id: 3,
//     name: "Kyoto",
//     country: "Japan",
//     description: "Ancient temples, bamboo forests, and zen gardens.",
//     rating: 5,
//   },
//   {
//     id: 4,
//     name: "Cape Town",
//     country: "South Africa",
//     description: "Where mountains meet the ocean. Great surf too.",
//     rating: 4,
//   },
// ];

function App() {
  // All state in one place: "here's what this component tracks"
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [favourites, setFavourites] = useState([]);
  const [showFavouritesOnly, setShowFavouritesOnly] = useState(false);
  const [regionFilter, setRegionFilter] = useState("All");

  useEffect(() => {
    fetch(
      "https://api.restcountries.com/countries/v5?response_fields=names.common,capitals,region,population,flag.emoji,flag.url_png,codes.alpha_3&limit=100",
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      },
    )
      .then((res) => res.json())
      .then((json) => {
        const withFlags = json.data.objects.filter((c) => c.flag.url_png);
        setDestinations(withFlags);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Derived data and functions that USE that state
  const filtered = destinations
    .filter(
      (country) => regionFilter === "All" || country.region === regionFilter,
    )
    .filter((country) =>
      country.names.common.toLowerCase().includes(searchTerm.toLowerCase()),
    );

  const toggleFavourite = (code) => {
    setFavourites((prev) =>
      prev.includes(code) ? prev.filter((c) => c !== code) : [...prev, code],
    );
  };

  const displayedDestinations = showFavouritesOnly
    ? filtered.filter((d) => favourites.includes(d.codes.alpha_3))
    : filtered;

  if (loading) {
    return (
      <>
        <Header
          title="Travel Explorer"
          subtitle="Discover your next adventure"
          favouriteCount={0}
        />
        <p style={{ textAlign: "center", padding: "2rem" }}>
          Loading destinations...
        </p>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header
          title="Travel Explorer"
          subtitle="Discover your next adventure"
          favouriteCount={0}
        />
        <p style={{ textAlign: "center", padding: "2rem", color: "red" }}>
          Error: {error}
        </p>
      </>
    );
  }

  // The JSX
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
      <select
        value={regionFilter}
        onChange={(e) => setRegionFilter(e.target.value)}
      >
        <option value="All">All Regions</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
      <button onClick={() => setShowFavouritesOnly(!showFavouritesOnly)}>
        {showFavouritesOnly ? "Show All" : "Show Favourites Only"}
      </button>
      <DestinationList
        destinations={filtered && displayedDestinations}
        favourites={favourites}
        onToggleFavourite={toggleFavourite}
      />
      <Footer />
    </>
  );
}

export default App;
