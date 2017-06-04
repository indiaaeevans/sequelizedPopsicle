CREATE DATABASE popsicles_db;
USE popsicles_db;

CREATE TABLE popsicles
(
	id INT NOT NULL AUTO_INCREMENT,
	pop_name VARCHAR(255) NOT NULL,
	devoured BIT DEFAULT 0,
	pop_date TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);
