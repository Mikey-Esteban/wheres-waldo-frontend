import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import socialDistancingData from "../../assets/data/socialDistancing";
import merryGoRoundData from "../../assets/data/merryGoRound";
import snowData from "../../assets/data/snow";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #282c34;
  color: white;
`;

const ImagesWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  cursor: pointer;

  img {
    height: 200px;
    opacity: 0.15;
    transition: all ease-in-out 200ms;
  }

  p {
    position: absolute;
    top: 32%;
    left: 40%;
    background: none;
    font-size: 24px;
    font-weight: 800;
  }

  p#medium {
    left: 25%;
  }

  @media only screen and (max-width: 800px) {
    p {
      left: 45%;
    }
    p#medium {
      left: 42%;
    }
  }
`;

const Header = styled.div`
  font-size 48px;
  font-weight: 800;

  #first {
    color: #a8dadc; /* blue */
  }

  #second {
    color: #e63946; /* red */
  }
`;

const SubHeader = styled.div`
  margin-bottom: 40px;
`;



const Home = props => {
  let history = useHistory();

  const handleClick = data => {
    history.push(`/${data.slug}`, data);
  };

  const handleMouseOver = e => {
    let img;
    e.target.classList.contains("image")
      ? (img = e.target)
      : (img = e.target.querySelector(".image"));

    if (!img) {
      img = e.target.previousSiblingElement;
    }

    img.style.opacity === "0.5"
      ? (img.style.opacity = "0.15")
      : (img.style.opacity = "0.5");
  };

  return (
    <Wrapper>
      <Header>
        <span id="first">Where's</span> <span id="second">Waldo?</span>
      </Header>
      <SubHeader>Select a picture and find Waldo and his friends!</SubHeader>
      <ImagesWrapper>
        <ImageWrapper
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseOver}
        >
          <img
            src={socialDistancingData.imgSrc}
            alt={socialDistancingData.title}
            onClick={() => handleClick(socialDistancingData)}
            className="image"
          />
          <p className="level">Easy</p>
        </ImageWrapper>
        <ImageWrapper
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseOver}
        >
          <img
            src={merryGoRoundData.imgSrc}
            alt={merryGoRoundData.title}
            onClick={() => handleClick(merryGoRoundData)}
            className="image"
          />
          <p id="medium" className="level">
            Medium
          </p>
        </ImageWrapper>
        <ImageWrapper
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseOver}
        >
          <img
            src={snowData.imgSrc}
            alt={snowData.title}
            onClick={() => handleClick(snowData)}
            className="image"
          />
          <p className="level">Hard</p>
        </ImageWrapper>
      </ImagesWrapper>
    </Wrapper>
  );
};

export default Home;
