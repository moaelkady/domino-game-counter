import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./game-play.styles.scss";

const GamePlay = ({ PlayersInfo }) => {
  const navigate = useNavigate();
  const [playerOne, playerTwo] = PlayersInfo;
  const [playerOneScore, setplayerOneScore] = useState(playerOne.playerScore);
  const [playerTwoScore, setplayerTwoScore] = useState(playerTwo.playerScore);
  const [playerOneNewValue, setplayerOneNewValue] = useState("");
  const [playerTwoNewValue, setplayerTwoNewValue] = useState("");
  const [winner, setWinner] = useState("");

  const handlePlayerOneChange = (e) => {
    setplayerOneNewValue(e.target.value);
  };
  const handlePlayerTwoChange = (e) => {
    setplayerTwoNewValue(e.target.value);
  };
  const handlePlayerOneClick = () => {
    if (playerOneNewValue > 0) {
      setplayerOneScore(parseInt(playerOneScore) + parseInt(playerOneNewValue));
    }
    setplayerOneNewValue("");
  };
  const handlePlayerTwoClick = () => {
    if (playerTwoNewValue > 0) {
      setplayerTwoScore(parseInt(playerTwoScore) + parseInt(playerTwoNewValue));
    }
    setplayerTwoNewValue("");
  };

  useEffect(() => {
    if (playerOneScore >= 101) {
      setWinner(playerOne.playerName);
    }
    if (playerTwoScore >= 101) {
      setWinner(playerTwo.playerName);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playerOneScore, playerTwoScore]);

  const handleReset = () => {
    setplayerOneScore(0);
    setplayerTwoScore(0);
    setWinner("");
  };

  if (playerOne.playerName.length === 0 || playerTwo.playerName === 0) {
    return (
      <div className="err-handler-for-no-regestration">
        <h1>محتاج تكتب اسم اللاعبين الاول عشان تقدر تلعب!</h1>
        <button
          className="domino-button"
          onClick={() => {
            navigate("/register");
          }}
        >
          دوس هنا علشان تقدر تسجل
        </button>
      </div>
    );
  }

  return (
    <div className="game-play-route-container">
      <div className="player">
        <h1>{playerOne.playerName}</h1>
        <h3>{playerOneScore}</h3>
        <input
          type="number"
          value={playerOneNewValue}
          onChange={handlePlayerOneChange}
        />
        <button onClick={handlePlayerOneClick}>ضيف رقم جديد</button>
      </div>
      <div className="player">
        <h1 className="name">{playerTwo.playerName}</h1>
        <h3 className="score">{playerTwoScore}</h3>
        <input
          type="number"
          value={playerTwoNewValue}
          onChange={handlePlayerTwoChange}
        />
        <button onClick={handlePlayerTwoClick}>ضيف رقم جديد</button>
      </div>
      {winner === playerOne.playerName && (
        <div className="winner-notification">
          <div className="content">
            <span className="winner-name">{`${playerOne.playerName} يكسب`}</span>
            <span className="close" onClick={handleReset}>
              أبدأ من تاني
            </span>
          </div>
          <div className="pyro bg">
            <div className="before"></div>
            <div className="after"></div>
          </div>
        </div>
      )}
      {winner === playerTwo.playerName && (
        <div className="winner-notification">
          <div className="content">
            <span className="winner-name">{`${playerTwo.playerName} يكسب`}</span>
            <span className="close" onClick={handleReset}>
              أبدأ من تاني
            </span>
          </div>
          <div className="pyro bg">
            <div className="before"></div>
            <div className="after"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GamePlay;
