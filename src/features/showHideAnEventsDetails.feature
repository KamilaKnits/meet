Feature: Show/Hide event details
 Scenario: An event element is collapsed by default.
  Given the user is on the events page;
  When the events are displayed;
  Then each event's details should be hidden by default.

 Scenario: User can expand an event to see details.
  Given the user is on the events page;
  And the event details are hidden;
  When the user clicks on an event;
  Then the event details should be displayed.

 Scenario: User can collapse an event to hide details.
  Given the user has clicked show details button;
  When the user clicks on the same event again;
  Then the event details should be hidden.

