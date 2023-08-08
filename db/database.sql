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

-- aplicacion de notas

CREATE DATABASE IF NOT EXISTS notasrapidasdb;

CREATE TABLE users (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    email VARCHAR(45) DEFAULT NULL,
    password VARCHAR(45) DEFAULT NULL,
    PRIMARY KEY (id)
)

CREATE TABLE notes (
    id INT(11) NOT NULL AUTO_INCREMENT,
    title VARCHAR(45) DEFAULT NULL,
    content TEXT(45) DEFAULT NULL,
    createdAt VARCHAR(45) DEFAULT NULL,
    userId INT(11),
    PRIMARY KEY (id),
    FOREIGN KEY (userId) REFERENCES users (id)
);
