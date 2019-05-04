DROP DATABASE IF EXISTS top_songsDB;
CREATE database bamazonDB;

USE bamazonDB;

CREATE TABLE products(
item_id INTEGER NOT NULL AUTO_INCREMENT,
product_name VARCHAR(100),
department_name VARCHAR(100),
price DECIMAL(8, 2) UNSIGNED default 0,
stock_quantity INTEGER(10) UNSIGNED NULL default 0,
PRIMARY KEY (item_id)
);