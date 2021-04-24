# To-Do web application with user login (React, material.ui)
> A simple To-Do application developed to record/manage individual users Todo’s list by verifying users login creditial.


## Table of contents
* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Folder Structure](#Folder-Structure)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info
The purpose of this project is to demonstrate my front end development skills to the hiring company for a potential Junior Developer job position. This To-Do project was developed for individual users to record and store their to-do list by validation individual users login credentials. 

## Screenshots
![Alt text](src\Assets\Login_Page.PNG "Login Page")
![Alt text](src\Assets\ToDo_App_Page.PNG "ToDo App Page")


## Technologies
* React
* Material-ui

## Folder Structure
│
├── build                   
├── public                    
├── src                     
│    ├── Assets
│    ├── Components
│    │      ├── Dialogs
│    │      │       └──── DialogsBox.js
│    │      ├── Header
│    │      │       ├──── TaskButton.js
│    │      │       └──── ToDoHeader.js
│    │      ├── List
│    │      │       └──── TodoList.js
│    │      ├── Login
│    │      │       ├──── AdminUser.js
│    │      │       └──── Login.js
│    │      ├── LogOut
│    │      │       └──── LogOut.js
│    │      │ 
│    │      ├── ChangeStatus.js
│    │      ├── Main.js
│    │      ├── MainCss.js
│    │      ├── MenuEnter.js
│    │      └── MenuLeave.js
│    │
│    ├── Models
│    │      ├── Category.js
│    │      └── todo.js
│    │
│    ├── App.js
│    └── index.js
│
├── package.json                   
└── README.md

## Setup
To run the project in localhost, install the following scripts:
Step 1 - Run 'npm install'
Step 2 - Run 'npm install @material-ui/core'
Step 3 - Run 'npm install --save react-router-dom'
Step 4 - To run the application 'npm start'
The application opens in http://localhost:3000/Todo-React


For live demo click here --> https://rajasalan.github.io/Todo-React/


## Features
* User login authentication
* Adding/Managing To-Do list based on categories
* Add and Delete the To-Do list

To-do list Improvements to be done for future:
* Migrating session storage to Database storage during backend integration
* Login authentication to be managed using database during backend integration
* Other Wow features can be added to this To-Do application to customize the end user needs.

## Status
Project is: Completed for the assignment purpose, with further scope to enhance.

## Inspiration
Assignment for Job Interview, Self Learning, To enhance my skillsets, Continuos learning.

## Contact
Created by garland.rajasalan@gmail.com - feel free to contact me!
