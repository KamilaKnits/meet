//src/__test__/NumberOfEvents.test.js
import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from "../components/NumberOfEvents";

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsComponent;
    beforeEach(() => {
        NumberOfEventsComponent = render(<NumberOfEvents />);
    })

//test to ensure that the NumberOfEvets component contains an element with the role 
//of a textbox

test('has an element with "textbox" role', () => {
    const numberTextBox =  NumberOfEventsComponent.queryByRole("textbox")
    expect(numberTextBox).toBeInTheDocument();
    expect(numberTextBox).toHaveClass("number-of-events-input");
  
});

//a test to enture that the default value of the input field is 32

test('by default, value of the input field is 32', () => {
    const numberTextBox = NumberOfEventsComponent.queryByRole("textbox");
    expect(numberTextBox).toHaveValue("32")
});

//a test to ensure that the value of NumberOfEvents component's textbox has a value
//that changes accordingly when a user .type()'s in it

test('textbox value changes accordingly when user types in it', async () => {
    const user = userEvent.setup();
    const numberTextBox = NumberOfEventsComponent.queryByRole("textbox")
    await user.type(numberTextBox,"123");
    
    
    expect(numberTextBox).toHaveValue('32123');
})

});