import React from "react";
import ParticleBackground from './components/ParticleBackground/ParticleBackground';
import Clarifai from 'clarifai';
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Navigation from './components/Navigation/Navigation';
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import './App.css';

// console.log(clarifai)

const app = new Clarifai.App({
  apiKey: 'c321b4d8ebd74c66a113e0b4f783c632'
 });

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: ""
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    app.models.predict(
        Clarifai.FACE_DETECT_MODEL, 
        this.state.input)
      .then(
      function(response) {
        console.log(response)
      }, 
      function (err) {
        // error
      }
    );
  }

  render() {
    return (
      <div className="App">
        <ParticleBackground />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
          onInputChange = {this.onInputChange} 
          onButtonSubmit = {this.onButtonSubmit} 
        />
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  } 
}

export default App;
