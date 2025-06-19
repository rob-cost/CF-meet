// src/__tests__/Event.test.js
import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Event from '../components/Event';
import mockData from '../mock-data';

describe ('<Event/> component', () => {
    let EventComponent;
    

test ('renders event title', () => {
    EventComponent = render(<Event event={mockData[0]}/>)
    expect(EventComponent.queryByText(mockData[0].summary)).toBeInTheDocument();
})

test ('renders event start time', () => {
    EventComponent = render(<Event event={mockData[0]}/>)
    expect(EventComponent.queryByText(mockData[0].created)).toBeInTheDocument();
})

test ('renders event location', () => {
    EventComponent = render(<Event event={mockData[0]}/>)
    expect(EventComponent.queryByText(mockData[0].location)).toBeInTheDocument();
})

test ('renders event details button with the title (show details)', () => {
    EventComponent = render(<Event event={mockData[0]}/>)
    expect(EventComponent.queryByText('Show Details')).toBeInTheDocument();
})

test ('by default event detail section should be hidden', () => {
    EventComponent = render(<Event event={mockData[0]}/>)
    const eventList = EventComponent.queryByRole('event-details')
    expect(eventList).not.toBeInTheDocument
})

test ('show the details section when the user clicks on the "Show Details" button', async () => {
    EventComponent = render(<Event event={mockData[0]}/>)
    const user = userEvent.setup();
    const showButton = EventComponent.queryByRole('event-button')
    await user.click(showButton)
    const eventList = EventComponent.queryByRole('event-details')
    expect(eventList).toBeInTheDocument
    
})

test ('hide the details section when the user clicks on the "Hide Details" button', async () => {
    EventComponent = render(<Event event={mockData[0]}/>)
    const user = userEvent.setup();
    const showButton = EventComponent.queryByRole('event-button')
    await user.click(showButton)
    await user.click(showButton)
    const eventList = EventComponent.queryByRole('event-details')
    expect(eventList).not.toBeInTheDocument
})

})
