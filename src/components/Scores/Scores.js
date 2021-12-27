import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;

  padding: 20px 10px;
  background-color: white;
  border-radius: 5px;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;

  .rank {
    margin-left: 5px;
    margin-right: 5px;
  }

  * {
    background-color: white;
    color: black;
    font-size: 12px;
    margin: 2px 0;
  }
`;

const NoScores = styled.div`
  background-color: white;
  color: black;
`;

const Scores = ({ scores }) => {
  const scoresList = scores.map((score, index) => (
    <Info>
      <div>
        <span className="rank">{index + 1}.</span>
        <span className="name">{score.name}</span>
      </div>

      <span className="time">{score.time}s</span>
    </Info>
  ));

  console.log("scoreslist", scoresList.length === 0);

  return (
    <Wrapper>
      {scoresList.length === 0 ? <NoScores>No scores</NoScores> : scoresList}
    </Wrapper>
  );
};

export default Scores;
