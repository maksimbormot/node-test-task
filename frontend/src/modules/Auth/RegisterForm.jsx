import React from 'react';
import {Button, Col, Form, Input, Label, FormGroup, FormFeedback} from 'reactstrap';

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
            <Label for="first_name" sm={3}>Имя</Label>
            <Col sm={9}>
                <Input type="text" name="first_name" placeholder="Имя"/>
            </Col>
            <div className="ml-3 mt-2"/>
        </FormGroup>
        <FormGroup row>
            <Label for="last_name" sm={3}>Фамилия</Label>
            <Col sm={9}>
                <Input type="text" name="last_name" placeholder="Фамилия"/>
            </Col>
            <div className="ml-3 mt-2"/>
        </FormGroup>
        <FormGroup row>
            <Label for="exampleEmail" sm={3}>Email</Label>
            <Col sm={9}>
                <Input className={validate('email') ? "is-invalid" : ''} type="email" name="email" placeholder="Email"/>
            </Col>
            <FormFeedback className='text-danger ml-3 mt-2'>{validate('email')}</FormFeedback>
        </FormGroup>
        <FormGroup row>
            <Label for="phone" sm={3}>Номер телефона</Label>
            <Col sm={9}>
                <Input className={validate('phone') ? "is-invalid" : ''} type="tel" name="phone"
                       placeholder="Номер телефона"/>
            </Col>
            <FormFeedback className='text-danger ml-3 mt-2'>{validate('phone')}</FormFeedback>
        </FormGroup>
        <FormGroup row>
            <Label for="examplePassword" sm={3}>Пароль</Label>
            <Col sm={9}>
                <Input className={validate('password') ? "is-invalid" : ''} type="password" name="password"
                       placeholder="Пароль"/>
            </Col>
            <FormFeedback className='text-danger ml-3 mt-2'>{validate('password')}</FormFeedback>
        </FormGroup>
        <FormGroup check row>
            <Button color="primary" className="mt-2" onClick={onSubmit}>Зарегистрироваться</Button>
        </FormGroup>
    </Form>

}
