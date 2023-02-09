\c diamonds_info;

INSERT INTO diamonds( shape , carat , color , clarity , cut, price, is_reported ) VALUES 
('Princess', 1.03, 'D', 'IF', 'Excellent', 2700, true),
('Round', 1.02, 'I', 'VS1', 'Ideal', 5000, true),
('Cushion', 1.01, 'I', 'VVS2', 'Very Good', 3000, true),
('Pear', 0.40, 'J', 'SI1', 'Good', 417, true),
('Emerald', 10.06, 'J', 'VS2', 'Very Good', 294520, true),
('Asscher', 6.40, 'K', 'VS2', 'Very Good', 88169, true),
('Oval', 0.23, 'F', 'VVS1', 'Very Good', 322, true),
('Marquise', 0.30, 'E', 'VS2', 'Very Good', 759, true),
('Radiant', 0.32, 'G', 'IF', 'Very Good', 441, true),
('Heart', 5.36, 'D', 'FL', 'Very Good', 407848, true);


INSERT INTO reviews ( diamond_id, reviwer, title, content, rating) VALUES
('1', 'John', 'My Favorite', 'This diamond is such a great gift my wife loves it!', 5),
('2', 'Jane', 'My Favorite', 'I love this shape but I would like a better clarity!', 3),
('3', 'Maria', 'My Least Favorite', 'This diamond is okay but its just lacking something', 3),
('4', 'Juliana', 'I Love Going Here', 'It fits perfectly', 5),
('5', 'David', 'Cool Site', 'okay cool diamonds', 3),
('6', 'Mr. Mingo', 'So Helpful', 'I love the information on this diamond', 3),
('7', 'Alison', 'Best for gifts', 'I love it!', 4),
('8', 'Hannah', 'Insert Confetti Emoji Here', 'My sister loves this for her graduation!', 4),
('9', 'Gabi', 'My Friend Hannah', 'Gets a discount if I leave a positive review, so here it is', 5),
('10', 'Mary', 'My Favorite', 'Love the product shipping took long though', 3),
('1', 'Elizabeth', 'Fell in love', 'Loved!', 5),
('2', 'Jaden', 'Best for Valentines', 'Hopes my wife loves this', 5),
('3', 'Jasen', 'Wife hated shape', 'my wife hated it but the diamond was good quality', 2),
('4', 'Bryanna', 'Loved!', 'telling everybody', 5),
('5', 'Brittani', 'A lifesaver!','Fast shipping time', 4),
('6', 'Keisha', 'Insert Confetti Emoji Here', 'I survived 6 hours at the DMV!', 4),
('7', 'Devyn', 'Present for mom', 'my mom loved this gift!', 5),
('8', 'Evan', 'Engagement', 'Best engagment ring she said yes!', 5),
('9', 'Tiffany', 'Nice I suppose ', 'Not super impressed', 2),
('10', 'Cierra', 'Best gift to self', 'I am in love', 5);