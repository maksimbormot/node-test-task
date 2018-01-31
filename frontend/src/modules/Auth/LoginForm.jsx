import React from 'react';
import {Col, Button, Form, FormGroup, Label, Input, FormText, FormFeedback} from 'reactstrap';

export default ({onSubmit, errors}) => {

    const validate = (field) => {
        if (errors.length) {
            const error = errors[0]
            if (error.field === field) {
                return error.message
            }
        }
    }


    return <Form>
        <FormGroup row>
            <Label for="exampleEmail" sm={2}>Email</Label>
            <Col sm={10}>
                <Input className={validate('email') ? "is-invalid" : ''} type="email" name="email" id="exampleEmail"
                       placeholder="Email"/>
            </Col>
            <FormFeedback className='text-danger'>{validate('email')}</FormFeedback>
        </FormGroup>
        <FormGroup row>
            <Label for="examplePassword" sm={2}>Пароль</Label>
            <Col sm={10}>
                <Input className={validate('password') ? "is-invalid" : ''} type="password" name="password"
                       id="examplePassword"
                       placeholder="Пароль"/>
                <FormFeedback className='text-danger'>{validate('password')}</FormFeedback>
            </Col>
        </FormGroup>
        <FormGroup check row>
            <Col sm={{size: 10, offset: 2}}>
                <Button color="primary" className="mt-2" onClick={onSubmit}>Войти</Button>
            </Col>
        </FormGroup>
    </Form>
}


