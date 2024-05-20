DROP TABLE IF EXISTS users;

CREATE TABLE users (
    email VARCHAR(255) PRIMARY KEY,
    password VARCHAR(255) NOT NULL
);

INSERT INTO users (email, password) VALUES
('who@fbi.com', 'me'),
('where@fbi.com', 'there'),
('how@fbi.com', 'exactly');
