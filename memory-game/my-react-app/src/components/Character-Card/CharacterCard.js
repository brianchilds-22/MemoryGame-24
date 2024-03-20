import React from "react";
import { Col } from "react-bootstrap";
import "./CharacterCard.css";

const CharacterCard = (props) => (
  <Col xs={4} sm={3} md={4} lg={3}>
    <div
      className="card"
      value={props.id}
      onClick={() => props.handleClick(props.id)}
    >
      <div className="img-container">
        <img alt={props.character} src={props.image} />
      </div>
    </div>
  </Col>
);

export default CharacterCard;
