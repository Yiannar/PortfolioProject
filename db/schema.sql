DROP DATABASE IF EXISTS diamonds_info;
CREATE DATABASE diamonds_info;


\c diamonds_info;

CREATE TABLE diamonds(
    id SERIAL PRIMARY KEY,
    shape TEXT NOT NULL,
    image TEXT NOT NULL,
    carat NUMERIC,
    color TEXT NOT NULL,
    clarity TEXT NOT NULL,
    cut TEXT NOT NULL,
    price NUMERIC NOT NULL,
    is_reported BOOLEAN
);

DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    reviwer TEXT NOT NULL,
    title TEXT,
    content TEXT,
    rating NUMERIC,
    CHECK (rating >= 0 AND rating <=5),
    diamond_id INTEGER REFERENCES diamonds (id)
    ON DELETE CASCADE
);