# Movie-Wishlist-App
## Welcome to BLISS MOVIES
### This is a app for people who want to search for movies and wishlsit their favorite movies. 
[Click Here](https://movie-wishlist-app.onrender.com/) to visit Bliss Movies

## Description
Welcome to our project! This is a Movie Wishlist App made in expressJS framework. It allows users to add, delete, update, filter and wishlist movies. Whith this app, users can effortlessly add, search, filter and whishlist their favorite movies. 

## Features
1. Sign up
2. Log in
3. Add movies
4. Update movies
5. Search movies
6. Delete movies
7. Wishlist movies
8. Edit account 

## Tools used
1. ExpressJs is used as the main framework for the development of this app. 
2. HTML
3. CSS
4. SQL

## Bugs faced
- We faced a bug where a specific users wishlisted movies wouldn't show up on the page after we updated the navigation bar, we searched through and thought we found the problem with the rendering functions, but after testing multiple times we discovered that this wasn't the issue. We did more testing and eventually came to the conclusion that the way the data was being stored wasn't asynchonous and so when you load the page it gets the data to be added but the page content always loaded beforehand, we fixed this by predefining the container that stores the users wishlisted movies and that solved the problem.
- One page that we had trouble with was the edit account page. We struggled with this page when we were trying to add the users account details to the page when they viewed it so that they could see their info and didn't have to remember it. We struggled with a few aspects of this, including correctly getting the users data from the database and actually displaying it on the page. We eventually found a way to get the data correctly from the database and hence were able to put it into the state to store it (just their email and name) so that it could be displayed on their account page when they viewed it.
[Click Here](https://trello.com/b/BW33fYmE/user-stories) to visit our User Stories


## Wireframes 
![](./wireframe_screenshots/Screen%20Shot%202023-06-05%20at%209.17.30%20am.png)
![](./wireframe_screenshots/Screen%20Shot%202023-06-05%20at%209.17.59%20am.png)
![](./wireframe_screenshots/Screen%20Shot%202023-06-05%20at%209.18.20%20am.png)


 