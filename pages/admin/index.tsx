import { useState, useEffect } from "react";
import Link from "next/link";
import { useSession, getSession } from "next-auth/react";
import { Container, Row, Col, CardColumns } from "react-bootstrap";
import { GetServerSideProps } from "next";

import Metadata from "../../components/Metadata";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Jumbotron from "../../components/Jumbotron";

import ProjectCard from "../../components/projects/ProjectCard";
import styles from "../../styles/etc.module.css";

const AdminContent = () => {
  const { data: session } = useSession();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    (async () => {
      const req = await fetch("/api/projects");
      const data = await req.json();

      setProjects(data);
    })();
  }, []);

  if (!session) return <div>You are not logged in!</div>;

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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx);

  return {
    props: {
      session,
    },
  };
};

const AdminPage = ({ session }) => {
  return (
    <>
      <Metadata title={"Admin Home"} />
      <AdminContent />
    </>
  );
};

export default AdminPage;
