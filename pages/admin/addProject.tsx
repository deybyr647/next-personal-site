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
  return (
    <Container fluid>
      <Row className={"p-0"}>
        <Col xs={2} sm={1} className={"p-0"}>
          <Navigation />
        </Col>

        <Col xs={10} sm={11} className={"p-0 mt-4"}>
          <Container fluid>
            <Jumbotron>
              <h1>Add New Project!</h1>
            </Jumbotron>
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
