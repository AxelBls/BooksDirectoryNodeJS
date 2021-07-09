CREATE DATABASE IF NOT EXISTS BooksDirectory;

USE BooksDirectory;

DROP TABLE IF EXISTS books;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


CREATE TABLE IF NOT EXISTS 'books' (
    'id' int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    'titre' varchar(255) NOT NULL,
    'nomAuteur' varchar(255) NOT NULL,
    'prenomAuteur' varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO 'books' ('id','titre','nomAuteur','prenomAuteur') VALUES 
(1, 'Seven Deadly Sins','Suzuki','Nakaba'),
(2, 'Black Clover','Tabata','Yûki'),