import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.styles.scss";

const Register = ({ PlayersInfo }) => {
  const [playerOne, playerTwo] = PlayersInfo;
  const [playerOneName, setPlayerOneName] = useState(playerOne.playerName);
  const [playerTwoName, setPlayerTwoName] = useState(playerTwo.playerName);

  const navigate = useNavigate();

  const handleClick = () => {
    playerOne.playerName = playerOneName;
    playerTwo.playerName = playerTwoName;
    navigate("/game");
  };

  const handlePlayerOneChange = (e) => {
    setPlayerOneName(e.target.value);
  };

  const handlePlayerTwoChange = (e) => {
    setPlayerTwoName(e.target.value);
  };

  return (
    <div className="register-route-container">
      <div className="players-info-container">
        <input
          className="domino-input"
          placeholder="اسم اللاعب او الفريق الاول"
          value={playerOneName}
          onChange={handlePlayerOneChange}
        />
        <br />
        <br />
        <input
          className="domino-input"
          placeholder="اسم اللاعب او الفريق الثاني"
          value={playerTwoName}
          onChange={handlePlayerTwoChange}
        />
      </div>
      <button className="domino-button" onClick={handleClick}>
        يلا جيم
      </button>
    </div>
  );
};

export default Register;
