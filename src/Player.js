import React from "react";
import { Card } from "react-bootstrap";

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" src={imageUrl} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Équipe :</strong> {team} <br />
          <strong>Nationalité :</strong> {nationality} <br />
          <strong>Numéro :</strong> {jerseyNumber} <br />
          <strong>Âge :</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

// Définir des valeurs par défaut pour les props
Player.defaultProps = {
  name: "Inconnu",
  team: "Sans équipe",
  nationality: "Non spécifié",
  jerseyNumber: 0,
  age: 0,
  imageUrl: "",
};

export default Player;
