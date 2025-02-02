DROP TABLE IF EXISTS employees;
GO

CREATE TABLE employees (
  id INT NOT NULL IDENTITY PRIMARY KEY,
  [name] VARCHAR(100) NOT NULL,
  salary DECIMAL(10, 2) NOT NULL
);
GO

INSERT INTO 
  employees ([name], salary)
VALUES
  ('employee 1', 5100.00),
  ('employee 2', 2050.00),
  ('employee 3', 4930.00),
  ('employee 4', 6210.00),
  ('employee 5', 3725.00);
GO

UPDATE
  employees
SET
  salary = salary + (salary * 0.1)
WHERE
  salary < 5000;
GO