-- Create the database
DROP DATABASE IF EXISTS diamonds_info;
CREATE DATABASE diamonds_info;
\c diamonds_info;

DROP TABLE IF EXISTS profile;

-- User Profiles
CREATE TABLE profile (
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    birth_date DATE NOT NULL,
    gender TEXT,
    address TEXT,
    zipCode INTEGER
);

DROP TABLE IF EXISTS products;

-- Products
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    product_no INTEGER UNIQUE NOT NULL,
    shape TEXT NOT NULL,
    image TEXT,
    carat NUMERIC DEFAULT 0,
    color TEXT NOT NULL,
    clarity TEXT NOT NULL,
    cut TEXT NOT NULL,
    price NUMERIC NOT NULL DEFAULT 0,
    is_reported BOOLEAN,
    user_id INTEGER REFERENCES profile(id)
);

DROP TABLE IF EXISTS orders;

-- Orders
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES profile(id),
    order_date DATE NOT NULL,
    total_amount NUMERIC NOT NULL DEFAULT 0
);

DROP TABLE IF EXISTS orderItems;

-- Order Items
CREATE TABLE orderItems (
    id SERIAL PRIMARY KEY,
    order_id INTEGER REFERENCES orders(id),
    product_id INTEGER REFERENCES products(id),
    quantity INTEGER NOT NULL,
    item_price NUMERIC NOT NULL,
     user_id INTEGER REFERENCES profile(id)
);

DROP TABLE IF EXISTS reviews;

-- Reviews
CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    reviewer TEXT NOT NULL,
    title TEXT,
    content TEXT,
    rating NUMERIC CHECK (rating >= 0 AND rating <= 5),
    diamond_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
    user_id INTEGER REFERENCES profile(id)
);
