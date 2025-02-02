DROP TABLE IF EXISTS sales;
GO

CREATE TABLE sales (
  id INT NOT NULL IDENTITY PRIMARY KEY,
  product VARCHAR(100) NOT NULL,
  quantity INT NOT NULL CHECK (quantity >= 1),
  price DECIMAL(10, 2) NOT NULL
);
GO

INSERT INTO
	sales (product, quantity, price)
VALUES 
	('Camiseta', 2, 79.9),
	('Vestido', 5, 45.5),
	('Terno', 1, 60),
	('Camiseta', 3, 85.4),
	('Vestido', 2, 75.5);
GO

SELECT
	s.product,
	SUM(s.quantity * s.price) AS revenue
FROM
	sales AS s
GROUP BY
	s.product
ORDER BY
	revenue
DESC;
GO