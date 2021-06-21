import Link from "next/link";

import { Card } from "react-bootstrap";
import { BsChevronDoubleRight } from "react-icons/bs";

import styles from "../../styles/etc.module.css";

interface ProjectCardProps {
    project: {
        githubLink: string
        imgSrc: string
        liveDemoLink: string
        longDescription: string
        projectName: string
        shortDescription: string
    }
}

const ProjectCard = ({project}: ProjectCardProps) => {
    return (
        <Card>
            <Card.Img src={project.imgSrc} alt={project.projectName} className={"border"}/>
            <Card.Body>
                <Card.Title>{project.projectName}</Card.Title>

                <Card.Text>
                    {project.shortDescription}
                </Card.Text>

                <Link href={`/projects/${project.projectName}`}>
                    <a className={`btn ${styles.linkButton}`}>
                        Learn More
                        &nbsp;
                        <BsChevronDoubleRight/>
                    </a>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default ProjectCard;