import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Tilt from "react-tilt";
import "./contact-form.styles.css";

const ContactForm = () => {
  return (
    <div id="contact">
      <h1 className="pt-3 text-center font-details-b pb-3">Contactez moi</h1>
      <Tilt options={{ max: 25 }}>
        <Jumbotron className="contact-jumbotron">
          <Row>
            <Col className="d-flex justify-content-center flex-wrap">
              <div className="m-2">
                <a
                  href="mailto:ghulam.shanwaz@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline-danger"
                    title="ghulam.shanwaz@gmail.com"
                  >
                    <i className="fas fa-envelope-square"></i> Email
                  </Button>
                </a>
              </div>
              <div className="m-2">
                <a
                  href="https://www.linkedin.com/in/shanwaz-ghulam-99207018b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline-primary" title="Visit my LinkenIn">
                    <i className="fab fa-linkedin"></i> LinkedIn
                  </Button>
                </a>
              </div>

              <div className="m-2">
                <a
                  href="https://github.com/shanwazghulam"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline-dark" title="My other projects">
                    <i className="fab fa-github-square"></i> GitHub
                  </Button>
                </a>
              </div>
            </Col>
          </Row>
        </Jumbotron>
      </Tilt>
    </div>
  );
};

export default ContactForm;
