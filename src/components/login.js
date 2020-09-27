import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
const Login = () => {
    const history = useHistory();
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const login=(e)=>{
        e.preventDefault();
        if(username==="John" && password==="12345"){
            console.log("Entered"+username+password);
            history.push("/bar");
        }else if(username==="MICKY" && password==="98765"){
            history.push("/pie");
        }
    }
    return (
        <Container>
            <Row className="d-flex justify-content-md-center mt-5">
                <Col className="col-md-6">
                    <Form onSubmit={login}>
                        <Row className="d-flex justify-content-md-center mt-5">
                            <Col className="col-md-6">
                                <Form.Label>Username:</Form.Label>
                            </Col>
                            <Col className="col-md-6">
                                <Form.Control type="text" 
                                    placeholder="Enter username"
                                    value={username}
                                    onChange={(e)=>{setUsername(e.target.value)}}
                                 />
                            </Col>
                        </Row>
                        <Row className="d-flex justify-content-md-center mt-5">
                            <Col className="col-md-6">
                                <Form.Label>Password</Form.Label>
                            </Col>
                            <Col className="col-md-6">
                                <Form.Control type="password" 
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e)=>{setPassword(e.target.value)}} />
                            </Col>
                        </Row>
                        <Row className="d-flex justify-content-md-center mt-5">
                            <Col className="col-md-6">
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Col>
                        </Row>


                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
export default Login;