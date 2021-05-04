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
                                        <Jumbotron className={"text-center"}>
                                            <h1>Hobbies</h1>
                                        </Jumbotron>
                                    </Col>

                                    <Col>
                                        <CollapsibleCard
                                            title={"Investing"}
                                            imgSrc={"https://g.foolcdn.com/editorial/images/620816/stock-up-glowing-green-arrow-climbs-on-a-stock-screen.jpg"}
                                            imgDesc={"Stock Graph"}
                                        >
                                            Finance, along with business, has always been an interest of mine.
                                            I love to experiment with what the market has to offer, like stocks
                                            from some of my favorite companies and cryptocurrency. For the most part,
                                            I trade stocks with Robinhood.
                                        </CollapsibleCard>

                                        <CollapsibleCard
                                            title={"Learning & Teaching"}
                                            imgSrc={"https://edsurge.imgix.net/uploads/post/image/13456/rocket_launching_from_book-1591395298.jpg?auto=compress%2Cformat&w=1024&h=512&fit=crop"}
                                            imgDesc={"Learning Art"}
                                        >
                                            I truly love to learn and can happily say I've learnt most of what
                                            I know through self teaching and experimentation. I also enjoy sharing
                                            my knowledge with my friends, as I end up understanding what I'm teaching
                                            on a deeper level.
                                        </CollapsibleCard>

                                        <CollapsibleCard
                                            title={"Reading"}
                                            imgSrc={"https://dcmep4q5dgnih.cloudfront.net/wp-content/uploads/2019/08/26141320/Reflecting-through-stages-of-Reading-1024x683.jpg"}
                                            imgDesc={"Reading Book"}
                                        >
                                            I enjoy curling up with a good book when the rare opportunity arises.
                                            Some of my favorites are <i>Frankenstein</i> and books from the
                                            <i> Harry Potter</i> series. I also love to read programming books
                                            to pick up a new skill.
                                        </CollapsibleCard>

                                        <CollapsibleCard
                                            title={"Programming"}
                                            imgSrc={"https://content.techgig.com/thumb/msid-79844104,width-860,resizemode-4/5-Best-programming-languages-to-learn-in-2021.jpg?140622"}
                                            imgDesc={"Programming"}
                                        >
                                            Of course, programming is also one of my favorite things to do. I
                                            tend to find myself at peace when I'm writing code. Even when I find
                                            myself stuck in a roadblock, I still enjoy finding my way around it.
                                        </CollapsibleCard>
                                    </Col>

                                    <Col>
                                        <Jumbotron className={"text-center"}>
                                            <h1>Experiences</h1>
                                        </Jumbotron>
                                    </Col>

                                    <Col>
                                        <CollapsibleCard
                                            title={"Google Code Next NYC"}
                                            imgSrc={"https://mikevantassell.com/wp-content/uploads/2019/03/google-code-next-nyc-interior-architecture-0020.jpg"}
                                            imgDesc={"Code Next Lab NYC"}
                                        >

                                        </CollapsibleCard>

                                        {/*<CollapsibleCard
                                            title={}
                                            imgSrc={}
                                            imgDesc={}
                                        >

                                        </CollapsibleCard>

                                        <CollapsibleCard
                                            title={}
                                            imgSrc={}
                                            imgDesc={}
                                        >

                                        </CollapsibleCard>*/}
                                    </Col>
                                </Row>
                            </Col>

                            <Col md={12} lg={4} xl={6} className="order-first order-lg-0">
                                <Row className={"d-flex flex-column"}>
                                    <Col>
                                        <Jumbotron className={`d-flex flex-column align-items-center`}>
                                            <Image src={"/images/IMG_0013.jpg"} className={"w-100"} roundedCircle/>
                                            <Container className={"text-center mt-4"}>
                                                <h2>Deyby Rodriguez</h2>
                                                <h5 className={"font-italic"}>Natural Problem Solver</h5>
                                            </Container>

                                            <p className={"mt-2 px-3"}>
                                                Hi there! Welcome to my website!
                                                My name is Deyby Rodriguez, and I'm
                                                currently a student at New York Institute of
                                                Technology. Here you can learn a little bit
                                                more about who I am and what I'm into, as well
                                                as past meaningful experiences. Lastly, if
                                                you're looking to get in touch, all my contact
                                                information is readily available here!
                                            </p>
                                        </Jumbotron>
                                    </Col>

                                    <Col>
                                        <Jumbotron className={"d-flex flex-column align-items-center"}>
                                            <Image src={"https://www.nyit.edu/files/scea/RGB_color_NYIT_logo.png"} className={"w-100 bg-white p-3"} rounded/>
                                            <Image src={"https://upload.wikimedia.org/wikipedia/en/thumb/7/78/NYIT_Bears_logo.svg/1200px-NYIT_Bears_logo.svg.png"} className={"w-50 mt-5"}/>
                                            <Container className={"mt-4 text-center font-italic"}>
                                                <h2>Proud Bear</h2>
                                                <h4>Major in Computer Science</h4>
                                                <h4>Minor in Business</h4>
                                                <h2>2021-2025</h2>
                                            </Container>

                                            <p className={"mt-2 px-3"}>
                                                I'm studying computer science in hopes of having a professinal career
                                                working in either Front-End, Back-End, or Full-Stack Web development.
                                                Whether I work with an established company or a startup, that is my end
                                                goal. I decided to pursue this with a business minor, as I aspire to
                                                one day have a tech-focused business of my own in the future. So far, I
                                                plan to build this business either around software consulting, or as an
                                                organization dedicated to computer science education within high school
                                                students.
                                            </p>
                                        </Jumbotron>
                                    </Col>
                                </Row>
                            </Col>

                            <Col>
                                <Row className={"d-flex flex-column align-items-center"}>
                                    <Col>
                                        <Jumbotron className={"text-center"}>
                                            <h1>Skills</h1>
                                        </Jumbotron>
                                    </Col>

                                    <Col>
                                        <CollapsibleCard
                                            title={"TypeScript"}
                                            imgSrc={"https://miro.medium.com/max/3840/1*3bHNjGdX_kTIhZM13Nuabg.png"}
                                            imgDesc={"TypeScript"}
                                        >
                                            My language of choice for all projects and experiments,
                                            along with JavaScript. I have thorough experience working
                                            with ES6, along with various libraries, such as React.
                                        </CollapsibleCard>

                                        <CollapsibleCard
                                            title={"NodeJS"}
                                            imgSrc={"https://buddy.works/guides/covers/test-nodejs-app/share-nodejs-logo.png"}
                                            imgDesc={"NodeJS"}
                                        >
                                            The runtime behind all my projects. I use NodeJS in conjuction
                                            with other libraries/frameworks, and for some Back-End development
                                            as well.
                                        </CollapsibleCard>

                                        <CollapsibleCard
                                            title={"NextJS"}
                                            imgSrc={"https://miro.medium.com/max/2880/1*2tmzU7bve-VlTkOMWsk_Hw.jpeg"}
                                            imgDesc={"NextJS"}
                                        >
                                            My favorite Front-End JavaScript framework. I love NextJS because of how it
                                            builds upon my favorite library, React. NextJS is at the core of my
                                            more recent projects, like this website!
                                        </CollapsibleCard>

                                        <CollapsibleCard
                                            title={"Bootstrap"}
                                            imgSrc={"https://miro.medium.com/max/1400/1*MD4sw9im4sftZA5u6mfFSg.png"}
                                            imgDesc={"Bootstrap"}
                                        >
                                            For styling my websites and web apps. I love Bootstrap's easy to use
                                            responsive grid layout, along with it's variety of components. I stick to
                                            styling with Bootstrap for all of my projects, unless I have a more complex
                                            visual implemented.
                                        </CollapsibleCard>
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

const AboutPage = () => {
    return (
        <>
            <Metadata title={"About"}/>
            <AboutContent/>
        </>
    )
}

export default AboutPage;