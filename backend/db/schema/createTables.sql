-- Drop existing tables
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS mentors CASCADE;
DROP TABLE IF EXISTS mentees CASCADE;
DROP TABLE IF EXISTS mentees_interests CASCADE;
DROP TABLE IF EXISTS mentor_exps CASCADE;
DROP TABLE IF EXISTS connections CASCADE;

-- Create Users Table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  email VARCHAR(255),
  profile_description TEXT,
  picture TEXT,
  mentor_id INT,
  mentee_id INT,
  sub VARCHAR(255),
  unique(mentor_id),
  unique(mentee_id)
);

-- Create Mentees Table
CREATE TABLE mentees (
  id SERIAL PRIMARY KEY,
  mentee_user_id INTEGER REFERENCES users(mentee_id) ON DELETE CASCADE
);

-- Create Mentor Table
CREATE TABLE mentors (
  id SERIAL PRIMARY KEY,
  mentor_user_id INTEGER REFERENCES users(mentor_id) ON DELETE CASCADE
);
-- Create Mentor_exp Table
CREATE TABLE mentor_exps (
  id SERIAL PRIMARY KEY,
  skillset VARCHAR(255),
  years_of_exp INT,
  exp_description TEXT,
  mentor_id INTEGER REFERENCES mentors(id) ON DELETE CASCADE
);

-- Create Mentees_interest Table
CREATE TABLE mentees_interests (
  id SERIAL PRIMARY KEY,
  name_of_subject VARCHAR(255),
  subject_description TEXT,
  mentee_id INTEGER REFERENCES mentees(id) ON DELETE CASCADE
);

-- Create Connections Table
CREATE TABLE connections (
  id SERIAL PRIMARY KEY,
  mentor_id INTEGER REFERENCES mentors(id) ON DELETE CASCADE,
  mentee_id INTEGER REFERENCES mentees(id) ON DELETE CASCADE
);
