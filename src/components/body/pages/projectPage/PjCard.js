import React from "react";
// import '../../../mainContainer/main.css';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



export default function PjCard(pjs) {
    // let cardLinkRow;
    // if (pjs.front === true) {
    //     cardLinkRow = 
    //         <div>
    //             <Card.Link href={pjs.applink} className='customCardLink'>Application</Card.Link>
    //             <Card.Link href={pjs.repo} className='customCardLink'>Repository</Card.Link>
    //         </div>
    // } else if (pjs.front === false) {
    //     cardLinkRow = 
    //         <div>
    //             <Card.Link href={pjs.repo} className='customCardLink'>Repository</Card.Link>
    //         </div>
    // }

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
            {/* <Card.Footer className="d-flex"> */}
                {/* {cardLinkRow} */}
                    {/* <Card.Link href={pjs.applink} className='customCardLink'>Application</Card.Link>
                    <Card.Link href={pjs.repo} className='customCardLink'>Repository</Card.Link> */}
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
            {/* </Card.Footer> */}
        </Card>
    )
}