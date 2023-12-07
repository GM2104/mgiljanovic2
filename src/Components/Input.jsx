import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button, Alert } from "react-bootstrap";

const Input = ({ onFetchData }) => {
  const [korisnickoIme, setKorisnickoIme] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (e) => {
    setKorisnickoIme(e.target.value);
  };

  const handleSubmit = () => {
    onFetchData(korisnickoIme);
    setShowPopup(true); 
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>GitHub username:</Form.Label>
          <Form.Control
            type="text"
            value={korisnickoIme}
            onChange={handleInputChange}
          />
        </Form.Group>
        <br />
        <Button
          onClick={handleSubmit}
          disabled={!korisnickoIme}
          className="btn btn-primary mt-2"
        >
          Search
        </Button>
      </Form>

      {showPopup && (
        <Alert variant="info" className="mt-3" onClose={handlePopupClose} dismissible>
          Reset button is at the bottom!
        </Alert>
      )}
    </div>
  );
};

Input.propTypes = {
  onFetchData: PropTypes.func.isRequired,
};

export default Input;


