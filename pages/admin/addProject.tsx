import { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Jumbotron,
  Card,
  Image,
  Form,
  Button,
} from "react-bootstrap";

import Metadata from "../../components/Metadata";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

import { ProjectProps } from "../../components/projects/ProjectCard";
import { sendData } from "../../components/admin/api";
import db from "../../components/admin/firebaseConfig";

const AddProjectContent = () => {
  const [name, setName] = useState("");
  const [shortDesc, setShortDesc] = useState("");

  const formChangeHandler = (e) => {
    e.preventDefault();
    const { id, value } = e.currentTarget;

    if (id == "projectName") setName(value);
    else if (id == "shortDesc") setShortDesc(value);
    console.log(value);
  };

  return (
    <Container fluid>
      <Row className={"p-0"}>
        <Col xs={2} sm={1} className={"p-0"}>
          <Navigation />
        </Col>

        <Col xs={10} sm={11} className={"p-0 mt-4"}>
          <Container fluid>
            <Row>
              <Col>
                <Jumbotron className={"text-center"}>
                  <h1>New Project</h1>
                </Jumbotron>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form>
                  <Form.Group controlId={"projectName"}>
                    <Form.Label>Project Name</Form.Label>
                    <Form.Control
                      type={"text"}
                      placeholder={"Enter Project Name..."}
                      value={name}
                      onChange={formChangeHandler}
                    />
                  </Form.Group>

                  <Form.Group controlId={"shortDesc"}>
                    <Form.Label>Short Description</Form.Label>
                    <Form.Control
                      type={"text"}
                      placeholder={"Enter Short Description..."}
                      value={shortDesc}
                      onChange={formChangeHandler}
                    />
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Container>

          <Footer />
        </Col>
      </Row>
    </Container>
  );
};

const AddProjectPage = () => {
  return (
    <>
      <Metadata title={"Add Project"} />
      <AddProjectContent />
    </>
  );
};

export default AddProjectPage;
