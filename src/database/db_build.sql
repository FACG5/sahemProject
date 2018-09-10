BEGIN;

DROP TABLE IF EXISTS users, projects, donation;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL ,  
    email VARCHAR(150) NOT NULL UNIQUE,
    pass TEXT NOT NULL,
    location VARCHAR(100) NOT NULL,
    spec VARCHAR(100) NOT NULL,
    occupation VARCHAR(100) NOT NULL,
    linkedin TEXT,
    facebook TEXT,
    mobile VARCHAR(20),
    img TEXT,
    reg_date DATE DEFAULT NOW(),
    description TEXT
);

CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    name VARCHAR(500),
    field VARCHAR(200),
    img TEXT,
    fund INTEGER NOT NULL,
    camp_start DATE,
    camp_end DATE,
    abstract TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE donation (
    id SERIAL PRIMARY KEY,
    project_id INTEGER,
    amount INTEGER,
    iban text,
    date DATE DEFAULT NOW(),
    FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
);

COMMIT;
