DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS customers;
GO

CREATE TABLE customers (
  id INT NOT NULL IDENTITY PRIMARY KEY,
  [name] VARCHAR(100) NOT NULL,
  country VARCHAR(100) NOT NULL
);

CREATE TABLE orders (
  id INT NOT NULL IDENTITY PRIMARY KEY,
  customer_id INT NOT NULL,
  total DECIMAL(10, 2) NOT NULL,
  FOREIGN KEY (customer_id) REFERENCES customers(id)
);
GO

INSERT INTO
  customers ([name], country)
VALUES
  ('customer 1', 'Brazil'),
  ('customer 2', 'USA'),
  ('customer 3', 'England'),
  ('customer 4', 'Australia'),
  ('customer 5', 'Egypt'),
  ('customer 6', 'Japan'),
  ('customer 7', 'Panama'),
  ('customer 8', 'Turkey');
GO

DECLARE @customer_1_id INT;
DECLARE @customer_2_id INT;
DECLARE @customer_5_id INT;
DECLARE @customer_6_id INT;
DECLARE @customer_8_id INT;

SELECT @customer_1_id = id FROM customers WHERE [name] = 'customer 1';
SELECT @customer_2_id = id FROM customers WHERE [name] = 'customer 2';
SELECT @customer_5_id = id FROM customers WHERE [name] = 'customer 5';
SELECT @customer_6_id = id FROM customers WHERE [name] = 'customer 6';
SELECT @customer_8_id = id FROM customers WHERE [name] = 'customer 8';
GO

INSERT INTO
  orders (customer_id, total)
VALUES
  (@customer_1_id, 23.5),
  (@customer_2_id, 130.2),
  (@customer_5_id, 75.9),
  (@customer_6_id, 68.0),
  (@customer_8_id, 54.26),
  (@customer_1_id, 150.00),
  (@customer_1_id, 82.7),
  (@customer_8_id, 29.10),
  (@customer_2_id, 83),
  (@customer_6_id, 217.8),
  (@customer_5_id, 38.7),
  (@customer_1_id, 51),
  (@customer_2_id, 63),
  (@customer_2_id, 144.67),
  (@customer_6_id, 39.9);
GO

SELECT
	c.name,
	SUM(o.total) AS total_orders
FROM
	customers AS c
INNER JOIN
  orders AS o
ON
	c.id = o.customer_id
GROUP BY
	c.name
ORDER BY
	total_orders
DESC;
GO