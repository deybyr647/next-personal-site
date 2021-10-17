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

  const [tagline, setTagline] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [techstack, setTechstack] = useState([]);
  const [longDesc, setLongDesc] = useState("");
  const [name, setName] = useState("");
  const [demolink, setDemoLink] = useState("");
  const [ghLink, setGhLink] = useState("");

  const formChangehandler = (e) => {
    e.preventDefault();
    const { id, value } = e.currentTarget;

    if (id == "projectDesc") setLongDesc(value);
    else if (id == "projectName") setName(value);
    else if (id == "projectTechStack") setTechstack(value.split(","));
    else if (id == "projectShortDesc") setShortDesc(value);
    else if (id == "projectGithub") setGhLink(value);
    else if (id == "demoLink") setDemoLink(value);
    else if (id == "projectTagline") setTagline(value);

    console.log(id, value);
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

                      <Form.Group controlId={"projectDesc"}>
                        <Form.Label>Project Description (long)</Form.Label>
                        <Form.Control
                          as={"textarea"}
                          rows={10}
                          value={longDesc}
                          onChange={formChangehandler}
                        />
                      </Form.Group>

                      <Form.Group
                        className={"mb-3"}
                        controlId={"projectShortDesc"}
                      >
                        <Form.Label>Project Description (short)</Form.Label>
                        <Form.Control
                          type={"text"}
                          placeholder={"Short description..."}
                          value={shortDesc}
                          as={"textarea"}
                          rows={5}
                          onChange={formChangehandler}
                        />
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
                        value={name}
                        onChange={formChangehandler}
                      />
                    </Form.Group>

                    <Form.Group controlId={"projectTagline"}>
                      <Form.Label>Project Tagline</Form.Label>
                      <Form.Control
                        type={"text"}
                        placeholder={"Project Tagline..."}
                        value={tagline}
                        onChange={formChangehandler}
                      />
                    </Form.Group>
                  </Form>

                  <Button variant={"primary"}>Add Project</Button>
                </Jumbotron>
              </Col>

              <Col md={12} lg={4} xl={3}>
                <Card style={styling} className={"mb-4"}>
                  <Card.Body>
                    <Card.Title>Project Links</Card.Title>
                    <Form>
                      <Form.Group controlId={"demoLink"} className={"mb-3"}>
                        <Form.Label>Project Demo Link</Form.Label>
                        <Form.Control
                          type={"text"}
                          placeholder={"Demo Link..."}
                          value={demolink}
                          as={"textarea"}
                          rows={5}
                          onChange={formChangehandler}
                        />
                      </Form.Group>

                      <Form.Group
                        className={"mb-3"}
                        controlId={"projectGithub"}
                      >
                        <Form.Label>Project GitHub Repository</Form.Label>
                        <Form.Control
                          type={"text"}
                          placeholder={"GitHub Link..."}
                          value={ghLink}
                          as={"textarea"}
                          rows={5}
                          onChange={formChangehandler}
                        />
                      </Form.Group>

                      <Form.Group
                        className={"mb-3"}
                        controlId={"projectTechStack"}
                      >
                        <Form.Label>Project Tech Stack List</Form.Label>
                        <Form.Control
                          type={"text"}
                          placeholder={
                            "Enter tech used (e.g. ReactJS,NextJS,etc.)..."
                          }
                          value={techstack}
                          as={"textarea"}
                          rows={5}
                          onChange={formChangehandler}
                        />
                      </Form.Group>
                    </Form>
                  </Card.Body>
                </Card>
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
