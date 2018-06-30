DROP DATABASE IF EXISTS appt_db;

CREATE DATABASE appt_db;
USE appt_db;


-- booking info
CREATE TABLE users (
  id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
  customer_name VARCHAR(75) NOT NULL,
  email VARCHAR(50),
  phone VARCHAR(15),
  customer_id VARCHAR(50),
  datetime_start datetime NOT NULL,
  datetime_end datetime NOT NULL,
  status_id int(11) NOT NULL DEFAULT '1',
  note VARCHAR(200)
);