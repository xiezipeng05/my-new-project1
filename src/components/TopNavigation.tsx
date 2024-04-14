import { Navbar } from 'flowbite-react';
import React from 'react';

const TopNavbar: React.FC = () => {

    return (
        <Navbar fluid={true} rounded={true}>
            <Navbar.Brand href="/">
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    高校排名网站
                </span>
            </Navbar.Brand>
            <Navbar.Collapse>
                <Navbar.Link href="/" active={true}>
                    专业排名
                </Navbar.Link>
                <Navbar.Link href="/about">关于我们</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default TopNavbar;
