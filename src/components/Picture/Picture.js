import React, { useState, useEffect, Fragment } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import Image from "../Image/Image";
import Timer from "../Timer/Timer";
import Profile from "../Profile/Profile";
import Form from "../Form/Form";
import Scores from "../Scores/Scores";
import Button from "../Button/Button";

import axios from "axios";

import { Timer as TimerIcon } from "@styled-icons/fluentui-system-regular/Timer";

let localLink = 'http://localhost:3000'
let remoteLink = 'https://wheres-waldo-api.herokuapp.com'

const Navbar = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;

  color: white;
  cursor: pointer;
  font-size: 14px;
  font-weight: 800;
`;

const Wrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 100px;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #282c34;
  color: white;
`;

const DataWrapper = styled.div`
  position: relative; /* for Scores position */
  display: flex;
  flex-direction: column;
  margin-right: 50px;

  width: 80%;
  justify-content: flex-end;
  align-items: flex-end;
`;

const ScoresWrapper = styled.div`
  position: absolute;
  top: 70px;
`;

const TimeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FormWrapper = styled.div`
  position: absolute;

  z-index: 10;
`;

const Picture = () => {
  const location = useLocation();
  const history = useHistory();
  console.log("HIYOOO", location);

  const profiles = location.state.profiles;
  const data = location.state;
  const mainImgSrc = location.state.imgSrc;
  const [message, setMessage] = useState("");
  const [runTimer, setRunTimer] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [showScores, setShowScores] = useState(false);
  const [name, setName] = useState("");
  const [finalScore, setFinalScore] = useState(null);
  const [scores, setAllScores] = useState([]);

  useEffect(() => {
    axios
      .get(`${remoteLink}/api/v1/photos/${location.state.slug}`)
      .then(response => {
        console.log("get response", response);
        setAllScores(response.data);
      })
      .catch(error => {
        console.log("get error", error);
      });
  }, [scores.length]);

  const isWinningSquare = id => {
    let message = "uh ohh";
    profiles.forEach(profile => {
      if (profile.winningSquares.includes(id)) {
        profile.found = true;
        message = `You found ${profile.character}!`;
      }
    });
    return message;
  };

  const isAllFound = () => {
    const notFoundArray = profiles.filter(profile => profile.found === false);
    return notFoundArray.length === 0;
  };

  const setScore = time => {
    setFinalScore(time);
  };

  const handleShowScores = () => {
    setShowScores(!showScores);
  };

  const handleGoHome = () => {
    history.push("/");
  };

  const handleClick = id => e => {
    console.log(id);
    let message = isWinningSquare(id);
    setMessage(message);
    if (isAllFound()) {
      setRunTimer(false);
      setMessage("");
      setShowForm(true);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const user = { name: name, time: finalScore, title: data.title };
    const score = { name: name, time: finalScore };

    axios
      .post(`${remoteLink}/api/v1/scores`, { user })
      .then(response => {
        console.log(response);
        setAllScores([...scores, score]);
      })
      .catch(error => {
        console.log(error);
      });

    setShowForm(false);
  };

  const handleChange = e => {
    setName(e.target.value);
  };

  return (
    <Fragment>
      <Navbar onClick={handleGoHome}>Home</Navbar>
      <Wrapper>
        <DataWrapper>
          <TimeWrapper>
            <TimerIcon size={24} />
            <Timer runTimer={runTimer} setScore={setScore} />
          </TimeWrapper>
          <Button handleClick={handleShowScores} text={"view scores"} />
          {showScores && (
            <ScoresWrapper>
              <Scores scores={scores} />
            </ScoresWrapper>
          )}
          <div>{message}</div>
        </DataWrapper>
        {showForm && (
          <FormWrapper>
            <Form
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              name={name}
              time={finalScore}
            />
          </FormWrapper>
        )}
        <Profile profiles={profiles} />
        <Image src={mainImgSrc} data={data} handleClick={handleClick} />
      </Wrapper>
    </Fragment>
  );
};

export default Picture;
