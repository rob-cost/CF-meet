import React from "react";
import { render, waitFor, within } from "@testing-library/react";
import NumberOfEvents from "../components/NumberOfEvents";
import userEvent from "@testing-library/user-event";
import { getEvents } from "../api";
import App from "../App";

describe('<NumberOfEvents/> component', () => {
  let NumberOfEventsComponent;
  beforeEach(() => {
    const mockSetCurrentNOE = jest.fn();
    NumberOfEventsComponent = render(<NumberOfEvents setCurrentNOE={mockSetCurrentNOE} />)
  })

  test('the component contain an element with the role of textbox', () => {
    const textBox = NumberOfEventsComponent.queryByRole('textbox')
    expect(textBox).toBeInTheDocument();
  })

  test('the default value of the input field is 32', () => {
    const textBox = NumberOfEventsComponent.queryByRole('textbox')
    expect(textBox).toHaveValue('32');
  })

  test('the default value of the input field is what written in the textbox', async () => {
    const user = userEvent.setup();
    const textBox = NumberOfEventsComponent.queryByRole('textbox')
    await user.clear(textBox)
    await user.type(textBox, '10');
    expect(textBox).toHaveValue('10');
  })
})

describe('<NumberOfEvents/> integration', () => {
  test('the number of events in the list will change accordingly to what is written in the input field', async () => {
    const user = userEvent.setup();
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;
   
    const eventsContainer = AppDOM.querySelector('#number-events')
    const textBox = within(eventsContainer).getByRole('textbox')



    await user.clear(textBox)
    await user.type(textBox, '10');

     const EventListDOM = AppDOM.querySelector('#event-list');
     const EventListItems = within(EventListDOM).queryAllByRole('listitem');

    expect (EventListItems.length).toBe(10);
  })
})