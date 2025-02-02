DROP TABLE IF EXISTS sales;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS categories;
GO

CREATE TABLE categories (
  id INT NOT NULL IDENTITY PRIMARY KEY,
  [name] VARCHAR(100) NOT NULL
);

CREATE TABLE products (
  id INT NOT NULL IDENTITY PRIMARY KEY,
  category_id INT NOT NULL,
  [name] VARCHAR(100) NOT NULL,
  FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE sales (
  id INT NOT NULL IDENTITY PRIMARY KEY,
  product_id INT NOT NULL,
  quantity INT NOT NULL,
  FOREIGN KEY (product_id) REFERENCES products(id)
);
GO

INSERT INTO 
  categories ([name])
VALUES
  ('Categoria 1'),
  ('Categoria 2'),
  ('Categoria 3');
GO

DECLARE @category_1_id INT;
DECLARE @category_2_id INT;
DECLARE @category_3_id INT;

SELECT @category_1_id = id FROM categories WHERE [name] = 'Categoria 1';
SELECT @category_2_id = id FROM categories WHERE [name] = 'Categoria 2';
SELECT @category_3_id = id FROM categories WHERE [name] = 'Categoria 3';

INSERT INTO
  products (category_id, [name])
VALUES
  (@category_1_id, 'Produto 1'),
  (@category_2_id, 'Produto 2'),
  (@category_1_id, 'Produto 3'),
  (@category_1_id, 'Produto 4'),
  (@category_3_id, 'Produto 5');
GO

DECLARE @product_1_id INT;
DECLARE @product_2_id INT;
DECLARE @product_3_id INT;
DECLARE @product_4_id INT;
DECLARE @product_5_id INT;

SELECT @product_1_id = id FROM products WHERE [name] = 'Produto 1';
SELECT @product_2_id = id FROM products WHERE [name] = 'Produto 2';
SELECT @product_3_id = id FROM products WHERE [name] = 'Produto 3';
SELECT @product_4_id = id FROM products WHERE [name] = 'Produto 4';
SELECT @product_5_id = id FROM products WHERE [name] = 'Produto 5';

INSERT INTO
  sales (product_id, quantity)
VALUES
  (@product_1_id, 26),
  (@product_2_id, 100),
  (@product_3_id, 52),
  (@product_4_id, 41),
  (@product_5_id, 112),
  (@product_3_id, 21),
  (@product_4_id, 74),
  (@product_1_id, 2),
  (@product_5_id, 94),
  (@product_4_id, 88);
GO

SELECT
  t.category_name,
  t.product_name,
  SUM(t.quantity) AS total
FROM (
	SELECT 
	  c.name AS category_name,
	  p.name AS product_name,
	  s.quantity,
	  SUM(s.quantity) OVER (PARTITION BY c.name) AS total_per_category
	FROM
    categories AS c 
	LEFT JOIN
    products AS p
  ON
    p.category_id = c.id
	LEFT JOIN
    sales AS s
  ON
    s.product_id = p.id
) AS t
WHERE
  total_per_category > 100
GROUP BY
  category_name, product_name;
GO