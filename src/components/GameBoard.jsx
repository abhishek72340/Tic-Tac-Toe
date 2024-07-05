import { styled } from "styled-components";

const Ol = styled.ol`
  display: flex;
  justify-content: center;
  gap: 3rem;
`;
const Li = styled.button`
  display: flex;
  gap: 3rem;
  padding: 1.7rem;
  width: 13%;
  background-color: #9c9877;
  color: black;
  font-weight: bold;
  font-size: 2rem;
  border: 1px solid #9c9877;
  list-style-type: none;
  cursor: pointer;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  color: #2d2a00;
  font-size: 1.5rem;
  font-weight: bold;
`;

const GameBoard = ({ onSelectSquare, gameBoard }) => {
  return (
    <div>
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex} style={{ listStyleType: "none", margin: "2rem" }}>
          <Ol>
            {" "}
            {row.map((col, colIndex) => (
              <Li
                key={colIndex}
                onClick={() => onSelectSquare(rowIndex, colIndex)}
                disabled={col !== null}
              >
                <Button>{col}</Button>
              </Li>
            ))}
          </Ol>
        </li>
      ))}
    </div>
  );
};

export default GameBoard;
