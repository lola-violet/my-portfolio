import React from "react";
// import '../../../mainContainer/main.css';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



export default function PjCard(pjs) {
    return(
        <Card>
            <Card.Img variant="top" src={pjs.image} alt={pjs.imgalt}/>
            <Card.Body>
                <Card.Title className="customCardTitle" >{pjs.pjname}</Card.Title>
                <Card.Text className="customTech">
                    {pjs.technology}
                </Card.Text>
                <Card.Text>
                    {pjs.description}
                </Card.Text>
            </Card.Body>
            {(() => {
                if (pjs.applink != null) {
                    return (
                        <Card.Footer className="d-flex justify-content-around">
                            <Card.Link href={pjs.applink} className='customCardLink'>Application</Card.Link>
                            <Card.Link href={pjs.repo} className='customCardLink'>Repository</Card.Link>
                        </Card.Footer>
                    )
                } else if (pjs.applink === null) {
                    return (
                        <Card.Footer className="d-flex justify-content-around">
                            <Card.Link href={pjs.repo} className='customCardLink'>Repository</Card.Link>
                        </Card.Footer>
                    )
                } else {
                    return (
                        'error'
                    )
                }
            })()}
        </Card>
    )
}