import { useState, useEffect } from "react";
import Link from "next/link";
import { useSession, signIn } from "next-auth/react";
import { Container, Row, Col, CardColumns } from "react-bootstrap";

import Metadata from "../../components/Metadata";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Jumbotron from "../../components/Jumbotron";

import ProjectCard from "../../components/projects/ProjectCard";
import styles from "../../styles/etc.module.css";

const AdminContent = () => {
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
                  <h2>Project Control Panel</h2>
                  <p className={"mt-4"}>Add, Edit & Delete Projects Here!</p>

                  <Link href={"/admin/addProject"}>
                    <a className={"mx-2 btn btn-primary"}>New Project</a>
                  </Link>
                </Jumbotron>
              </Col>
            </Row>

            <Row>
              <Col>
                <CardColumns>
                  {projects.map((p, ndx) => (
                    <ProjectCard project={p} key={ndx} isAdmin={true} />
                  ))}
                </CardColumns>
              </Col>
            </Row>
          </Container>

          <Footer />
        </Col>
      </Row>
    </Container>
  );
};

const AdminPage = () => {
  const { data: session } = useSession();

  if (session) {
    console.log("Session Object: \n", session);
    return (
      <>
        <Metadata title={"Admin Home"} />
        <AdminContent />
      </>
    );
  } else {
    return (
      <>
        <Container>
          <Row>
            <Col>
              <h1>You're not signed in!</h1>
              <p>Please Sign In</p>
              <button
                onClick={() => signIn("google", { callbackUrl: "/admin" })}
              >
                Sign In
              </button>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
};

export default AdminPage;
