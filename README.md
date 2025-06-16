# Meet App

## Overview

Meet App is a serverless, progressive web application (PWA) built with React that allows users to search for and discover upcoming events in cities around the world. The application leverages the Google Calendar API to fetch real-time event data and provides interactive data visualizations to help users analyze event trends and patterns.

By combining serverless architecture with PWA capabilities, Meet App delivers a fast, reliable, and engaging user experience that works seamlessly across all devices and platforms, even when offline.

## Table of Contents
- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Key Features](#key-features)
- [User Stories](#user-stories)
- [Usage](#usage)


## Tech Stack

- **Frontend Framework:** React
- **Architecture:** Serverless
- **API:** Google Calendar API
- **Development Methodology:** Test-Driven Development (TDD)
- **App Type:** Progressive Web Application (PWA)
- **Data Visualization:** Charts and graphs for event analytics
- **Testing Framework:** Jest & React Testing Library
- **Deployment:**

## Key Features

### Core Functionality
- **City-based Event Search:** Search and filter events by city location
- **Event Details Management:** Show/hide detailed event information
- **Customizable Display:** Specify the number of events displayed per page
- **Offline Capability:** Access previously loaded events without internet connection
- **PWA Features:** Add app shortcut to home screen for quick access


## User Stories

### Feature 1: Filter Events By City
**As a** user, **I should be able to** filter events by city **so that** I can see a list of events taking place in that city.

#### Scenario 1
When user hasn’t searched for a specific city, show upcoming events from all cities.

**Given** user hasn’t searched for any city;
**When** the user opens the app;
**Then** the user should see a list of upcoming events.

#### Scenario 2
User should see a list of suggestions when they search for a city.

**Given** the main page is open;
**When** user starts typing in the city textbox;
**Then** the user should receive a list of cities (suggestions) that match what they’ve typed.

#### Scenario 3
User can select a city from the suggested list.

**Given** user was typing “Berlin” in the city textbox AND the list of suggested cities is showing;
**When** the user selects a city (e.g., “Berlin, Germany”) from the list;
**Then** their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.

### Feature 2: Show/Hide Event Details
**As a** user, **I should be able to** show/hide event details **so that** I can view additional information when needed and keep the interface clean when browsing multiple events.

#### Scenario 1: 
Show event details
**Given** the user is viewing a list of events with collapsed details;
**When** the user clicks on an event;
**Then** the event details should expand and become visible.

#### Scenario 2: Hide event details
**Given** the user has an event with expanded details visible;
**When** the user clicks on the expanded event;
**Then** the event details should collapse and be hidden.

### Feature 3: Specify Number of Events
**As a** user, **I should be able to** specify the number of events displayed **so that** I can control how much information is shown at once and optimize my browsing experience.

#### Scenario 1: 
Change number of events displayed
**Given** the user is on the main page;
**When** the user selects a different number from the "events per page";
**Then** the page should display the specified number of events.

### Feature 4: Use the App When Offline
**As a** user, **I should be able to** use the app when offline **so that** I can access previously loaded event information even without an internet connection.

#### Scenario 1: 
Access cached events offline
**Given** the user has previously loaded events while online;
**When** the user opens the app without internet connection;
**Then** the user should see the previously cached events.

#### Scenario 2: 
Offline functionality limitation
**Given** the user is offline and hasn't previously loaded any events;
**When** the user opens the app;
**Then** the user should see a message indicating no internet connection.


### Feature 5: Add an App Shortcut to the Home Screen
**As a** user, **I should be able to** add an app shortcut to my home screen **so that** I can quickly access the application without navigating through my browser or app drawer.

#### Scenario 1: 
Install app shortcut
**Given** the user is using the app in a browser;
**When** the user selects "Add to Home Screen" from the browser menu;
**Then** a shortcut icon should be added to the device's home screen.

#### Scenario 2: 
Launch app from home screen shortcut
**Given** the user has installed the app shortcut on their home screen;
**When** the user taps the shortcut icon;
**Then** the app should launch directly.


### Feature 6: Display Charts Visualizing Event Details
**As a** user, **I should be able to** view charts that visualize event details **so that** I can quickly understand event data patterns and make informed decisions about which events to attend.

#### Scenario 1: 
View event genre chart
**Given** the user is using the app;
**When** the user tabs to on an event;
**Then** the user should see a chart displaying the distribution of events by genre.

#### Scenario 2: 
View events by city chart
**Given** the user is using the app;
**When** the user tabs to on an event;
**Then** the user should see a chart showing the number of events per city.



