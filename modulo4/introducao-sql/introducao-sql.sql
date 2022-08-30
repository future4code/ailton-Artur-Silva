CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY, -- VARCHAR porque é string
    name  VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL, -- DATE representa data
    gender VARCHAR(6) NOT NULL
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "male"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
INSERT INTO Actor (id, name,  salary, birth_date, gender)
VALUES(
  "004",
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  71933333,
  "1979-03-26", 
  "female"
);

DELETE FROM Actor
WHERE id = "004";

SELECT * from Actor;

SELECT salary, name from Actor
WHERE name = "Tony Ramos";

SELECT id, salary, name from Actor
WHERE salary < 500000;

DESCRIBE Actor; -- Descreve estrutura da tabela criada 