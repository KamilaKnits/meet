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
     expect(NumberOfEventsComponent.queryByRole("textbox")).toBeInTheDocument();
  
});

//a test to enture that the default value of the input field is 32

test('by default, value of the input field is 32', () => {
    expect(NumberOfEventsComponent.queryByRole("textbox")).toHaveValue("32")
});

//a test to ensure that the value of NumberOfEvents component's textbox has a value
//that changes accordingly when a user .type()'s in it

test('textbox value changes accordingly when user types in it', async () => {
    const user = userEvent.setup();
    const userInput = NumberOfEventsComponent.queryByRole("textbox")
    await user.type(userInput,`{backspace}{backspace}10`);
    expect(userInput).toHaveValue('10');
})

});