CREATE DATABASE movie_wishlist_app;
\c movie_wishlist_app

CREATE TABLE movies(
    id SERIAL PRIMARY KEY,
    title TEXT,
    description TEXT
);

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name TEXT,
    email TEXT,
    password_digest TEXT
);

CREATE TABLE wishlisted(
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    movie_id INTEGER
);

-- Hello Team