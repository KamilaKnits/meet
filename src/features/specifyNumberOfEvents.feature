Feature: Specify number of Events
 Scenario: When user hasn't specified a number, 32 events are shown by default.
  Given the user is on the events app;
  When the user doesn't specify a number of events;
  Then 32 events should be displayed by default.

 Scenario: User can change the number of events displayed.
  Given the user is on the events page;
  When the user selects a different number of events to display; 
  Then the page should update to show the specified number of events.

