import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession, getSession } from "next-auth/react";
import { Container, Row, Col, CardColumns } from "react-bootstrap";
import { GetServerSideProps } from "next";

import Metadata from "../../components/Metadata";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Jumbotron from "../../components/Jumbotron";

import ProjectCard, {
  ProjectProps,
} from "../../components/projects/ProjectCard";
import styles from "../../styles/etc.module.scss";

const AdminContent = () => {
  const { data: session } = useSession();
  const [projects, setProjects] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (!session) router.push("/unauthorized");
    (async () => {
      const req = await fetch("/api/projects");
      const data = await req.json();

      setProjects(data);
    })();
  }, [router, session]);

  if (!session) return <div>Loading...</div>;

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
                    <a className={`mx-2 btn ${styles.linkButton}`}>
                      New Project
                    </a>
                  </Link>
                </Jumbotron>
              </Col>
            </Row>

            <Row>
              <Col>
                <CardColumns>
                  {projects.map((p: ProjectProps["project"], ndx: number) => (
                    <ProjectCard project={p} key={ndx} isAdmin={true} />
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
      <Footer />
    </>
  );
};

export default AdminPage;
