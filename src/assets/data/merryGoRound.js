import merryGoRound from "../../assets/images/wheres-waldo-merry-go-round.jpeg";

import waldoProfile from "../images/waldo.png";
import wizardProfile from "../images/wizard-whitebeard-profile.gif";
import odlawProfile from "../images/odlaw-profile.gif";

const merryGoRoundData = {
  title: "Merry Go Round",
  slug: "merry-go-round",
  divHeight: "800px",
  divWidth: "800px",
  squareSize: "5px",
  totalSquares: 25600,
  imgSrc: merryGoRound,
  profiles: [
    {
      character: "Waldo",
      found: false,
      src: waldoProfile,
      winningSquares: [
        16464,
        16463,
        16465,
        16466,
        16624,
        16625,
        16626,
        16785,
        16786,
        16943,
        16944,
        16945,
        16946,
        17102,
        17103,
        17104,
        17105,
        17106,
        17261,
        17262,
        17263,
        17264,
        17265,
        17266
      ]
    },
    {
      character: "Wizard Whitebeard",
      found: false,
      src: wizardProfile,
      winningSquares: [
        18270,
        18492,
        18430,
        18589,
        18590,
        18591,
        18749,
        18750,
        18751,
        18909,
        18910,
        18911,
        19069,
        19070,
        19071,
        19072,
        19228,
        19229,
        19230,
        19231,
        19232,
        19233,
        19234,
        19235,
        18115,
        18275,
        18435,
        18595,
        18755,
        18915,
        19075,
        19395,
        19555
      ]
    },
    {
      character: "Odlaw",
      found: false,
      src: odlawProfile,
      winningSquares: [
        7934,
        7935,
        8094,
        8095,
        8254,
        8255,
        8414,
        8415,
        8573,
        8574,
        8575,
        8734,
        8735
      ]
    }
  ]
};

export default merryGoRoundData;
