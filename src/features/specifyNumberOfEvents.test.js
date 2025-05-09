import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from './../App'
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('When user hasn\'t specified a number, 32 events are shown by default.', ({ given, when, then }) => {
        let AppComponent;

        given('the user is on the events app;', () => {
            AppComponent = render(<App />);
        });

        when('the user doesn\'t specify a number of events;', () => {

        });

        then(/^(\d+) events should be displayed by default.$/,  async (arg0) => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            await waitFor(() => {
                    const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                    expect(EventListItems.length).toBe(32);
                });
        });
    });

    test('User can change the number of events displayed.', 
        ({ given, when, then }) => {
        let AppComponent;
        given('the user is on the events page;', () => {
            AppComponent = render(<App />);
        });

        when('the user selects a different number of events to display;', async () => {
            const user = userEvent.setup();
            const AppDOM = AppComponent.container.firstChild;
            const NumberOfEventsDOM = AppDOM.querySelector('#number-of-events');
            const numberOfEventsInput = within(NumberOfEventsDOM).queryByRole("textbox");
            
            await user.clear(numberOfEventsInput);
            await user.type(numberOfEventsInput, "12");
            
        
        });

        then('the page should update to show the specified number of events.', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const NumberOfEventsDOM = AppDOM.querySelector('#number-of-events');
            const numberOfEventsInput = within(NumberOfEventsDOM).queryByRole("textbox");
            expect(numberOfEventsInput.value).toBe("12");
        });
    });


})