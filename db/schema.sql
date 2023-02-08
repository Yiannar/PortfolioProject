\c diamonds_info

DROP DATABASE IF EXISTS diamonds_info;
CREATE DATABASE diamonds_info;

CREATE TABLE diamonds(
    id SERIAL PRIMARY KEY,
    shape TEXT NOT NULL,
    carat NUMERIC,
    color TEXT NOT NULL,
    clarity TEXT NOT NULL,
    cut TEXT NOT NULL,
    price NUMERIC NOT NULL,
    is_reported BOOLEAN
);

