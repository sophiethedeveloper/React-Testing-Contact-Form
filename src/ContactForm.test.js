import React from 'react';
import ContactForm from './components/ContactForm';
import { render, screen, fireEvent } from "@testing-library/react";

test('renders website', () => {
    render(<ContactForm />)
});

test('checks all inputs and submit button', async () => {
    render(<ContactForm />);

    //Arrange
    const firstNameInput = screen.getByLabelText(/first Name/i);
    const lastNameInput = screen.getByLabelText(/last Name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);
    const submitButton = screen.getByRole("button", {name:/submit/i});


    fireEvent.change(firstNameInput, {target:{name:'firstName', value: 'sofia'}})
    fireEvent.change(lastNameInput, {target:{name:'lastName', value: 'Luna'}})
    fireEvent.change(emailInput, {target:{name:'email', value: 'Luna@gmail.com'}})
    fireEvent.change(messageInput, {target:{name:'message', value: 'Hello world!'}})

    fireEvent.click(submitButton);

    screen.debug();

    const submit = screen.findByText(/submit/i)

    // console.log(firstNameInput)


})