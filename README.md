# Social-Network-API

The goal of this project is to practice NoSQL by building an API for a social network application.

As is common with most social network sites, the fucnctionalities include:
* user sharing their thoughts
* user reacting to friends' thoughts
* creating a friend list

## Technologies

To create this application, I utilized:

1. Express.js for routing
2. MongoDB database
3. Mongoose ODM

## Acceptance Criteria
```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Usage

Here is an example of the functionality of this application:

The following shows GET routes to return all users and all thoughts being tested in Insomnia:



The following shows GET routes to return a single user and a single thought being tested in Insomnia:




The following shows the POST, PUT, and DELETE routes for users being tested in Insomnia:



The following shows the POST and DELETE routes for a user’s friend list being tested in Insomnia: