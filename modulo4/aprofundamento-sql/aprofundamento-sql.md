```-- criação da tabela
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
-- inserir informaçoes na tabela
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);
INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
SELECT * FROM Actor;
-- altera dados da tabela
UPDATE Actor
SET 
 name = "Moacyr Franco",
 birth_date = "2020-02-10"
WHERE id = "003";
-- alterar nome da tabela 
UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";
-- 
UPDATE Actor
SET 
name = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender = "male"
WHERE id = "005";
-- Iria tirar salary da tabela 
ALTER TABLE Actor DROP COLUMN salary;
-- altera a coluna gender por sex
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
-- atera a coluna gender para 100 caracteres 
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

-- deletar  as informações de usuario na tabela
DELETE FROM Actor
WHERE name = 'Fernanda Montenegro';
-- deleta do genero male e salario maior que 100000
DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000;
-- pegar maior salario
SELECT MAX(salary) FROM Actor;
-- pegar menor salario 
SELECT MIN(salary) FROM Actor WHERE gender = "female";
-- pegar só atrizes 
SELECT COUNT(*) FROM Actor WHERE gender = "female";
-- soma de todos os salarios 
SELECT SUM(salary) FROM Actor;
-- conta quantos atores e atrizes separados por genero
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;
--  id e o nome dos atores em ordem decrescente alfabética
SELECT id, name FROM Actor
ORDER BY name DESC;
--  todos os atores ordenados pelo salário
SELECT * FROM Actor
ORDER BY salary;
-- retorne os atores com os três maiores salarios
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
-- retorne a média de salário por gênero
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;
```