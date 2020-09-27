import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {Line} from 'react-chartjs-2';
const Linechart = (props) => {

    return (
        <Container>
            <Row className="d-flex justify-content-md-center mt-5">
                <Col className="col-md-10">
                    <Line    
                        data={{
                            labels:props.createdAt,
                            datasets: [
                                {
                                    data:props.comments,
                                    label: 'Created At',
                                    borderColor: "#fca652",
                                    pointBackgroundColor: "#008000",
                                    pointBorderColor: "#008000",
                                    fill: false,

                                }],
                                options: {
                                    responsive: true,
                                    animation: {
                                        easing:  'easeInCirc',
                                        duration: 1000
                                  },
                                    maintainAspectRatio: false,
                                    layout: {
                                        padding: {
                                            top: 5,
                                            left: 15,
                                            right: 15,
                                            bottom: 15
                                        }
                                    }
                                  }   
                        }}
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default Linechart;