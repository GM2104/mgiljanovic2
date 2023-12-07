import "./App.css";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Input from "./Components/Input";
import ApiPoziv from "./Components/ApiPoziv";
import Display from "./Components/Display";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [korisnickoIme, setKorisnickoIme] = useState("");

  const handleFetchData = (korisnickoIme) => {
    setKorisnickoIme(korisnickoIme);
  };

  return (
    <div className="App">
      <Container className="d-flex align-items-center justify-content-center flex-column">
        <Input onFetchData={handleFetchData} />
        <ApiPoziv korisnickoIme={korisnickoIme} />
        <Display />
      </Container>
    </div>
  );
}

export default App;

