//src/__test__/Event.test.js
import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Event from "../components/Event";
import { getEvents } from "../api";

describe('<Event /> component', () => {
    let EventComponent;
    let allEvents;

    beforeEach( async () => {
        allEvents = await getEvents();
        EventComponent = render(<Event event={allEvents[0]}/>);
    });

    test('renders event title', () => {
        expect(EventComponent.getByText(allEvents[0].summary)).toBeInTheDocument();
    });

    test('renders event start time', () => {
        const startTimeElement = EventComponent.container.querySelector('#created');
        expect(startTimeElement.textContent).toContain(allEvents[0].created);
    });

    test('renders event location', () => {
        expect(EventComponent.getByText(allEvents[0].location)).toBeInTheDocument();
    });

    test('renders event details button with the title (show details)', () => {
        expect(EventComponent.getAllByText("show-details")[0]).toBeInTheDocument();
    });

    test('by default, event details section should be hidden', () => {
        expect(EventComponent.container.querySelector(".details")).not.toBeInTheDocument();
    });

    test('show the details section when the user clicks on the (show details) button', async () => {
        const user = userEvent.setup();
        await user.click(EventComponent.queryByText("show-details"));

        expect(EventComponent.container.querySelector(".details")).toBeInTheDocument();
        expect(EventComponent.queryByText("hide-details")).toBeInTheDocument();
        expect(EventComponent.queryByText("show-details")).not.toBeInTheDocument();
    });

    test('hides the details section when the user clicks on the (hide details) button',  async () => {
        const user = userEvent.setup();
        await user.click(EventComponent.queryByText("show-details"));

        expect(EventComponent.container.querySelector(".details")).toBeInTheDocument();
        expect(EventComponent.queryByText("hide-details")).toBeInTheDocument();
        expect(EventComponent.queryByText("show-details")).not.toBeInTheDocument();

        await user.click(EventComponent.queryByText("hide-details"));

        expect(EventComponent.container.querySelector(".details")).not.toBeInTheDocument();
        expect(EventComponent.queryByText("hide-details")).not.toBeInTheDocument();
        expect(EventComponent.queryByText("show-details")).toBeInTheDocument();

    });
});