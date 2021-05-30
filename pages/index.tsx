import Link from "next/link";

import { Container, Row, Col, Image, Jumbotron } from "react-bootstrap";
import styles from "../styles/etc.module.css";

import Metadata from "../components/Metadata";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const LandingContent = () => {
    return (
        <Container fluid>
            <Row className={"p-0"}>
                <Col xs={2} sm={1} className={"p-0"}>
                    <Navigation/>
                </Col>

                <Col xs={10} sm={11} className={"p-0"}>
                    <Container fluid>
                        <Row className={"d-flex flex-column"}>
                            <Col>
                                <Jumbotron className={`d-flex flex-column align-items-center mt-4`}>
                                    <Image
                                        alt={"Deyby Rodriguez"}
                                        src={"/images/about/me.webp"}
                                        className={"w-75"}
                                        roundedCircle
                                    />
                                    
                                    <Container className={"text-center mt-4"}>
                                        <h2>Deyby Rodriguez</h2>
                                        <h5 className={"font-italic"}>Web Developer</h5>
                                    </Container>

                                    <p className={"mt-2 px-3 text-center"}>
                                        Welcome to my website! <br/>
                                        Feel free to look around my site & at my projects! <br/>
                                        If you're looking to collaborate on a project with me,
                                        feel free to get in touch with me!
                                    </p>
                                </Jumbotron>
                            </Col>

                            <Col>
                                <Row>
                                    <Col xs={12} lg={4}>
                                        <Jumbotron>
                                            <h3>Projects</h3>
                                            <p>
                                                See a list of the projects I've
                                                previously worked on, along with
                                                the exciting ones I've currently been
                                                working on!
                                            </p>

                                            <Link href={"/projects"}>
                                                <a
                                                    className={`btn ${styles.linkButton}`}
                                                >
                                                    See My Projects
                                                </a>
                                            </Link>
                                        </Jumbotron>
                                    </Col>

                                    <Col xs={12} lg={4}>
                                        <Jumbotron>
                                            <h3>About Me</h3>
                                            <p>
                                                Learn about who I am,
                                                where I've been, and what
                                                I'm into, besides web
                                                development and technology
                                                of course!
                                            </p>

                                            <Link href={"/about"}>
                                                <a
                                                    className={`btn ${styles.linkButton}`}
                                                >
                                                    Learn About Me
                                                </a>
                                            </Link>
                                        </Jumbotron>
                                    </Col>

                                    <Col xs={12} lg={4}>
                                        <Jumbotron>
                                            <h3>Contact</h3>
                                            <p>
                                                Looking to collaborate on a project
                                                or for a quick chat about something?
                                                Don't hesitate to get in touch with me!
                                            </p>

                                            <Link href={"/contact"}>
                                                <a
                                                    className={`btn ${styles.linkButton}`}
                                                >
                                                    Get In Touch
                                                </a>
                                            </Link>
                                        </Jumbotron>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>

                    <Footer/>
                </Col>
            </Row>
        </Container>
    )
}

const LandingPage = () => {
    return (
        <>
            <Metadata title={"Deyby Rodriguez"}/>
            <LandingContent/>
        </>
    )
}

export default LandingPage;