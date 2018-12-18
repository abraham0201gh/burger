### For Booleans use True/False.  In MySQL, zero is considered as false, and non-zero value is considered as true.  Table will populate with 0 and 1.
### Schema  

DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
( 
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id) 
);


INSERT INTO burgers (burger_name, devoured) VALUES ("Express Burger", false);
INSERT INTO burgers (burger_name, devoured) VALUES ("Node Burger", false);
INSERT INTO burgers (burger_name, devoured) VALUES ("For Sure Burger", false);





