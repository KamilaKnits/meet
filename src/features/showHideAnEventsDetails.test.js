import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from './../App';

import userEvent from '@testing-library/user-event';


const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('An event element is collapsed by default.', ({ given, when, then }) => {
        let AppComponent;
        given('the user is on the events page;', async () => {
            AppComponent = render(<App />);
        });


        when('the events are displayed;', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
            });

        });

        then('each event\'s details should be hidden by default.', () => {
            const AppDOM = AppComponent.container.firstChild;
            const eventDetails = AppDOM.querySelector('.details');
            expect(eventDetails).not.toBeInTheDocument();
        });
    });

    test('User can expand an event to see details.', ({ given, when, then }) => {
        let AppComponent;
        given('the user is on the events page;', async () => {
            AppComponent = render(<App />);
            const AppDOM = AppComponent.container.firstChild;
            await waitFor(() => {
                const eventDetails  = AppDOM.querySelector('.details');
                expect(eventDetails).not.toBeInTheDocument();
            });

        });
  
        when('the user clicks on an event;', async () => {
            const user = userEvent.setup();
            const button = AppComponent.queryAllByText("show-details")[0]
;            await user.click(button);
        });
        
         then('the event details should be displayed.', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const eventDetails = AppDOM.querySelector('.details');
            expect(eventDetails).toBeInTheDocument();
        });
    });

    test('User can collapse an event to hide details.', ({ given, when, then }) => {
        let AppComponent;
        let EventListItems;
        given('the user has clicked show details button;', async () => {
            AppComponent = render(<App />);
            const user = userEvent.setup();
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
        let detailsBtn;
        await waitFor(() => {
        EventListItems = within(EventListDOM).queryAllByRole('listitem');
        detailsBtn = within(EventListItems[0]).queryByText('show details');
        });
        await user.click(detailsBtn);
        });
        let EventListItem;
        when('the user clicks on the same event again;', async () => {
            const user = userEvent.setup();
            await user.click(EventListItem);
        });

        
        then('the event details should be hidden.', () => {
            const AppDOM = AppComponent.container.firstChild;
            const eventDetails = AppDOM.querySelector('.details');
            expect(eventDetails).not.toBeInTheDocument();
        });
    });
   

});