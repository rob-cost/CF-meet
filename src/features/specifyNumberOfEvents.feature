Feature: Specify number of events
 Scenario: When user hasn't specified a number, 32 events are shown by default.
  Given the user has not specified a number of events to view
  When the user opens the app
  Then the user should see 32 events by default

 Scenario: User can change the number of events displayed.
    Given the main page is open
    When the user types a desired number of events into the input field
    Then that number of events should be displayed


