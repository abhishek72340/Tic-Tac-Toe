import { useState } from "react";
import { styled } from "styled-components";
const Li = styled.li`
  display: flex;
  gap: 30px;
`;
const Button = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  color: #6c694d;
  font-weight: bold;
  font-size: 13px;
`;
const Input = styled.input`
  outline: none;
  border: 1px solid white;
  background: linear-gradient(#383624, #282617);
  color: white;
  padding: 5px;
`;
export const Player = ({ player, symbol }) => {
  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState(player);
  const editHandler = () => {
    setEdit((prev) => !prev);
  };

  const inputChangeHandler = (e) => {
    setInput(e.target.value);
  };
  let playerName = <span>{player}</span>;
  let btnCaption = "Edit";
  if (edit) {
    playerName = (
      <Input
        type="text"
        required
        defaultValue={input}
        onChange={inputChangeHandler}
      />
    );
    btnCaption = "Save";
  }
  return (
    <div>
      <Li>
        <span style={{ textTransform: "uppercase" }}>{playerName}</span>
        <span>{symbol}</span>
        <Button onClick={editHandler}>{btnCaption}</Button>
      </Li>
    </div>
  );
};
