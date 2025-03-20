import Home from "./pages/home";
import Favorites from "./pages/favorites";
import { Routes, Route } from "react-router-dom";
import "./css/App.css";
import NavBar from "./components/NavBar";
import { MovieProvider } from "./context/MovieContext";
function App() {
  const movieNumber = 1;

  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
