CREATE DATABASE movie_wishlist_app;
\c movie_wishlist_app

CREATE TABLE movies(
    id SERIAL PRIMARY KEY,
    title TEXT,
    description TEXT,
    img_link TEXT
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

INSERT INTO movies(title, description, img_link)
VALUES 
    ('Spider Man', 'Spiderman', 'https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_FMjpg_UX1000_.jpg'),
    ('Man', 'Sp-=fsdfman', 'https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_FMjpg_UX1000_.jpg');
