import Image from "next/image";

import { Container, Row, Col } from "react-bootstrap";

import Metadata from "../components/Metadata";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

import Jumbotron from "../components/Jumbotron";
import CollapsibleCard from "../components/about/CollapsibleCard";

import author from "../public/images/me.png";
import stocksImg from "../public/images/about/stocks.png";
import rocketImg from "../public/images/about/rocket.png";
import bookImg from "../public/images/about/reading.png";
import programmingImg from "../public/images/about/programming.png";
import codenextImg from "../public/images/about/codenext.png";
import ascImg from "../public/images/about/asc.png";
import firebaseImg from "../public/images/about/firebase.png";
import nyitImg from "../public/images/about/nyit.png";
import bearLogo from "../public/images/about/bears.png";
import nodejsImg from "../public/images/about/node.png";
import nextjsImg from "../public/images/about/next.png";
import bsImg from "../public/images/about/bootstrap.png";
import tscImg from "../public/images/about/typescript.png";
import htmlImg from "../public/images/about/htmlcss.png";
import jsImg from "../public/images/about/javascript.png";

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
                                            <h3>Hobbies</h3>
                                        </Jumbotron>
                                    </Col>

                                    <Col>
                                        <CollapsibleCard
                                            title={"Investing"}
                                            imgSrc={stocksImg}
                                            imgDesc={"Stock Graph"}
                                        >
                                            Finance, along with business, has always been an interest of mine.
                                            I love to experiment with what the market has to offer, like stocks
                                            from some of my favorite companies and cryptocurrency. For the most part,
                                            I trade stocks with Robinhood.
                                        </CollapsibleCard>

                                        <CollapsibleCard
                                            title={"Learning & Teaching"}
                                            imgSrc={rocketImg}
                                            imgDesc={"Learning Art"}
                                        >
                                            I truly love to learn and can happily say I've learnt most of what
                                            I know through self teaching and experimentation. I also enjoy sharing
                                            my knowledge with my friends, as I end up understanding what I'm teaching
                                            on a deeper level.
                                        </CollapsibleCard>

                                        <CollapsibleCard
                                            title={"Reading"}
                                            imgSrc={bookImg}
                                            imgDesc={"Reading Book"}
                                        >
                                            I enjoy curling up with a good book when the rare opportunity arises.
                                            Some of my favorites are <i>Frankenstein</i> and books from the
                                            <i> Harry Potter</i> series. I also love to read programming books
                                            to pick up a new skill.
                                        </CollapsibleCard>

                                        <CollapsibleCard
                                            title={"Programming"}
                                            imgSrc={programmingImg}
                                            imgDesc={"Programming"}
                                        >
                                            Of course, programming is also one of my favorite things to do. I
                                            tend to find myself at peace when I'm writing code. Even when I find
                                            myself stuck in a roadblock, I still enjoy finding my way around it.
                                        </CollapsibleCard>
                                    </Col>

                                    <Col>
                                        <Jumbotron className={"text-center"}>
                                            <h3>Meaningful Experiences</h3>
                                        </Jumbotron>
                                    </Col>

                                    <Col>
                                        <CollapsibleCard
                                            title={"Google Code Next"}
                                            imgSrc={codenextImg}
                                            imgDesc={"Code Next Lab NYC"}
                                            link={"https://codenext.withgoogle.com"}
                                        >
                                            Code Next is a program by Google that is designed to have high school
                                            students break into the field of computer science.
                                            I joined in the Fall of 2019, and can say this has been my most
                                            meaningful and influential experience. Joining has helped me grow as a person,
                                            and has helped me acquire valuable industry connections and knowledge.
                                            Participating in Code Next has even connected me to other great opportunities,
                                            like All Star Code. I only wish I had known of the program's existence sooner, as 2021 will be my last
                                            year within the program.
                                        </CollapsibleCard>

                                        <CollapsibleCard
                                            title={"All Star Code"}
                                            imgSrc={ascImg}
                                            imgDesc={"All Star Code logo"}
                                            link={"https://allstarcode.org"}
                                        >
                                            Like Code Next, All Star Code specializes in getting male high school students
                                            up to speed with computer science and entrepreneurship. I took part in All Star Code's
                                            Summer Intensive in the summer of 2020. I'm very grateful for having taken part in All
                                            Star Code, as this opportunity helped me find my niche within computer science, which is web development.
                                            Since then, I have remained active as an alumni, taking part in hackathons, conferences with
                                            important faces in tech, and even employment opportunities at All Star Code.
                                        </CollapsibleCard>
                                    </Col>
                                </Row>
                            </Col>

                            <Col md={12} lg={4} xl={6} className={"order-first order-lg-0"}>
                                <Row className={"d-flex flex-column"}>
                                    <Col>
                                        <Jumbotron className={`d-flex flex-column align-items-center`}>
                                            <Image
                                                src={author}
                                                className={"rounded-circle"}
                                                alt={"Deyby Rodriguez"}
                                                width={540}
                                                height={540}
                                            />
                                            <Container className={"text-center mt-4"}>
                                                <h2>Deyby Rodriguez</h2>
                                                <h3 className={"font-italic"}>Web Developer</h3>
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
                                            <Image
                                                src={nyitImg}
                                                className={"bg-white p-3 rounded"}
                                                alt={"NYIT Logo"}
                                            />
                                            <Image
                                                src={bearLogo}
                                                className={"mt-2 p-3 rounded"}
                                                alt={"NYIT Bear"}
                                            />
                                            <Container className={"mt-4 text-center font-italic"}>
                                                <h2>Proud Bear</h2>
                                                <h3>2021-2025</h3>
                                                <h4>Major in Computer Science</h4>
                                                <h4>Minor in Business</h4>
                                            </Container>

                                            <p className={"mt-2 px-3"}>
                                                I'm studying computer science in hopes of having a professional career
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
                                            <h3>Skills</h3>
                                        </Jumbotron>
                                    </Col>

                                    <Col>
                                        <CollapsibleCard
                                            title={"TypeScript"}
                                            imgSrc={tscImg}
                                            imgDesc={"TypeScript"}
                                        >
                                            My language of choice for all projects and experiments,
                                            along with JavaScript. I love working with TypeScript
                                            because of how it builds on top of my favorite language
                                            using stricter rules and static typing, allowing me to
                                            squash bugs and write cleaner, more declarative code!
                                        </CollapsibleCard>

                                        <CollapsibleCard
                                            title={"NodeJS"}
                                            imgSrc={nodejsImg}
                                            imgDesc={"NodeJS"}
                                        >
                                            The runtime behind all my projects. I use NodeJS in conjunction
                                            with other libraries/frameworks, and for some Back-End development
                                            as well.
                                        </CollapsibleCard>

                                        <CollapsibleCard
                                            title={"NextJS"}
                                            imgSrc={nextjsImg}
                                            imgDesc={"NextJS"}
                                        >
                                            My favorite Front-End JavaScript framework. I love NextJS because of how it
                                            builds upon my favorite library, React. NextJS is at the core of my
                                            more recent projects, like this website! Features like built-in routing,
                                            API routes & server side rendering have solidified NextJS as my go-to
                                            technology for projects!
                                        </CollapsibleCard>

                                        <CollapsibleCard
                                            title={"Bootstrap"}
                                            imgSrc={bsImg}
                                            imgDesc={"Bootstrap"}
                                        >
                                            For styling my websites and web apps. I love Bootstrap's easy to use
                                            responsive grid layout, along with it's variety of components. I stick to
                                            styling with Bootstrap for all of my projects, unless I have a more complex
                                            visual implemented.
                                        </CollapsibleCard>

                                        <CollapsibleCard
                                            title={"Firebase"}
                                            imgSrc={firebaseImg}
                                            imgDesc={"Google Firebase"}
                                        >
                                            My go-to platform for development. I love how straight-forward and easy
                                            to use Firebase is as a whole. I've used Firebase Hosting for a majority of my projects,
                                            and use Firebase's Firestore as my preferred NoSQL database for my projects, such as this site!
                                            I also have experience working with other Firebase platform products, such as the Real-Time
                                            database, Firebase OAUTH, and Firebase Cloud Storage.
                                        </CollapsibleCard>

                                        <CollapsibleCard
                                            title={"JavaScript (ES6+)"}
                                            imgSrc={jsImg}
                                            imgDesc={"JavaScript Logo"}
                                        >
                                            The first programming language I stumbled upon! Although I prefer working with
                                            TypeScript, I still use JavaScript for quick experiments!
                                            I have thorough experience with the language, along with frameworks/libraries, such as
                                            ReactJS & ThreeJS!
                                        </CollapsibleCard>

                                        <CollapsibleCard
                                            title={"HTML & CSS"}
                                            imgSrc={htmlImg}
                                            imgDesc={"HTML & CSS Logos"}
                                        >
                                            HTML & CSS are at the core of all my web projects! I have experience in writing
                                            semantic web pages with HTML5, and have experience in responsive web design
                                            using CSS3 !
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