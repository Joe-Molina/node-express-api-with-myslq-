CREATE DATABASE IF NOT EXISTS companydb;

CREATE TABLE employee (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    saralary INT DEFAULT NULL,
    PRIMARY KEY (id)
)

INSERT INTO employee VALUES 
(1, 'joe', 1000),
(2, 'jose', 2000),
(3, 'joel', 3000),
(4, 'joshua', 4000);