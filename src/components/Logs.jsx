import { styled } from "styled-components";

const Ol = styled.ol`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 1rem;
  font-weight: bold;
  flex-direction: column;
  list-style-type: none;
`;
const Logs = ({ gameTurns }) => {
  return (
    <>
      <Ol>
        {gameTurns.map((turn) => (
          <li key={`${turn.square.row}${turn.square.col}`}>
            {turn.player} selected {turn.square.row}, {turn.square.col}
          </li>
        ))}
      </Ol>
    </>
  );
};

export default Logs;
