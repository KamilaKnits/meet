//src/__test__/NumberOfEvents.test.js
import React from 'react';
import { render, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from "../components/NumberOfEvents";
import App from './../App';

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsComponent;
    
    beforeEach(() => {
        NumberOfEventsComponent = render(<NumberOfEvents
        setCurrentNOE={() => {}}
        setErrorAlert={() => {}}
         />);
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

describe('<NumberOfEvents /> integration', () => {
    test('user changes the number of events to see in input field', async () =>{
        const user = userEvent.setup();
        const AppComponent = render(<App />);
        const AppDOM = AppComponent.container.firstChild;

        const NumberOfEventsDOM = AppDOM.querySelector('#number-of-events');
        const numberOfEventsInput = within(NumberOfEventsDOM).queryByRole("textbox");
        await user.click(numberOfEventsInput);
        await user.clear(numberOfEventsInput);
        await user.type(numberOfEventsInput, "{backspace}{backspace}12");
        expect(numberOfEventsInput).toHaveValue("12");

        const EventListDOM = AppDOM.querySelector('#event-list');
        await waitFor(() => {
            const EventListItems = within(EventListDOM).queryAllByRole('listitem');
            expect(EventListItems.length).toHaveValue("12")
        });
    });
});