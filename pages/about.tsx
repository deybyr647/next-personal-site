import { Container, Row, Col, Image, Jumbotron } from 'react-bootstrap';

import Metadata from '../components/Metadata';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

import CollapsibleCard from "../components/about/CollapsibleCard";

const AboutContent = () => {
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
                                <Row className={"d-flex flex-column align-items-center"}>
                                    <Col>
                                        <Jumbotron>
                                            <h1>Hobbies</h1>
                                        </Jumbotron>
                                    </Col>

                                    <Col>
                                        <CollapsibleCard
                                            title={"Investing"}
                                            imgSrc={"https://g.foolcdn.com/editorial/images/620816/stock-up-glowing-green-arrow-climbs-on-a-stock-screen.jpg"}
                                            imgDesc={"Stock Graph"}
                                            eKey={"0"}
                                        >
                                            lore ipsum dolor etc bom bom
                                        </CollapsibleCard>

                                        <CollapsibleCard
                                            title={"Learning & Teaching"}
                                            imgSrc={"https://edsurge.imgix.net/uploads/post/image/13456/rocket_launching_from_book-1591395298.jpg?auto=compress%2Cformat&w=1024&h=512&fit=crop"}
                                            imgDesc={"Learning Art"}
                                            eKey={"0"}
                                        >
                                            lore ipsum dolor etc bom bom
                                        </CollapsibleCard>

                                        <CollapsibleCard
                                            title={"Reading"}
                                            imgSrc={"https://dcmep4q5dgnih.cloudfront.net/wp-content/uploads/2019/08/26141320/Reflecting-through-stages-of-Reading-1024x683.jpg"}
                                            imgDesc={"Reading Book"}
                                            eKey={"0"}
                                        >
                                            lorem ipsum dolor bom bom
                                        </CollapsibleCard>

                                        <CollapsibleCard
                                            title={"Programming"}
                                            imgSrc={"https://content.techgig.com/thumb/msid-79844104,width-860,resizemode-4/5-Best-programming-languages-to-learn-in-2021.jpg?140622"}
                                            imgDesc={"Programming"}
                                            eKey={"0"}
                                        >
                                            lorem ipsum dolor bom bom
                                        </CollapsibleCard>
                                    </Col>
                                </Row>
                            </Col>

                            <Col md={12} lg={4} xl={6} className="order-first order-lg-0">
                                <Jumbotron className={`d-flex flex-column align-items-center`}>
                                    <Image src={"/images/IMG_0013.jpg"} className={"w-100"} roundedCircle/>
                                    <Container className={"text-center mt-4"}>
                                        <h1>Deyby Rodriguez</h1>
                                        <h5 className={"font-italic"}>Who I Am</h5>
                                    </Container>

                                    <p className={"mt-2 px-3"}>
                                        Hi there! Welcome to my website!
                                        My name is Deyby Rodriguez, and I'm
                                        currently a student at New York Institute of
                                        Technology
                                    </p>
                                </Jumbotron>
                            </Col>

                            <Col>
                                <Jumbotron>
                                    <h1>Skills</h1>
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

const AboutPage = () => {
    return (
        <>
            <Metadata title={"About"}/>
            <AboutContent/>
        </>
    )
}

export default AboutPage;