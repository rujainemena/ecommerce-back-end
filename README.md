# E-Commerce Back End (ORM)

## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

Below is a full video walkthrough of the demo:
![]()

## Table of Contents

- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Demo](#demo)
- [License](#license)
- [Tests](#tests)


## User Story
```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria
```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

## Installation

NPM is needed to run this application.

## Demo

The following animation shows the application's GET routes to return all categories, all products, and all tags being tested in Insomnia:

![]()

The following animation shows the application's GET routes to return a single category, a single product, and a single tag being tested in Insomnia:

The following animation shows the application's POST, PUT, and DELETE routes for categories being tested in Insomnia:


## License

MIT License

## Tests

Insomnia was used to test the API routes.
VS Code's integrated terminal was used for testing mySQL database.