-- Insert data into the Users table (without mentor_id and mentee_id)
INSERT INTO users (first_name, last_name, email, profile_description, picture, sub)
VALUES
  ('Mike', 'Lee', 'mike.lee@example.com','Data scientist with a passion for leveraging data to solve complex problems. Skilled in various ML techniques.', 'https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&w=800', '1'),
  ('Jessica', 'Smith', 'jessica.smith@example.com', 'Experienced leader with a track record of successful team management and project delivery.','https://images.pexels.com/photos/4902634/pexels-photo-4902634.jpeg?auto=compress&cs=tinysrgb&w=800' ,'2'),
  ('Michael', 'Johnson', 'michael.johnson@example.com','Marketing expert with expertise in digital marketing strategies and brand building.','https://images.pexels.com/photos/6652928/pexels-photo-6652928.jpeg?auto=compress&cs=tinysrgb&w=800','3'),
  ('Emily', 'Brown', 'emily.brown@example.com','Software engineer specialized in full-stack web development. Strong problem-solving skills.','https://images.pexels.com/photos/6608313/pexels-photo-6608313.jpeg?auto=compress&cs=tinysrgb&w=800','4'),
  ('Robert', 'Davis', 'robert.davis@example.com','Machine Learning Engineer with a strong background in developing cutting-edge AI solutions.','https://images.pexels.com/photos/6147118/pexels-photo-6147118.jpeg?auto=compress&cs=tinysrgb&w=800','5');



-- Insert data into the Mentor_exp table
INSERT INTO mentor_exps (skillset, years_of_exp, exp_description, mentor_id)
VALUES
  ('Leadership', 8, 'Led cross-functional teams in multiple projects.', 1),
  ('Programming', 5, 'Full-stack web development with JavaScript stack.', 2),
  ('Data Science', 10, 'Extensive experience with machine learning models.', 3),
  ('Marketing', 6, 'Ran successful marketing campaigns for startups.', 4),
  ('Deep Learning', 6, 'Trained neural networks for complex patterns, enabling advanced image recognition and natural language understanding.', 5),
  ('International Law', 8, 'Profound knowledge of legal principles governing relationships between nations, treaties, and diplomatic protocols.', 1),
  ('Sustainable Development', 5, 'Designed strategies for balanced economic, social, and environmental progress to ensure long-term well-being.', 2),
  ('Renewable Energy', 10, 'Specializes in alternative energy sources like solar, wind, and hydro for sustainable power solutions.', 3),
  ('Climate Science', 6, 'Deep understanding of Earth''s climate patterns, dynamics, and the implications of climate change.', 4),
  ('Migration Studies', 6, 'Expert in analyzing trends, causes, and impacts of human migration on societies, economies, and cultures.', 5);

-- Insert data into the Mentees_interest table
INSERT INTO mentees_interests ( name_of_subject, subject_description, mentee_id)
VALUES
  ('Artificial Intelligence', 'Exploring AI and its real-world applications.',1),
  ('Graphic Design', 'Learning to create visually appealing designs.', 2),
  ('Web Development', 'Building web applications from scratch.', 3),
  ('Web Development', 'Building web applications from scratch.', 4),
  ('Web Development', 'Building web applications from scratch.', 5);


-- Finally, insert data into the Connections table
INSERT INTO connections (requestor, requestee)
VALUES
  (2, 1),
  (3, 2),
  (1, 3),
  (4, 1),
  (5, 1);
