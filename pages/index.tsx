import Link from "next/link";
import Image from "next/image";

import { Container, Row, Col } from "react-bootstrap";
import { SiNextDotJs, SiZeit, SiBootstrap, SiTypescript, SiFirebase } from "react-icons/si";
import styles from "../styles/etc.module.css";

import Metadata from "../components/Metadata";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";

import author from "../public/images/about/me.png";

const LandingContent = () => {
    return (
        <Container fluid>
            <Row className={"p-0"}>
                <Col xs={2} sm={1} className={"p-0"}>
                    <Navigation/>
                </Col>

                <Col xs={10} sm={11} className={"p-0"}>
                    <Container fluid>
                        <Row className={"mt-4"}>
                            <Col md={12} lg={3} className={"d-flex flex-column justify-content-between"}>
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

                                <Jumbotron>
                                    <h3>Contact</h3>

                                    <p>
                                        Looking to collaborate on a project or for a quick chat about something?
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

                            <Col md={12} lg={6} className={"order-first order-lg-0"}>
                                <Jumbotron className={`d-flex flex-column align-items-center`}>
                                    <Image
                                        alt={"Deyby Rodriguez"}
                                        src={author}
                                        className={"rounded-circle"}
                                        placeholder={"blur"}
                                    />

                                    <Container className={"text-center mt-4"}>
                                        <h2>Deyby Rodriguez's</h2>
                                        <h3 className={"fst-italic"}>Personal Website</h3>
                                    </Container>

                                    <p className={"mt-2 px-3 text-center"}>
                                        Welcome to my website! <br/>
                                        Feel free to look around my site & at my projects! <br/>
                                        If you're looking to collaborate on a project with me,
                                        feel free to get in touch with me!
                                    </p>
                                </Jumbotron>
                            </Col>

                            <Col md={12} lg={3} className={"d-flex flex-column justify-content-between"}>
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

                                <Jumbotron>
                                    <h3 className={"mb-4"}>Site Made Using...</h3>

                                    <Container className={"d-flex justify-content-between"}>
                                        <SiNextDotJs size={"2em"} title={"NextJS"} className={styles.icon}/>
                                        <SiBootstrap size={"2em"} title={"Bootstrap"} className={styles.icon}/>
                                    </Container>

                                    <Container className={"d-flex justify-content-center my-3"}>
                                        <SiTypescript size={"2em"} title={"TypeScript"} className={styles.icon}/>
                                    </Container>

                                    <Container className={"d-flex justify-content-between"}>
                                        <SiFirebase size={"2em"} title={"Firebase"} className={styles.icon}/>
                                        <SiZeit size={"2em"} title={"Vercel"} className={styles.icon}/>
                                    </Container>
                                </Jumbotron>
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