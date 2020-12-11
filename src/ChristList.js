import { React, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { getAll } from './APICalls';

export const ChristList = () => {

    const [journalArray, setJournalArray] = useState([])


    useEffect(() => {
        getAll()
            //data is a taco. data is the response from our fetch call.
            .then(data => {
                //Gets all data as an array. Object.keys is native javascript that
                //allows us to access that key. then we are mapping over it and adding a new property: .fbid 
                let newArray = Object.keys(data).map((key, index) => {
                    data[key].fbid = key;
                    return data[key];
                });
                console.log("newArray", newArray)
                setJournalArray(newArray)
            })
    }, [])



    return (
        <>
            <h4>Christmas List</h4>
            <Container fluid>
                <Row>
                    {
                        journalArray.map(item => {
                            return (

                                <Col key={item.fbid} className="bgcolor" xs={12} md={6} lg={4} xl={2}>
                                    <h5>{item.title}</h5>

                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </>
    )
}


