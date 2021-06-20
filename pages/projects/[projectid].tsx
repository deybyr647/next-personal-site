import { GetStaticPaths, GetStaticProps } from "next";

import { Container, Row, Col, Card, Image } from "react-bootstrap";

import Metadata from "../../components/Metadata";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Jumbotron from "../../components/Jumbotron";

import db from "../../components/firebaseConfig";
import projects from "../api/projects";

const ProjectPageContent = ({project, projectID}) => {
    return (
        <Container fluid>
            <Row className={"p-0"}>
                <Col xs={2} sm={1} className={"p-0"}>
                    <Navigation/>
                </Col>

                <Col xs={10} sm={11} className={"p-0 mt-4"}>
                    <Container fluid>
                        <Row>
                            <Col>
                                <pre>
                                    {JSON.stringify({project}, null, 4)}
                                </pre>
                            </Col>

                            <Col>
                                <h1>{projectID}</h1>
                            </Col>
                        </Row>
                    </Container>

                    <Footer/>
                </Col>
            </Row>
        </Container>
    )
}

const ProjectPage = ({data, id}) => {
    return (
        <>
            <Metadata title={id}/>
            <ProjectPageContent project={data} projectID={id}/>
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
    const {projectid} = context.params;

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