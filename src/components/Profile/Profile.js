import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const Image = styled.img`
  height: 80px;
  opacity: ${props => (props.found ? 1 : 0.5)};

  margin: 10px;
`;

const Profile = props => {
  const { profiles } = props;

  const images = profiles.map((profile, index) => {
    return profile.found ? (
      <Image key={index} found src={profile.src} alt={profile.character} />
    ) : (
      <Image key={index} src={profile.src} alt={profile.character} />
    );
  });

  return <Wrapper>{images}</Wrapper>;
};

export default Profile;
