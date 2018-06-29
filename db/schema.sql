
DROP DATABASE IF EXISTS `appt_db`;
CREATE DATABASE `appt_db`;
USE `appt_db`;

CREATE TABLE client (
    id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    client_name VARCHAR(50) NOT NULL,
    email VARCHAR(50),
    phone VARCHAR(50)
);