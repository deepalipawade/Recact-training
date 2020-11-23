import React from "react"
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Card, CardBody} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types'; // ES6

const LoginComponent = ({username, password, setUsername, setPassword, logValues}) => {

    const setUsernameWrapper = (evt) => {
        console.log(evt.target.value)
        setUsername(evt.target.value)
    }
    const setPasswordWrapper = (evt) => {
        console.log(evt.target.value)
        setPassword(evt.target.value)
    }

    return ( 
        <Container>
            <Row className="d-flex align-items-center">
                <Col sm={{ size: 6, order: 2, offset: 1 }} className = "m-auto">
                <Card>
                    <CardBody>
                        <Form>
                            <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" value={username} onChange={setUsernameWrapper}/>
                            </FormGroup>
                            <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" value={password} onChange={setPasswordWrapper}/>
                            </FormGroup>
                            <Button onClick={logValues}>Submit</Button>
                        </Form>
                    </CardBody>
                </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default LoginComponent;

LoginComponent.propTypes = {
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    setUsername: PropTypes.func.isRequired,
    setPassword: PropTypes.func.isRequired,
    logValues: PropTypes.func.isRequired
}