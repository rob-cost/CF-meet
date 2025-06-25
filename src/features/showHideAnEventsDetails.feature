Feature: Show/Hide Event Details

    Scenario: An event element is collapsed by default
        Given the main-page is open
        When the list of events is displayed
        Then each event element should be collapsed by default

    Scenario: User can expand an event to see details
        Given the main-page is open
        When the user clicks on the “Show Details” button of an event
        Then the event element should expand

    Scenario: User can collapse an event to hide details
        Given the user has expanded an event to see its details
        When the user clicks on the “Hide Details” button of that event
        Then the event element should collapse