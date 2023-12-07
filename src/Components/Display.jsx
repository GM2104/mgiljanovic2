import React from "react";
import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";

const Display = ({ podaci1, podaci2, onReset }) => {
  return (
    <div>
      <Card>
        {podaci1 && (
          <div>
            <h2>User Information</h2>
            <img
              src={podaci1.avatar_url}
              height={150}
              width={150}
              alt="Logo"
            />
            <p>
              {podaci1.name}
            </p>
            <p>
              <b>LOCATION:</b> {podaci1.location}
            </p>
            <p>
              <b>BIO:</b> {podaci1.bio}
            </p>
          </div>
        )}
      </Card>

      {podaci2 && podaci2.length > 0 && (
        <div>
          <h2>Repositories</h2>
          <ListGroup>
            {podaci2.map((repo) => (
              <ListGroupItem key={repo.id}>{repo.name}</ListGroupItem>
            ))}
          </ListGroup>
        </div>
      )}
      {podaci1 && podaci2 && (
        <Button variant="danger" onClick={onReset}>
          Reset
        </Button>
      )}
    </div>
  );
};

export default Display;