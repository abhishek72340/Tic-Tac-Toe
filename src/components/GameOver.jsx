import { styled } from "styled-components";
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  font-size: 2rem;
  font-weight: bold;
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  background: #211d10;
  opacity: 0.9;
  z-index: 1;
`;

const Button = styled.button`
  background-color: #fbca43;
  border: none;
  color: black;
  box-shadow: 0 0 4px #fbca43;
  border-radius: 2px;
  padding: 10px;
  cursor: pointer;
  &:hover {
    border: 1px solid #fbca43;
    color: #fbca43;
    background-color: black;
  }
`;
const H2 = styled.h2`
  color: #fbca43;
`;
const GameOver = ({ winner, onRestart }) => {
  return (
    <Div>
      <H2>Game Over!</H2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>It&apos;s a draw</p>}
      <p>
        <Button onClick={onRestart}>Rematch!</Button>
      </p>
    </Div>
  );
};

export default GameOver;
