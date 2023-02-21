DROP DATABASE IF EXISTS diamonds_info;
CREATE DATABASE diamonds_info;


\c diamonds_info;

DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS diamonds;

CREATE TABLE diamonds(
    id SERIAL PRIMARY KEY,
    shape TEXT NOT NULL,
    image TEXT,
    carat NUMERIC DEFAULT 0,
    color TEXT NOT NULL,
    clarity TEXT NOT NULL,
    cut TEXT NOT NULL,
    price NUMERIC NOT NULL DEFAULT 0,
    is_reported BOOLEAN
);


CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    reviewer TEXT NOT NULL,
    title TEXT,
    content TEXT,
    rating NUMERIC,
    CHECK (rating >= 0 AND rating <=5),
    diamond_id INTEGER, 
    FOREIGN KEY (diamond_id) REFERENCES diamonds(id)
    ON DELETE CASCADE
);