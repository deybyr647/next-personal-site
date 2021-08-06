import { GetStaticPaths, GetStaticProps } from "next";
import { useEffect, useState } from "react";

import { Container, Row, Col, Card, Image } from "react-bootstrap";
import styles from "../../styles/etc.module.css";

import Metadata from "../../components/Metadata";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Jumbotron from "../../components/Jumbotron";
import TechStackCard from "../../components/projects/TechStackCard";

import { strToComponent } from "../../components/projects/TechStackCard";
import { ProjectProps } from "../../components/projects/ProjectCard";
import db from "../../components/firebaseConfig";

const ProjectPageContent = ({ project }: ProjectProps) => {
    const styling = {
        backgroundColor: "#f9f9fa",
    }

    const [techStack, setTechStack] = useState([]);

    useEffect(() => {
        setTechStack(project.techStack.map(strToComponent));
    }, [])

    return (
        <Container fluid>
            <Row className={"p-0"}>
                <Col xs={2} sm={1} className={"p-0"}>
                    <Navigation/>
                </Col>

                <Col xs={10} sm={11} className={"p-0 mt-4"}>
                    <Container fluid>
                        <Row className={"mb-4"}>
                            <Col md={12} lg={4} xl={3}>
                                <Card style={ styling } className={"mb-4"}>
                                    <Card.Img
                                        src={ project.logoSrc }
                                        className={"rounded-circle my-2"}
                                        variant={"top"}
                                    />

                                    <Card.Body>
                                        <Card.Title>{ project.projectName } Bio</Card.Title>

                                        <Card.Text>
                                            { project.longDescription }
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={12} lg={4} xl={6} className={"order-first order-lg-0"}>
                                <Jumbotron className={"d-flex flex-column align-items-center"}>
                                    <h2 className={"text-center"}>About { project.projectName }</h2>

                                    <Image
                                        alt={ project.projectName }
                                        className={"w-100 my-4"}
                                        rounded
                                        src={ project.imgSrc }
                                    />

                                    <h5 className={"text-center font-italic"}>{ project.tagline }</h5>
                                </Jumbotron>

                                <Jumbotron>
                                    <h5 className={"text-center pb-5"}>{ project.projectName } Was Developed With...</h5>

                                    <TechStackCard techArr={ techStack }/>
                                </Jumbotron>
                            </Col>

                            <Col md={12} lg={4} xl={3}>

                                <Card style={ styling } className={"mb-4"}>
                                    <Card.Img
                                        src={"/images/rocketLogo.png"}
                                        className={"w-75 rounded-circle mx-auto my-2"}
                                        alt={"Rocket Logo"}
                                    />

                                    <Card.Body>
                                        <Card.Title>Live Site</Card.Title>

                                        <Card.Text>
                                            See the { project.projectName } project live!
                                        </Card.Text>

                                        <a className={`btn ${ styles.linkButton }`} href={ project.liveDemoLink }>
                                            See Live
                                        </a>
                                    </Card.Body>
                                </Card>

                                <Card style={ styling } className={"mb-4"}>
                                    <Card.Img
                                        src={"/images/gh-logo.png"}
                                        className={"w-75 rounded-circle mx-auto my-2"}
                                        alt={"GitHub Logo"}
                                    />

                                    <Card.Body>
                                        <Card.Title>GitHub</Card.Title>

                                        <Card.Text>
                                            Checkout the { project.projectName } project on GitHub!
                                        </Card.Text>

                                        <a className={`btn ${ styles.linkButton }`} href={ project.githubLink }>
                                            See on GitHub
                                        </a>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>

                    <Footer/>
                </Col>
            </Row>
        </Container>
    )
}

const ProjectPage = ({ data, id }) => {
    return (
        <>
            <Metadata title={ id }/>
            <ProjectPageContent project={ data }/>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async (context) => {
    let routesOut = [];

    const projectsRef = db.collection("projects");
    const allProjects = await projectsRef.get();

    for(const project of allProjects.docs){
        const {projectName} = project.data();
        const route = {
            params: {
                projectid: projectName
            }
        }

        routesOut.push(route);
    }

    return {
        paths: routesOut,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { projectid } = context.params;

    const projectsRef = db.collection("projects");
    const query = await projectsRef.where("projectName", "==", projectid);
    const queryResult = await query.get();

    const project = queryResult.docs[0].data();

    return {
        props: {
            data: project,
            id: projectid,
        },
        revalidate: 60
    }
}

export default ProjectPage;