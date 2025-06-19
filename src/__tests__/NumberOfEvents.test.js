import React from "react";
import { render } from "@testing-library/react";
import NumberOfEvents from "../components/NumberOfEvents";
import userEvent from "@testing-library/user-event";

describe('<NumberOfEvents/> component', () => {
    let NumberOfEventsComponent;
    beforeEach(() => {
        NumberOfEventsComponent = render(<NumberOfEvents />)
    })

    test('the component contain an element with the role of textbox', () => {
        const textBox = NumberOfEventsComponent.queryByRole('textbox')
        expect(textBox).toBeInTheDocument();
    })

    test('the default value of the input field is 32', () => {
        const textBox = NumberOfEventsComponent.queryByRole('textbox')
        expect(textBox).toHaveValue('32');
    })

    test('the default value of the input field is 32', async () => {
        const user = userEvent.setup();
        const textBox = NumberOfEventsComponent.queryByRole('textbox')
        await user.clear(textBox)
        await user.type(textBox, '10');
        expect(textBox).toHaveValue('10');
    })
})