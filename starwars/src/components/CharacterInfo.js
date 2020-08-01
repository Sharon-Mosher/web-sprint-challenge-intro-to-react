import React from "react";

const CharacterInfo = (props) => {
  console.log(CharacterInfo);
  return (
    <div className="character-info">
      <h2> Name: {props.name} </h2>
      <p> Birth year: {props.birth_year} </p>
      <p> Gender: {props.gender} </p>
      <p> Hair Color: {props.hair_color} </p>
      <p> Eye Color: {props.eye_color} </p>
      <p> Height: {props.height} </p>
      <p> Mass: {props.mass} </p>
    </div>
  );
};

export default CharacterInfo;