CREATE DATABASE IF NOT EXISTS BooksDirectory;

USE BooksDirectory;

DROP TABLE IF EXISTS books;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


CREATE TABLE books (
    id bigint(20) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    titre varchar(255) NOT NULL,
    nomAuteur varchar(255) NOT NULL,
    prenomAuteur varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO books (id,titre,nomAuteur,prenomAuteur) VALUES 
(1, 'Seven Deadly Sins','Suzuki','Nakaba');
INSERT INTO books (id,titre,nomAuteur,prenomAuteur) VALUES 
(2, 'Black Clover','Tabata','Yûki');