import { Route, Routes } from "react-router-dom";
import Register from "./routes/register/register.component";
import GamePlay from "./routes/game-play/game-play.components";
import "./App.scss";

const PLAYERS__INFO = [
  {
    id: 1,
    playerName: "",
    playerScore: 0,
  },
  {
    id: 2,
    playerName: "",
    playerScore: 0,
  },
];

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register PlayersInfo={PLAYERS__INFO} />} />
        <Route
          path="/game"
          element={<GamePlay PlayersInfo={PLAYERS__INFO} />}
        />
        <Route path="/*" element={<Register PlayersInfo={PLAYERS__INFO} />} />
      </Routes>
    </div>
  );
}

export default App;
