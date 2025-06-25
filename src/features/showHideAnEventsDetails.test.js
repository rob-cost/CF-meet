import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { getEvents } from '../api';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('An event element is collapsed by default', ({given, when, then}) => {
        let AppComponent;
        let AppDOM;
        let EventListDOM;
        given('the main-page is open', () => {
            AppComponent = render(<App />);
        });
        
        when('the list of events is displayed', async() => {
            AppDOM = AppComponent.container.firstChild
            EventListDOM = AppDOM.querySelector('#event-list')

            await waitFor(() => {
                const eventListItems = within(EventListDOM).getAllByRole('listitem');
                expect(eventListItems.length).toBeGreaterThan(0);
            })
        });
        then('each event element should be collapsed by default', async() => {
            await waitFor(() => {
                const eventDetailsItems = AppDOM.querySelectorAll('.event-details');
                expect(eventDetailsItems.length).toBe(0);
    });
        })
    })

    test('User can expand an event to see details', ({given, when, then}) => {
        let AppComponent;
        let AppDOM;
        let user = userEvent.setup();
        given('the main-page is open', () => {
            AppComponent = render(<App />);
        })
        when('the user clicks on the “Show Details” button of an event',async () => {
            AppDOM = AppComponent.container.firstChild;
            const eventListButton = AppDOM.querySelector('.event-button');
            user = userEvent.setup();
            await user.click(eventListButton);
        })
        then('the event element should expand', async () => {
            await waitFor(() => {
            const eventItems = AppDOM.querySelectorAll('.event-details');
            expect(eventItems).toBeInTheDocument;
            })
        })
    });

    test('User can collapse an event to hide details', ({given, when, then}) => {
        let AppComponent;
        let AppDOM;
        let user = userEvent.setup();
        given('the user has expanded an event to see its details', async () => {
            AppComponent = render(<App />);
            AppDOM = AppComponent.container.firstChild;
            const eventListButton = AppDOM.querySelector('.event-button');
            user = userEvent.setup();
            await user.click(eventListButton);
            await waitFor(() => {
            const eventItems = AppDOM.querySelectorAll('.event-details');
            expect(eventItems).toBeInTheDocument;
            })
        })
        when('the user clicks on the “Hide Details” button of that event', async () => {
            const eventListButton = AppDOM.querySelector('.event-button');
            await user.click(eventListButton);
        })
        then('the event element should collapse',async () => {
            await waitFor(() => {
            const eventItems = AppDOM.querySelectorAll('.event-details');
            expect(eventItems).notToBeInTheDocument;
            })
        })
    })

})