import { useState } from 'react';

import { Card, Accordion, Button } from 'react-bootstrap';
import { BsChevronDoubleRight } from 'react-icons/bs';

import styles from '../../styles/etc.module.css';

interface ProjectCardProps {
    project: {
        imgSrc: string
        name: string
        smallDesc: string
        id: string
    }
}

const ProjectCard = ({project}: any) => {
    return (
        <Card>
            <Card.Img src={"/images/about/nodejs.webp"} alt={"nodejs"} className={"w-100"}/>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Card.Link
                    href={"https://deybyr647.com"}
                    className={`btn ${styles.linkButton}`}
                >
                    Learn More
                    &nbsp;
                    <BsChevronDoubleRight/>
                </Card.Link>
            </Card.Body>
        </Card>
    )
}

export default ProjectCard;