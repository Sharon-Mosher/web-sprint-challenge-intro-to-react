import React from 'react';
import './App.css';
import Character from "./components/Character";
import styled from "styled-components";

const Card = styled.div`
  text-align: center;
  margin-left: 20px;
  margin-right: 80px;
  text-shadow: 1px 1px 5px #fff;
  color: green;
`;



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <Card className="App">
      <h1 className="Header">May The Force Be With You!!</h1>
      <Character />	     
    </Card>
  );
};

export default App;
