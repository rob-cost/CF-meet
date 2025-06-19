// src/__tests__/EventList.test.js
import React from 'react';
import { render } from '@testing-library/react';
import EventList from '../components/EventList';
import { getEvents } from '../api';


describe('<EventList /> component', () => {
  test('has an element with "list" role', () => {
    const EventListComponent = render(<EventList />);
    expect(EventListComponent.queryByRole("list")).toBeInTheDocument();
  });

  test('renders correct number of events', async () => {
    const allEvents = await getEvents(); 
    const EventListComponent = render(<EventList events={allEvents} />);
    expect(EventListComponent.getAllByRole("listitem")).toHaveLength(allEvents.length);
  });
  
});