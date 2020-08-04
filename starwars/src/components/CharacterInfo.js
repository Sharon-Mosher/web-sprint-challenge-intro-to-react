import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
display:flex;
flex-direction: column;
justify-content: space-between;
width: 350px;
height 350px;
background-color: yellow;
border-radius: 5px;
border: .5rem solid blue;
padding: 1rem;
margin 1rem;
`;

const Title = styled.h1`
font-size: 2rem;
font-weight: 300;
margin 1rem;
color: purple;
`;

const Description = styled.p`
color: blue;
`;

const CharacterInfo = (props) => {
  console.log(CharacterInfo);
  return (
    <Wrapper>
      <Title> {props.name} </Title>
      <Description> Birth year: {props.birth_year} </Description>
      <Description> Gender: {props.gender} </Description>
      <Description> Hair Color: {props.hair_color} </Description>
      <Description> Eye Color: {props.eye_color} </Description>
      <Description> Height: {props.height} </Description>
      <Description> Mass: {props.mass} </Description>
    </Wrapper>
  );
};

export default CharacterInfo;