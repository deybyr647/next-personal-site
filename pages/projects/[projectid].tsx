import { GetServerSideProps } from "next";

import { Container, Row, Col, Card, Jumbotron, Image } from "react-bootstrap";

import Metadata from "../../components/Metadata";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const ProjectPageContent = ({project, projectID, err}) => {
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
                                    {JSON.stringify({project, err}, null, 4)}
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

const ProjectPage = ({data, id, error}) => {
    return (
        <>
            <Metadata title={"null"}/>
            <ProjectPageContent project={data} projectID={id} err={error}/>
        </>
    )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
    const { projectid } = context.query;

    try {
        let req = await fetch("http://localhost:3000/api/db");
        let res = await req.json();

        return {
            props: {
                data: res,
                id: projectid,
                error: null
            }
        }
    } catch(err) {
        console.error(err);

        return {
            props: {
                data: null,
                error: err.toString(),
                id: projectid
            }
        }
    }
}

export default ProjectPage;