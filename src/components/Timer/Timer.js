import React, { useState, useRef } from "react";
import styled from "styled-components";

const Time = styled.div`
  display: flex;
`;

const DigitWrapper = styled.div`
  display: flex;
`;

const Digit = styled.div`
  width: 15px;
`;

const Colon = styled.div`
  width: 10px;
`;

const Timer = props => {
  const [timer, setTimer] = useState(0);
  const [finalTime, setFinalTime] = useState(null);
  const [hasTimeStarted, setHasTimeStarted] = useState(false);
  const countRef = useRef(null);

  const startTimer = () => {
    const startTime = Date.now();

    countRef.current = setInterval(() => {
      let elapsedTime = Date.now() - startTime;
      setTimer((elapsedTime / 1000).toFixed(3));
    }, 100);
  };

  const stopTimer = timer => {
    const finalTime = timer;
    setFinalTime(finalTime);
    props.setScore(finalTime);
    setTimer(0);
    clearInterval(countRef.current);
  };

  if (props.runTimer && !hasTimeStarted) {
    setTimeout(startTimer(setTimer), 2000);
    setHasTimeStarted(true);
  }

  if (props.runTimer === false && hasTimeStarted) {
    stopTimer(timer);
    setHasTimeStarted(false);
  }

  const grabDeciseconds = timer => {
    if (timer === 0) {
      return 0;
    }
    return timer.toString().split(".")[1][0];
  };

  const grabSeconds = timer => {
    const allSeconds = (timer % 60).toString();
    const seconds = allSeconds.split(".")[0];
    return shouldAddZero(seconds);
  };

  const grabMinutes = timer => {
    let minutes = Math.floor((timer / 60) % 60);
    minutes = `${minutes % 60}`.slice(-2);
    return shouldAddZero(minutes);
  };

  const grabHours = timer => {
    let hours = Math.floor((timer / 3600) % 60);
    hours = `${hours % 60}`.slice(-2);
    return shouldAddZero(hours);
  };

  const shouldAddZero = timer => {
    return timer.length === 1 ? `0${timer}` : timer;
  };

  // handle time
  const formatTime = timer => {
    const getDeciseconds = grabDeciseconds(timer);
    const getSeconds = grabSeconds(timer);
    const getMinutes = grabMinutes(timer);
    const getHours = grabHours(timer);

    const decisecondsDiv = (
      <DigitWrapper>
        <Digit>{getDeciseconds}</Digit>
      </DigitWrapper>
    );
    const secondsDiv = (
      <DigitWrapper>
        <Digit>{getSeconds[0]}</Digit>
        <Digit>{getSeconds[1]}</Digit>
      </DigitWrapper>
    );
    const minutesDiv = (
      <DigitWrapper>
        <Digit>{getMinutes[0]}</Digit>
        <Digit>{getMinutes[1]}</Digit>
      </DigitWrapper>
    );
    const hoursDiv = (
      <DigitWrapper>
        <Digit>{getHours[0]}</Digit>
        <Digit>{getHours[1]}</Digit>
      </DigitWrapper>
    );

    return (
      <Time>
        {hoursDiv} <Colon>:</Colon>
        {minutesDiv} <Colon>:</Colon>
        {secondsDiv} .{decisecondsDiv}
      </Time>
    );
  };

  return <div>{!finalTime ? formatTime(timer) : formatTime(finalTime)}</div>;
};

export default Timer;
