import { useState } from "react";

import { Card, Accordion } from 'react-bootstrap';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

interface CollapsibleCardProps {
    children: React.ReactNode
    title: string
    imgSrc: string
    imgDesc: string
    eKey: string
}

const CollapsibleCard = ({children, title, imgSrc, imgDesc, eKey}: CollapsibleCardProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpansion = (e: React.SyntheticEvent) => {
        e.preventDefault();
        setIsExpanded(!isExpanded);
    }

    return (
        <Accordion className={"mb-4"}>
            <Card>
                <Card.Img src={imgSrc} alt={imgDesc}/>

                <Card.Body>
                    <Accordion.Toggle
                        eventKey={eKey}
                        as={Card.Title}
                        onClick={toggleExpansion}
                        className={"d-flex justify-content-between"}
                    >
                        {title}

                        {isExpanded ?
                            <BsChevronUp/>
                            :
                            <BsChevronDown/>
                        }
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey={eKey}>
                        <Card.Text>
                            {children}
                        </Card.Text>
                    </Accordion.Collapse>
                </Card.Body>
            </Card>
        </Accordion>
    )
}

export default CollapsibleCard;