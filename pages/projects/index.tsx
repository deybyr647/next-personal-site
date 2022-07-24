import { useState, useEffect } from "react";
import { FooterVariant } from "../../components/Footer";
import { Container, Row, Col, CardColumns } from "react-bootstrap";

import Metadata from "../../components/Metadata";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Jumbotron from "../../components/Jumbotron";

import ProjectCard from "../../components/projects/ProjectCard";

const ProjectsContent = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    (async () => {
      let req = await fetch("/api/projects");
      let data = await req.json();

      setProjects(data);
    })();
  }, []);

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
                  <h2>My Projects</h2>
                  <p className={"mt-4"}>
                    As the time passes, this list will only grow. For now, here
                    it my list of creations...
                  </p>
                </Jumbotron>
              </Col>
            </Row>

            <Row>
              <Col>
                <CardColumns>
                  {projects.map((p, ndx) => (
                    <ProjectCard project={p} key={ndx} isAdmin={false} />
                  ))}
                </CardColumns>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

const ProjectsPage = () => {
  return (
    <>
      <Metadata title={"Projects"} />
      <ProjectsContent />
      <Footer variant={FooterVariant.Fixed} />
    </>
  );
};

export default ProjectsPage;
