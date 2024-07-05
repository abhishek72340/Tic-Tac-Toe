import { useState } from "react";
import { Player } from "./components/Player";
import GameBoard from "./components/GameBoard";
import Logs from "./components/Logs";
import { winningCombinations } from "./winning-combinations";
import GameOver from "./components/GameOver";
import { styled } from "styled-components";
const Header = styled.header`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 2%;
  gap: 10px;
`;
const MainContainer = styled.main`
  max-width: 45rem;
  margin: 3rem auto;
  padding: 2rem;
  border-radius: 6px;
  background: linear-gradient(#383624, #282617);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  color: white;
`;
const Ol = styled.ol`
  display: flex;
  justify-content: space-between;
`;

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}
const App = () => {
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);
  let gameBoard = [...initialGameBoard].map((array) => [...array]);
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  let winner = null;
  for (const combination of winningCombinations) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].col];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  }
  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameTurns((prevTurns) => {
      let currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  };

  const handleRestart = () => {
    setGameTurns([]);
  };
  const hasDraw = gameTurns.length === 9 && !winner;

  return (
    <div>
      <Header>
        {/* <img
          src="tic-tac-toe.jpeg"
          alt="tic-tac-toe"
          loading="lazy"
          width="100"
        /> */}
        <h1 style={{ color: "#2d2a00" }}>Tic-Tac-Toe</h1>
      </Header>
      <main>
        <MainContainer>
          <Ol>
            <Player
              player="player1"
              symbol="X"
              isActive={activePlayer === "X"}
            />
            <Player
              player="player2"
              symbol="O"
              isActive={activePlayer === "O"}
            />
          </Ol>
          {(winner || hasDraw) && (
            <GameOver winner={winner} onRestart={handleRestart} />
          )}
          <GameBoard
            onSelectSquare={handleSelectSquare}
            gameBoard={gameBoard}
          />
        </MainContainer>
        <Logs gameTurns={gameTurns} />
      </main>
    </div>
  );
};

export default App;
