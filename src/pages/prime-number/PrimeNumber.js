import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const PrimeNumber = () => {
  return (
    <section className="prime-number">
      <div className="pr-card">
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Enter a number"
            aria-label="Enter a number"
            aria-describedby="prime-number"
          />
          <InputGroup.Text id="prime-number">Check</InputGroup.Text>
        </InputGroup>
        <div className="pr-result">
          <h3>Result</h3>
          <p>It is a prime number</p>
        </div>
      </div>
    </section>
  );
};

export default PrimeNumber;
