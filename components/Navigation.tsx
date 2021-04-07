import Link from 'next/link';

import styles from '../styles/etc.module.css';
import { Navbar, Nav, Image } from 'react-bootstrap';
import { BsPerson, BsFileEarmarkText, BsGrid, BsEnvelope } from 'react-icons/bs';

const Navigation = () => {
    return (
        <Navbar expand={"md"} variant={"dark"} className={`d-flex flex-column h-100 align-items-center ${styles.navigation}`}>
            <Navbar.Brand className={"mx-0 p-0 my-3"}>
                <Link href={"/"}>
                    <a>
                        <Image src={"/logo.svg"} className={"w-100"} width={"100px"}/>
                    </a>
                </Link>
            </Navbar.Brand>

            <Nav className={"d-flex text-center flex-column align-items-center"}>
                <Link href={"/about"}>
                    <a className={"nav-link"}>
                        <BsPerson/>
                        <br/>
                        <span className={"d-none d-lg-inline"}>About</span>
                    </a>
                </Link>

                <Link href={"/resume"}>
                    <a className={"nav-link"}>
                        <BsFileEarmarkText/>
                        <br/>
                        <span className={"d-none d-lg-inline"}>Resume</span>
                    </a>
                </Link>

                <Link href={"/portfolio"}>
                    <a className={"nav-link"}>
                        <BsGrid/>
                        <br/>
                        <span className={"d-none d-lg-inline"}>Portfolio</span>
                    </a>
                </Link>

                <Link href={"/contact"}>
                    <a className={"nav-link"}>
                        <BsEnvelope/>
                        <br/>
                        <span className={"d-none d-lg-inline"}>Contact</span>
                    </a>
                </Link>
            </Nav>
        </Navbar>
    )
}

export default Navigation;