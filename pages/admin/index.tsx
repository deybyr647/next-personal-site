import { useState, useEffect } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { Container, Row, Col, CardColumns } from "react-bootstrap";

import Metadata from "../../components/Metadata";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Jumbotron from "../../components/Jumbotron";

import ProjectCard from "../../components/projects/ProjectCard";
import styles from "../../styles/etc.module.css";
import { validateUser } from "../../components/admin/util";

const AdminContent = () => {
  const { data: session } = useSession();
  const [projects, setProjects] = useState([]);
  const [authStatus, setAuthStatus] = useState(false);

  useEffect(() => {
    (async () => {
      const req = await fetch("/api/projects");
      const data = await req.json();

      setAuthStatus(await validateUser(session?.user?.email));
      setProjects(data);
    })();
  }, [session?.user?.email]);

  if (!authStatus) {
    return null;
  }

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
  return (
    <>
      <Metadata title={"Admin Home"} />
      <AdminContent />
    </>
  );
};

export default AdminPage;
