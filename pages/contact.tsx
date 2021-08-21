import Image from "next/image";

import { Container, Row, Col } from "react-bootstrap";
import {
  SiNextDotJs,
  SiZeit,
  SiBootstrap,
  SiTypescript,
  SiFirebase,
} from "react-icons/si";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import styles from "../styles/etc.module.css";

import Metadata from "../components/Metadata";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";

import author from "../public/images/me.png";

const ContactContent = () => {
  return (
    <Container fluid>
      <Row className={"p-0"}>
        <Col xs={2} sm={1} className={"p-0"}>
          <Navigation />
        </Col>

        <Col xs={10} sm={11} className={"p-0"}>
          <Container fluid>
            <Row className={"mt-4"}>
              <Col
                md={12}
                lg={3}
                className={"d-flex flex-column justify-content-between"}
              >
                <Jumbotron>
                  <h3>
                    GitHub&nbsp;
                    <FiGithub size={28} className={styles.icon} />
                  </h3>

                  <p>
                    See my latest experiments & projects, along with the
                    technologies I keep up with!
                  </p>

                  <a
                    className={`btn ${styles.linkButton}`}
                    href={"https://github.com/deybyr647"}
                    target={"_blank"}
                    rel={"noopener noreferrer"}
                  >
                    See My GitHub
                  </a>
                </Jumbotron>

                <Jumbotron>
                  <h3>
                    Linkedin&nbsp;
                    <FiLinkedin size={28} className={styles.icon} />
                  </h3>

                  <p>
                    Checkout my career history, my connections, and more
                    information about myself!
                  </p>

                  <a
                    className={`btn ${styles.linkButton}`}
                    href={"https://linkedin.com/in/deyby-rodriguez"}
                    target={"_blank"}
                    rel={"noopener noreferrer"}
                  >
                    See My LinkedIn
                  </a>
                </Jumbotron>
              </Col>

              <Col md={12} lg={6} className={"order-first order-lg-0"}>
                <Jumbotron className={"d-flex flex-column align-items-center"}>
                  <Image
                    alt={"Deyby Rodriguez"}
                    src={author}
                    className={"rounded-circle"}
                    placeholder={"blur"}
                    width={540}
                    height={540}
                  />

                  <Container className={"text-center mt-4"}>
                    <h2>Deyby Rodriguez's</h2>
                    <h3 className={"font-italic"}>External Links</h3>
                  </Container>

                  <p className={"mt-2 px-3 text-center"}>
                    Hey again! <br />
                    Here are some important external links! <br />
                    Use them to further learn about who I am and to get in
                    contact to go out for a coffee or to collaborate on a
                    project!
                  </p>
                </Jumbotron>
              </Col>

              <Col
                md={12}
                lg={3}
                className={"d-flex flex-column justify-content-between"}
              >
                <Jumbotron>
                  <h3>
                    Email&nbsp;
                    <FiMail size={28} className={styles.icon} />
                  </h3>

                  <p>
                    Want to collaborate, or simply have a talk over some coffee?
                    Shoot me an email!
                  </p>

                  <a
                    className={`btn ${styles.linkButton}`}
                    href={"mailto:deybyr647@gmail.com?subject=Hey Deyby!"}
                    target={"_blank"}
                    rel={"noopener noreferrer"}
                  >
                    Email Me
                  </a>
                </Jumbotron>

                <Jumbotron>
                  <h3 className={"mb-4"}>Site Made Using...</h3>

                  <Container className={"d-flex justify-content-between"}>
                    <SiNextDotJs
                      size={"2em"}
                      title={"NextJS"}
                      className={styles.icon}
                    />
                    <SiBootstrap
                      size={"2em"}
                      title={"Bootstrap"}
                      className={styles.icon}
                    />
                  </Container>

                  <Container className={"d-flex justify-content-center my-3"}>
                    <SiTypescript
                      size={"2em"}
                      title={"TypeScript"}
                      className={styles.icon}
                    />
                  </Container>

                  <Container className={"d-flex justify-content-between"}>
                    <SiFirebase
                      size={"2em"}
                      title={"Firebase"}
                      className={styles.icon}
                    />
                    <SiZeit
                      size={"2em"}
                      title={"Vercel"}
                      className={styles.icon}
                    />
                  </Container>
                </Jumbotron>
              </Col>
            </Row>
          </Container>

          <Footer />
        </Col>
      </Row>
    </Container>
  );
};

const ContactPage = () => {
  return (
    <>
      <Metadata title={"Contact"} />
      <ContactContent />
    </>
  );
};

export default ContactPage;
