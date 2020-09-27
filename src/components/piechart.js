import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import {Pie} from 'react-chartjs-2';
const Piechart=(props)=>{
    // const generateColor =()=> {
    //     return '#' +  Math.random().toString(16).substr(-6);
    //   }
      const data = {
        labels: props.id,
        datasets: [{
            data: props.comments,
            borderColor:"#fafcc2",
            backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            "#C0C0C0",
            "#808080",
            "#FF0000",
            "#800000",
            "#FFFF00",
            "#808000",
            "#00FF00",
            "#008000",
            "#00FFFF",
            "#008080",
            "#0000FF",
            "#000080",
            "#FF00FF",
            "#800080",
            "#CD5C5C",
            "#F08080",
            "#FA8072",
            "#E9967A",
            "#FFA07A",
            "#7FFF00",
            "#32CD32",
            "#00FF00",
            "#00FA9A",
            "#90EE90",
            "#00BFFF",
            "#483D8B",
            "#7B68EE"
            
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                "#C0C0C0",
                "#808080",
                "#FF0000",
                "#800000",
                "#FFFF00",
                "#808000",
                "#00FF00",
                "#008000",
                "#00FFFF",
                "#008080",
                "#0000FF",
                "#000080",
                "#FF00FF",
                "#800080",
                "#CD5C5C",
                "#F08080",
                "#FA8072",
                "#E9967A",
                "#FFA07A",
                "#7FFF00",
                "#32CD32",
                "#00FF00",
                "#00FA9A",
                "#90EE90",
                "#00BFFF",
                "#483D8B",
                "#7B68EE"
            ]
        }]
    };
    return (
        <Container>
            <Row className="d-flex justify-content-md-center mt-5">
                <Col className="col-md-10">
                    <Pie data={data}
                         />
                        
                </Col>
            </Row>
        </Container>
    )
}

export default Piechart;