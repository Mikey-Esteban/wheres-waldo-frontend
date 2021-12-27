import snow from "../images/wheres-waldo-snow.jpeg";

import waldoProfile from "../images/waldo.png";
import wizardProfile from "../images/wizard-whitebeard-profile.gif";
import odlawProfile from "../images/odlaw-profile.gif";
import wendaProfile from "../images/wenda2.png";

const snowData = {
  title: "Snow",
  slug: "snow",
  divHeight: "600px",
  divWidth: "960px",
  squareSize: "5px",
  totalSquares: 23040,
  imgSrc: snow,
  profiles: [
    {
      character: "Waldo",
      found: false,
      src: waldoProfile,
      winningSquares: [
        16483,
        16484,
        16675,
        16676,
        16867,
        16868,
        17058,
        17059,
        17060,
        17250,
        17251,
        17252,
        17253,
        17441,
        17442,
        17443,
        17444,
        17445,
        17446,
        17447,
        17633,
        17634,
        17635,
        17636,
        17637,
        17638,
        17639,
        17827,
        17828
      ]
    },
    {
      character: "Wenda",
      found: false,
      src: wendaProfile,
      winningSquares: [
        9308,
        9309,
        9310,
        9311,
        9501,
        9502,
        9693,
        9694,
        9885,
        9886,
        10077,
        10078,
        10269
      ]
    },
    {
      character: "Odlaw",
      found: false,
      src: odlawProfile,
      winningSquares: [14460, 14461, 14652, 14653, 14844, 14845, 15035]
    },
    {
      character: "Wizard Whitebeard",
      found: false,
      src: wizardProfile,
      winningSquares: [
        17100,
        17101,
        17292,
        17293,
        17485,
        17486,
        17676,
        17677,
        17678,
        17868,
        17869,
        17870
      ]
    }
  ]
};

export default snowData;
