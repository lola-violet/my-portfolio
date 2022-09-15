import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../../../mainContainer/main.css';
import PjCard from "./PjCard";
import pjs from './pjs';
import './projects.css';

export default function ProjectPage() {
    return(
        <div className="container mainContain">
            <h1>Projects</h1>
            <div>
                <Row xs={1} md={2} lg={3} className='g-4'>
                    {pjs.map((project, index) => (
                        <Col>
                            <PjCard
                                className='d-flex'
                                key={index}
                                pjname={project.pjname}
                                image={project.image}
                                imgalt={project.imgalt}
                                technology={project.technology}
                                description={project.description}
                                // applink={project.applink === null ? '' : project.applink}
                                applink={project.applink}
                                repo={project.repo}
                            />
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    )
}