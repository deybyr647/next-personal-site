import { Container, Row, Col, Button } from "react-bootstrap";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";

import styles from "../styles/etc.module.scss";

import Metadata from "../components/Metadata";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";

import notAuth from "../public/unauth.png";

const UnauthorizedContent = () => {
  const router = useRouter();

  return (
    <Container fluid>
      <Row className={"p-0"}>
        <Col xs={2} sm={1} className={"p-0"}>
          <Navigation />
        </Col>

        <Col xs={10} sm={11} className={"p-0 mt-4"}>
          <Container fluid>
            <Row className={"mt-2"}>
              <Col md={12} lg={3}></Col>
              <Col md={12} lg={6} className={"order-first order-lg-0"}>
                <Jumbotron className={"d-flex flex-column align-items-center"}>
                  <Image
                    alt={"Unauthorized"}
                    src={notAuth}
                    className={"rounded-circle"}
                    placeholder={"blur"}
                    width={500}
                    height={500}
                  />

                  <Container className={"text-center mt-4"}>
                    <h2>Restricted Content</h2>

                    <p className={"mt-2 px-3 text-center"}>
                      This page is restricted to authorized users only. <br />
                      To access it, please sign in first.
                    </p>
                  </Container>

                  <Container
                    className={"d-flex flex-row justify-content-between"}
                  >
                    <Button
                      variant={"light"}
                      className={styles.linkButton}
                      onClick={() => router.push("/")}
                    >
                      Return Home
                    </Button>

                    <Button
                      variant={"light"}
                      className={styles.linkButton}
                      onClick={() =>
                        signIn("google", { callbackUrl: "/admin" })
                      }
                    >
                      Sign In
                    </Button>
                  </Container>
                </Jumbotron>
              </Col>
              <Col md={12} lg={3}></Col>
            </Row>
          </Container>

          <Footer />
        </Col>
      </Row>
    </Container>
  );
};

const UnauthorizedPage = () => {
  return (
    <>
      <Metadata title={"Unauthorized"} />
      <UnauthorizedContent />
    </>
  );
};

export default UnauthorizedPage;
