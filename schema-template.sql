DROP DATABASE IF EXISTS new_db_name;
CREATE DATABASE new_db_name;
USE new_db_name;

CREATE TABLE table_name(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	column_a VARCHAR(255),
	column_b INT
)