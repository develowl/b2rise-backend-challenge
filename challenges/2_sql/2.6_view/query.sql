DROP VIEW IF EXISTS monthly_summary;
DROP TABLE IF EXISTS transactions;
GO

CREATE TABLE transactions (
  id INT NOT NULL IDENTITY PRIMARY KEY,
  account_id INT NOT NULL,
  transaction_date DATE NOT NULL,
  amount DECIMAL(10, 2) NOT NULL
);
GO

INSERT INTO
    transactions (account_id, transaction_date, amount) 
VALUES
  (1, '2024-06-10', 5000.00),
	(2, '2024-06-15', 6000.00),
	(3, '2024-07-12', 2200.00),
	(2, '2024-07-25', 2800.00),
	(1, '2024-07-27', 1800.00),
	(3, '2024-08-15', 7000.00),
	(1, '2024-08-18', 3500.00),
	(1, '2024-09-12', 2500.00),
	(3, '2024-09-25', 3500.00),
	(2, '2024-10-05', 2000.00),
	(1, '2024-10-10', 2500.00),
	(3, '2024-11-05', 1500.00),
	(2, '2024-11-10', 4000.00),
	(2, '2024-12-10', 3000.00),
	(2, '2024-12-20', 6000.00),
	(3, '2025-01-10', 1500.00),
	(1, '2025-01-15', 2000.00),
	(2, '2025-02-05', 5000.00),
	(2, '2025-01-25', 1200.00),
	(1, '2025-02-10', 8000.00),
	(3, '2025-01-30', 2500.00),
	(3, '2025-02-01', 3000.00),
	(2, '2025-01-20', 7000.00),
	(1, '2025-01-22', 4000.00),
	(2, '2025-02-15', 5500.00),
	(3, '2025-02-20', 4500.00),
	(1, '2025-01-10', 1200.00),
	(3, '2025-01-25', 1500.00),
	(3, '2025-02-01', 9500.00);
GO

CREATE VIEW monthly_summary AS 
WITH formatted_transactions AS (
    SELECT 
        t.account_id,
        FORMAT(t.transaction_date, 'yyyy-MM') AS month_year,
        t.amount
    FROM 
        transactions t
)
SELECT 
    ft.account_id, 
    ft.month_year, 
    SUM(ft.amount) AS total
FROM 
    formatted_transactions ft
GROUP BY 
    ft.account_id, 
    ft.month_year;
GO

SELECT
    ms.account_id,
    ms.month_year,
    ms.total
FROM
    monthly_summary AS ms 
WHERE
    total > 10000;
GO