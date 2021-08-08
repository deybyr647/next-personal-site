import { GetStaticPaths, GetStaticProps } from "next";
import { useEffect, useState, SyntheticEvent } from "react";

import { Container, Row, Col, Card, Image, Form } from "react-bootstrap";

import Metadata from "../../components/Metadata";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Jumbotron from "../../components/Jumbotron";

import { ProjectProps } from "../../components/projects/ProjectCard";
import db from "../../components/firebaseConfig";

const EditProjectContent = ({ project }: ProjectProps) => {
    const styling = {
        backgroundColor: "#f9f9fa",
    }

    const [tagline, setTagline] = useState('');
    const [shortDesc, setShortDesc] = useState('');
    const [techstack, setTechstack] = useState([]);
    const [longDesc, setLongDesc] = useState('');
    const [projectName, setProjectName] = useState('');
    const [demolink, setDemoLink] = useState('');
    const [githubLink, setGithubLink] = useState('');

    const formChangehandler = (e) => {
        e.preventDefault();
        const { id, value } = e.currentTarget;

        if(id == "projectDesc") setLongDesc(value)
        else if(id == "projectName") setProjectName(value)
        else if(id == "projectTechStack") setTechstack(value.split(','))
        else if(id == "projectShortDesc") setShortDesc(value)
        else if(id == "projectGithub") setGithubLink(value)
        else if(id == "demoLink") setDemoLink(value)
        else if(id == "projectTagline") setTagline(value)
    }

    useEffect(() => {
        setTagline(project.tagline);
        setShortDesc(project.shortDescription);
        setDemoLink(project.liveDemoLink);
        setGithubLink(project.githubLink);
        setProjectName(project.projectName);
        setTechstack(project.techStack);
        setLongDesc(project.longDescription);
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
                                        <Card.Title>{ projectName } Bio</Card.Title>
                                        <Form>
                                            <Form.Group controlId={"projectLogo"} className={"mb-3"}>
                                                <Form.Label>Project Logo Image</Form.Label>
                                                <Form.Control type={"file"} />
                                            </Form.Group>

                                            <Form.Group className={"mb-3"} controlId={"projectDesc"}>
                                                <Form.Label>Project Description (long)</Form.Label>
                                                <Form.Control
                                                    as={"textarea"}
                                                    rows={15}
                                                    value={ longDesc }
                                                    onChange={formChangehandler}
                                                />
                                            </Form.Group>
                                        </Form>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={12} lg={4} xl={6} className={"order-first order-lg-0"}>
                                <Jumbotron className={"d-flex flex-column align-items-center"}>
                                    <Image
                                        alt={ project.projectName }
                                        className={"w-100 my-4"}
                                        rounded
                                        src={ project.imgSrc }
                                    />

                                    <Form>
                                        <Form.Group controlId={"projectImage"}>
                                            <Form.Label>Project Logo Image</Form.Label>
                                            <Form.Control type={"file"} />
                                        </Form.Group>

                                        <Form.Group controlId={"projectName"}>
                                            <Form.Label>Project Name</Form.Label>
                                            <Form.Control
                                                type={"text"}
                                                placeholder={"Project Name..."}
                                                value={ projectName }
                                                onChange={formChangehandler}
                                            />
                                        </Form.Group>

                                        <Form.Group controlId={"projectTagline"}>
                                            <Form.Label>Project Tagline</Form.Label>
                                            <Form.Control
                                                type={"text"}
                                                placeholder={"Project Tagline..."}
                                                value={ tagline }
                                                onChange={formChangehandler}
                                            />
                                        </Form.Group>
                                    </Form>
                                </Jumbotron>
                            </Col>

                            <Col md={12} lg={4} xl={3}>
                                <Card style={ styling } className={"mb-4"}>
                                    <Card.Body>
                                        <Card.Title>Project Links</Card.Title>
                                        <Form>
                                            <Form.Group controlId={"demoLink"} className={"mb-3"}>
                                                <Form.Label>Project Demo Link</Form.Label>
                                                <Form.Control
                                                    type={"text"}
                                                    placeholder={"Demo Link..."}
                                                    value={ demolink }
                                                    as={"textarea"}
                                                    rows={5}
                                                    onChange={formChangehandler}
                                                />
                                            </Form.Group>

                                            <Form.Group className={"mb-3"} controlId={"projectGithub"}>
                                                <Form.Label>Project GitHub Repository</Form.Label>
                                                <Form.Control
                                                    type={"text"}
                                                    placeholder={"GitHub Link..."}
                                                    value={ githubLink }
                                                    as={"textarea"}
                                                    rows={5}
                                                    onChange={formChangehandler}
                                                />
                                            </Form.Group>

                                            <Form.Group className={"mb-3"} controlId={"projectShortDesc"}>
                                                <Form.Label>Project Description (short)</Form.Label>
                                                <Form.Control
                                                    type={"text"}
                                                    placeholder={"Short description..."}
                                                    value={ shortDesc }
                                                    as={"textarea"}
                                                    rows={5}
                                                    onChange={formChangehandler}
                                                />
                                            </Form.Group>

                                            <Form.Group className={"mb-3"} controlId={"projectTechStack"}>
                                                <Form.Label>Project Tech Stack List</Form.Label>
                                                <Form.Control
                                                    type={"text"}
                                                    placeholder={"Enter tech used (e.g. ReactJS,NextJS,etc.)..."}
                                                    value={ techstack }
                                                    as={"textarea"}
                                                    rows={5}
                                                    onChange={formChangehandler}
                                                />
                                            </Form.Group>
                                        </Form>
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
            <EditProjectContent project={ data } isAdmin={false}/>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async (context) => {
    let routesOut = [];

    const projectsRef = db.collection("projects");
    const allProjects = await projectsRef.get();

    for(const project of allProjects.docs){
        const { projectName } = project.data();
        const route = {
            params: {
                projectid: projectName
            }
        }

        routesOut.push(route);
    }

    return {
        paths: routesOut,
        fallback: "blocking"
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
        revalidate: 30
    }
}

export default ProjectPage;