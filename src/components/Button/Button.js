import React from "react";
import styled from "styled-components";

const Wrapper = styled.button`
  cursor: pointer;
  padding: 10px 20px;

  background-color: #fca311;
  border-radius: 5px;
  border: none;
  color: white;
  font-weight: 600;
`;

const Button = props => {
  return <Wrapper onClick={props.handleClick}>{props.text}</Wrapper>;
};

export default Button;
