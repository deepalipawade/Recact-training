import React from "react"
import { Button, Form, FormGroup, Label, Input, FormFeedback} from 'reactstrap';
import { Card, CardBody} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types'; // ES6
import { API_HOST_URL } from '../shared/appConstant'

const LoginComponent = ({state, dispatch,validateData}) => {

    const setUsernameWrapper = (evt) => {
        console.log("API_HOST_URL",API_HOST_URL)
        dispatch({type: 'setUsername', username: evt.target.value})
        console.log("username : ", state.username, evt.target.value)       
    }
    const setPasswordWrapper = (evt) => {
        dispatch({type: 'setPassword', password: evt.target.value})
        console.log("password : ", state.password, evt.target.value)
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
                            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" 
                                value={state.username} onChange={setUsernameWrapper} 
                                invalid = {(state.usernameError != null)} /*invalid is same as invalid={true}*/  />
                            <FormFeedback>{state.usernameError}</FormFeedback>
                            </FormGroup>    
                            <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" 
                                value={state.password} onChange={setPasswordWrapper} 
                                invalid = {(state.passwordError !== null)} />
                            <FormFeedback>{state.passwordError}</FormFeedback>
                            </FormGroup>
                            <Button onClick={validateData}>Submit</Button>
                        </Form>
                    </CardBody>
                </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default LoginComponent;

// LoginComponent.propTypes = {
//     username: PropTypes.string.isRequired,
//     password: PropTypes.string.isRequired,
//     setUsername: PropTypes.func.isRequired,
//     setPassword: PropTypes.func.isRequired,
// }