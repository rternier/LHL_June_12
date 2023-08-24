# Lighthouse Labs | Database Design

## Lecture Notes
* [ ] Terminology-
- [ ] Naming Conventions
- [ ] Data Types / Nulls
- [ ] Relationships
- [ ] Many to Many

## Terminology
Primary Key / Foriegn Keys
RDMS
- PosgresSQL **
- MySQL / MariaDB
- Oracle
- MSSQL

Database
- Tables
- Workspace
Table
- Entity, your Thing
- Array of objects or things
Rows
- Objects in the Table
Columns
-  Properties
- Strings, Numbers, dates

## Naming Conventions
- Singular for Tables
- Plural for Many-To-Many tables (Tables that resolve many to many relationships)

## Data Types
Every Field / Column must have a data type. You can review Postgres Documentation on types here:
https://www.postgresql.org/docs/current/datatype.html 

INT
DOUBLE
DECIMAL
TEXT 
VARCHAR(250)
CHAR(2) - 2 characters only
Date
NULL vs "" vs 0

## Relationships

How do entities/Tables relate to each other.
Foreign Key - references another tables Private Key. 


BOookShelf Example - Resolving many to many relationship.

A book can have many authors, and an author can have many books.

    Book
        BookID
        Title
        PublishedYear

    BookAuthors
        BookID
        AuthorID

    Author
        AuthorID
        Name
        BirthDate

    BookGenres
        BookID
        GenreID

    Genre
        GenreID
        Type




## Breakout Project
Kitchen Cabinet.
A Kitchen Cabinet has shelves. A Shelf can have items. These things also have properties.
How would you create a database model to show this?


Kitchen

Cabinet

Shelf

Item