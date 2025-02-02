DROP TABLE IF EXISTS users;
GO

CREATE TABLE users (
  id INT NOT NULL IDENTITY PRIMARY KEY,
  email VARCHAR(100) NOT NULL,
  [name] VARCHAR(100) NOT NULL
);
GO

INSERT INTO
  users (email, [name])
VALUES
  ('dup_record_1@email.com', 'Dup 1'),
  ('unique_email@email.com', 'Unique 1'),
  ('dup_record_2@email.com', 'Unique 2'),
  ('dup_record_1@email.com', 'Dup 1'),
  ('dup_record_1@email.com', 'Dup 1'),
  ('dup_record_2@email.com', 'Unique 2'),
  ('dup_record_1@email.com', 'Dup 1'),
  ('dup_record_2@email.com', 'Unique 2');
GO

SELECT
	u.email,
	COUNT(u.email) AS occurrences
FROM
	users AS u
GROUP BY
	u.email
HAVING
	COUNT(u.email) > 1;
GO