import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCES</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header
                as="h5"
                className="d-flex justify-content-center flex-wrap"
              ></Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">
                    Développeur web
                  </Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong>Koikil:</strong> Développeur full-stack Juin-2019
                    <br />
                    <strong>OuiCar:</strong> Développeur front-end
                    Septembre-2019
                    <br />
                    <strong>Degetel:</strong> Développeur web fevrier-2020
                    <br />
                    <strong>Myra:</strong> Développeur React-Native mai-2020
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
