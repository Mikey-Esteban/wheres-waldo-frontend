import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  cursor: pointer;
`;

const SquaresWrapper = styled.div`
  position: absolute;

  opacity: 0;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  .square {
  }
`;

const Image = props => {
  const squares = [];

  const divStyle = {
    height: props.data.divHeight,
    width: props.data.divWidth
  };

  const squareStyle = {
    height: props.data.squareSize,
    width: props.data.squareSize,
    color: "white",
    border: "1px solid yellow",
    fontSize: "2px"
  };

  for (let i = 0; i < props.data.totalSquares; i++) {
    squares.push(
      <div
        className="square"
        style={squareStyle}
        key={i}
        id={i}
        onClick={props.handleClick(i)}
      >
        {i}
      </div>
    );
  }

  return (
    <Wrapper>
      <img style={divStyle} src={props.src} alt="" />
      <SquaresWrapper style={divStyle}>{squares}</SquaresWrapper>
    </Wrapper>
  );
};

export default Image;
