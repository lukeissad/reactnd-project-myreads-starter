# Udacity MyReads Project

A book tracking app project for the Udacity Front-End Web Developer Nanodegree Program.

## Table of Contents

* [Project Details](#project-details)
* [How to Run](#how-to-run)
* [Added Functionality](#added-functionality)
* [File Descriptions](#file-descriptions)
* [Allowed Search Terms](#allowed-search-terms)

## Project Details

For the MyReads project, the student had to create a bookshelf app that allows one to select and categorize books they've read, are currently reading, or want to read. The project emphasized using React to build the application. The student was provided a template containing a static example of the CSS and HTML markup, but without any of the React code that was needed to complete the project. They were also provided with an API server and client library to persist information when one interacts with the application.

## How to Run

* clone this repository
* navigate into the newly created app folder
* install the project dependencies with `npm install`
* launch the app with `npm start`
* After a moment a new browser window should open, displaying the app. If it doesn't, you can see the app by going to this address http://localhost:3000/ in the browser of your choice.

## Added functionality

* The user is able to move books between the "currently reading", "want to read" and "read" shelves, both on the main page and search page.
* The books remain on their chosen shelves after reloading the page.
* As the user types into the search field, books that match the query are displayed on the page.
* The search works correctly when a book does not have a thumbnail or an author.
* If a book is assigned to a shelf on the main page, it is also assigned to it on the search page.
* The main page contains a link to the search page. When the link is clicked, the search page is displayed and the URL in the browser’s address bar is /search .
* The search page contains a link to the main page. When the link is clicked, the main page is displayed and the URL in the browser’s address bar is / .

## File Descriptions

```bash
├── README.md # This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms to use with the app.
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico # React Icon.
│   └── index.html # DO NOT MODIFY.
└── src
    ├── App.css # Styles for the app.
    ├── App.js # Root of the app. Originally contained static html.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing was not required.
    ├── Book.js # Component used for generating books.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend.
    ├── Bookshelves.js # Bookshelves component. Generates bookshelves.
    ├── icons # Helpful images for the app. Use not required.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles.
    ├── index.js # File used for DOM rendering only.
    └── Search.js # Component containing the search functionality.
```

## Allowed Search Terms

The app accepts searches by title or author, but the backend API uses a fixed set of cached search results and is limited to a particular set of search terms found beneath.

'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'
