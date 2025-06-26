import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { getEvents } from '../api';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    let AppComponent
    test("When user hasn't specified a number, 32 events are shown by default.", ({given, when, then}) => {
        given('the user has not specified a number of events to view',() => {
            
        })
        when('the user opens the app',() => {
            AppComponent = render(<App />);
        })
        then('the user should see 32 events by default',async () => {
            const AppDOM = AppComponent.container.firstChild;
            const eventListDOM = AppDOM.querySelector('#event-list')
            await waitFor(() => {
                 const eventListItems = within(eventListDOM).queryAllByRole('listitem');
                 expect(eventListItems.length).toBe(32);
               });
        })
    })

    test("User can change the number of events displayed.", ({given, when, then}) => {
        given('the main page is open',() => {
            AppComponent = render(<App />);
        })
        when('the user types a desired number of events into the input field',async () => {
            const user = userEvent.setup();
            const AppDOM = AppComponent.container.firstChild;
            const numberEventsDOM = AppDOM.querySelector('#number-events')
            const textBox = within(numberEventsDOM).getByRole('textbox')
            await user.clear(textBox)
            await user.type(textBox, '10');
            expect(textBox).toHaveValue('10');
        })
        then('that number of events should be displayed',async () => {
            const AppDOM = AppComponent.container.firstChild;
            const eventListDOM = AppDOM.querySelector('#event-list')
            await waitFor(() => {
                 const eventListItems = within(eventListDOM).queryAllByRole('listitem');
                 expect(eventListItems.length).toBe(10);
               });
        })
    })
})