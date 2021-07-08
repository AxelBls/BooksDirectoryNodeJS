CREATE TABLE IF NOT EXISTS 'books' (
    id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    titre varchar(255) NOT NULL,
    nomAuteur varchar(255) NOT NULL,
    prenomAuteur varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;