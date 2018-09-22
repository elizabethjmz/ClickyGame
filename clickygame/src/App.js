import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cars from "./pictures.json";
import "./App.css";
import Nav from "./components/Nav/Nav"

class App extends Component {

  state = {
    cars
  };

  


  render() {
    return (

      <Wrapper>
        
        <Title>
          <Nav />
        </Title>
        
        {this.state.cars.map(car => (
          <ImageCard
            id={car.id}
            image={car.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
