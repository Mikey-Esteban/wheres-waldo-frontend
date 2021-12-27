import React from "react";
import styled from "styled-components";

import Button from "../Button/Button";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  width: 300px;

  input,
  input::placeholder {
    color: white;
    font-weight: 600;
  }

  input:focus {
    outline: none;
  }

  input {
    border: 2px solid white;
    border-radius: 5px;
    padding: 5px 0;
  }

  #congrats {
    font-weight: 800;
    font-size: 36px;
    margin-bottom: 10px;
  }

  .input {
    margin-bottom: 10px;
  }

  .red {
    color: #e63946; /* red */
  }

  .space {
    margin: 0 9px;
  }

  #time {
    color: #a8dadc; /* blue */
    font-size: 24px;
    font-weight: 800;
    margin-top: 0;
  }
`;

const Form = ({ handleSubmit, handleChange, name, time }) => {
  return (
    <Wrapper>
      <p id="congrats">
        <span className="red">Y</span>
        <span>O</span>
        <span className="red">U</span>
        <span className="space"></span>
        <span>W</span>
        <span className="red">O</span>
        <span>N</span>
        <span className="red">!</span>
        <span>!</span>
        <span className="red">!</span>
      </p>
      <p id="time">{time}s</p>
      <form action="" onSubmit={handleSubmit}>
        <div className="input">
          <input
            type="text"
            placeholder="Enter your name"
            onChange={handleChange}
            value={name}
          />
        </div>
        <Button handleClick={handleSubmit} text={"submit"} />
      </form>
    </Wrapper>
  );
};

export default Form;
