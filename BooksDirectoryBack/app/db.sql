CREATE DATABASE IF NOT EXISTS BooksDirectory;

USE BooksDirectory;

DROP TABLE IF EXISTS books;

DROP TABLE IF EXISTS users;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


CREATE TABLE books (
    id bigint(20) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    titre varchar(255) NOT NULL,
    nomAuteur varchar(255) NOT NULL,
    prenomAuteur varchar(255) NOT NULL,
    noTome INT NOT NULL,
    img BLOB NOT NULL 
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO books (id,titre,nomAuteur,prenomAuteur,noTome,img) VALUES 
(1, 'Seven Deadly Sins','Suzuki','Nakaba',1,'/c/Users/107281706/Desktop/Learning/COURSES/NodeJS/Exercices/images-test/BlackClover.jpg');
INSERT INTO books (id,titre,nomAuteur,prenomAuteur,noTome,img) VALUES 
(2, 'Black Clover','Tabata','Yûki',1,'/c/Users/107281706/Desktop/Learning/COURSES/NodeJS/Exercices/images-test/dbz.jpg');

CREATE TABLE users(  
    id int NOT NULL primary key AUTO_INCREMENT,
    nom VARCHAR(20),
    prenom VARCHAR(25),
    age INT,
    mail VARCHAR(100),
    telephone VARCHAR(10),
    mdp VARCHAR(100),
    role ENUM('membre','admin')
) default charset utf8 comment '';

INSERT INTO users (id,nom,prenom,age,mail,telephone,mdp,role) VALUES 
(1, 'Bleuse', 'Axel',22,'axel.bleuse@gmail.com','0601020304','azertyuiop','membre');

INSERT INTO users (id,nom,prenom,age,mail,telephone,mdp,role) VALUES 
(2, 'root', 'root',156,'root.root@root.com','0609080706', 'root', 'admin');