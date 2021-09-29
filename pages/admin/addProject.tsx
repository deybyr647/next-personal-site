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
  const styling = {
    backgroundColor: "#f9f9fa",
  };

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
            <Row className={"mb-4"}>
              <Col md={12} lg={4} xl={3}>
                <Card style={styling} className={"mb-4"}>
                  <Card.Img
                    src={""}
                    alt={""}
                    className={"rounded-circle my-2"}
                    variant={"top"}
                  />

                  <Card.Body>
                    <Card.Title>Project Bio</Card.Title>
                    <Form>
                      <Form.Group controlId={"projectLogo"}>
                        <Form.Label>Project Logo</Form.Label>
                        <Form.Control type={"file"} />
                      </Form.Group>

                      <Form.Group controlId={"projectDescription"}>
                        <Form.Label>Project Description (short)</Form.Label>
                        <Form.Control
                          as={"textarea"}
                          rows={5}
                          className={"mb-3"}
                        />

                        <Form.Label>Project Description (long)</Form.Label>
                        <Form.Control as={"textarea"} rows={15} />
                      </Form.Group>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={12} lg={4} xl={6} className={"order-first order-lg-0"}>
                <Jumbotron className={"d-flex flex-column align-items-center"}>
                  <Form>
                    <Form.Group controlId={"projectImage"}>
                      <Form.Label>Project Image</Form.Label>
                      <Form.Control type={"file"} />
                    </Form.Group>

                    <Form.Group controlId={"projectName"}>
                      <Form.Label>Project Name</Form.Label>
                      <Form.Control
                        type={"text"}
                        placeholder={"Project Name..."}
                      />
                    </Form.Group>

                    <Form.Group controlId={"projectTagline"}>
                      <Form.Label>Project Tagline</Form.Label>
                      <Form.Control
                        type={"text"}
                        placeholder={"Project Tagline..."}
                      />
                    </Form.Group>
                  </Form>

                  <Button variant={"primary"}>Add Project</Button>
                </Jumbotron>
              </Col>

              <Col md={12} lg={4} xl={3}></Col>
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
