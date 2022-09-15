import React from "react";
// import '../../../mainContainer/main.css';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



export default function PjCard(pjs) {
    return(
        <Card>
            <Card.Img variant="top" src={pjs.image} alt={pjs.imgalt}/>
            <Card.Body>
                <Card.Title>{pjs.name}</Card.Title>
                <Card.Text>
                    {pjs.technology}
                    {pjs.description}
                </Card.Text>
                {/* <Card.Link href={pjs.applink}>Application</Card.Link>
                <Card.Link href={pjs.repo}>Repository</Card.Link> */}
                {/* <Button variant="primary">{pjs.applink}</Button>
                <Button variant="primary">{pjs.repo}</Button> */}
            </Card.Body>
            <Card.Footer>
                    <Card.Link href={pjs.applink}>Application</Card.Link>
                    <Card.Link href={pjs.repo}>Repository</Card.Link>
            </Card.Footer>
        </Card>
    )
}