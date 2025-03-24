# Meet

Meet Meet! A serverless, progressive web application built with React where users can search for upcoming events in a particular city. 

## Feature 1: Filter Events by city
As a user, I should be able to filter events by city so that I can see a list of events taking place in that city.

### Scenario 1: When a user hasn't searched for a specific city, show upcoming events from all cities.

  * Given user hasn't serached for any city;
  * When the user opens the app;
  * Then the user should see a list of upcomin events.

### Scenario 2: User should see a list of suggestions when they search for a city.

  * Given the main page is open;
  * When user starts typing in the city textbox;
  * Then the user should receive a list of cities (suggestions) that match waht they've typed.

### Scenario 3: User can select a city from the suggested list.

  * Given user was typing "New York" in the city textbox AND the list of suggested cities is showing;
  * When the user selects a city (e.g., "New York, NY") from the list;
  * Then their city should be changed to that city (i.e., "New York, NY") AND the user should receive a list of upcoming events in that city.


## Feature 2: Specify Number of Events
As a user, I should be able to keep event details hidden or visible until I choose to change them, so that I don’t have to toggle them repeatedly when navigating the app.

### Scenario 1: An event element is collpsed by default.

  * Given the user is on the events page;
  * When the events are displayed;
  * Then each event's details should be hidden by default.

### Scenario 2: User can expand an event to see details.

  * Given the user in on the events page and the event details are hidden;
  * When the user clicks on an event;
  * Then the event details should be displayed.

### Scenario 3: User can collapse an event to hide details.

  * Given the user has expanded an event to view its details;
  * When the user clicks on the event again;
  * Then the event details should be hidden.


## Feature 3: Specify Number of Events
As a user, I should be able to specify the number of events displayed at a time, so that I can control how much information I see on my screen.

### Scenario 1: When user hasn't specified a number, 32 events are shown by defaults.

  * Given the user is on the events app;
  * When the user doesn't specify a number of events;
  * Then 32 events should be displayed by defaults.

### Scenario 2: User can change the number of events displayed.

  * Given the user is on the events page;
  * When the user selects a different number of events to display;
  * Then the page should update to show the specified number of events.


## Feature 4: Use the App When Offline
As a user, I should be able to access event details that were recently viewed, so that I can reference them even when I lose internet connectivity.

### Scenario 1: Show cached data when there's no internet connection.

  * Given the user is on the events page and the user has no internet connection;
  * When the page is loaded;
  * Then the app should display cached event data and the user shoudl be notified they're offline.

### Scenario 2: Show error when user changes search settings ( city, number of events).

  * Given the user is offline;
  * When the user changes the search settings (city or number of events);
  * Then the app should display an error message indication that the settings cannot be updated while offline.


## Feature 5: Add an App Shortcut to the Home Screen
As a user, I should be able to add an app shortcut to my home screen, so that I can quickly access the app without opening my browser or searching for it.

### Scenario 1: User can install the meet app as a shortcut on their device home screen.

  * Given the user is on the app's homepage;
  * When the user selects the option to add a shortcut to the home screen;
  * Then the app shortcut should be added to the device's home screen and the user can launch the directly from the home scree.


## Feature 6: Display Charts Visualizing Event Details
As a user, I should be able to view events in a visually appealing way, so that I can decide on the city to visit. 

### Scenario 1: Show a chart with the number of upcoming events in each city.

  * Given the user is on the events page;
  * When the page displays event details;
  * Then a chart should show the number of upcoming events in each city and the chart should be clear and easy to read.

