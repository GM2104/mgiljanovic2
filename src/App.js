import "./App.css";
import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Input from "./Components/Input";
import ApiPoziv from "./Components/ApiPoziv";
import Display from "./Components/Display";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor() {
    super();
    this.state = { korisnickoIme: "" };
    this.handleFetchData = this.handleFetchData.bind(this);
  }

  handleFetchData(korisnickoIme) {
    this.setState({ korisnickoIme: korisnickoIme });
  }

  render() {
    return (
      <div className="App">
        <Container className="d-flex align-items-center justify-content-center flex-column">
          <Input onFetchData={this.handleFetchData} />
          <ApiPoziv korisnickoIme={this.state.korisnickoIme} />
          <Display />
        </Container>
      </div>
    );
  }
}

export default App;


