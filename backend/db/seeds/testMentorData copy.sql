-- Insert data into the Users table (without mentor_id and mentee_id)
INSERT INTO users (first_name, last_name, email, profile_description, picture, sub)
VALUES
  ('Mike', 'Lee', 'mike.lee@example.com','Data scientist with a passion for leveraging data to solve complex problems. Skilled in various ML techniques.', 'https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&w=800', '1'),
  ('Jessica', 'Smith', 'jessica.smith@example.com', 'Experienced leader with a track record of successful team management and project delivery.','https://images.pexels.com/photos/4902634/pexels-photo-4902634.jpeg?auto=compress&cs=tinysrgb&w=800' ,'2'),
  ('Michael', 'Johnson', 'michael.johnson@example.com','Marketing expert with expertise in digital marketing strategies and brand building.','https://images.pexels.com/photos/6652928/pexels-photo-6652928.jpeg?auto=compress&cs=tinysrgb&w=800','3'),
  ('Emily', 'Brown', 'emily.brown@example.com','Software engineer specialized in full-stack web development. Strong problem-solving skills.','https://images.pexels.com/photos/6608313/pexels-photo-6608313.jpeg?auto=compress&cs=tinysrgb&w=800','4'),
  ('Robert', 'Davis', 'robert.davis@example.com','Machine Learning Engineer with a strong background in developing cutting-edge AI solutions.','https://images.pexels.com/photos/6147118/pexels-photo-6147118.jpeg?auto=compress&cs=tinysrgb&w=800','5'),
  ('James', 'Leblanc', 'james.leblanc@example.com','Data scientist with a passion for leveraging data to solve complex problems. Skilled in various ML techniques.', 'https://images.pexels.com/photos/3779760/pexels-photo-3779760.jpeg?auto=compress&cs=tinysrgb&w=800', '6'),
  ('Vicki', 'Tran', 'vicki.tran@example.com', 'Experienced leader with a track record of successful team management and project delivery.','https://images.pexels.com/photos/1556691/pexels-photo-1556691.jpeg?auto=compress&cs=tinysrgb&w=800' ,'7'),
  ('Omar', 'Joy', 'omar.joy@example.com','Marketing expert with expertise in digital marketing strategies and brand building.','https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=800','8'),
  ('Anna', 'Maria', 'anna.maria@example.com','Software engineer specialized in full-stack web development. Strong problem-solving skills.','https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=800','9'),
  ('Christopher', 'Moran', 'christopher.moran@example.com','Machine Learning Engineer with a strong background in developing cutting-edge AI solutions.','https://images.pexels.com/photos/4668523/pexels-photo-4668523.jpeg?auto=compress&cs=tinysrgb&w=800','10'),
  ('Winston', 'Chow', 'winston.chow@example.com','Data scientist with a passion for leveraging data to solve complex problems. Skilled in various ML techniques.', 'https://images.pexels.com/photos/3574678/pexels-photo-3574678.jpeg?auto=compress&cs=tinysrgb&w=800', '11'),
  ('Dylan', 'Rodrigues', 'dylan.rodrigues@example.com', 'Experienced leader with a track record of successful team management and project delivery.','https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=800' ,'12'),
  ('Kevin', 'Powers', 'kevin.powers@example.com','Marketing expert with expertise in digital marketing strategies and brand building.','https://images.pexels.com/photos/5081971/pexels-photo-5081971.jpeg?auto=compress&cs=tinysrgb&w=800','13'),
  ('Sarah', 'Summers', 'sarah.summers@example.com','Software engineer specialized in full-stack web development. Strong problem-solving skills.','https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800','14'),
  ('Robert', 'Alex', 'robert.alex@example.com','Machine Learning Engineer with a strong background in developing cutting-edge AI solutions.','https://images.pexels.com/photos/838413/pexels-photo-838413.jpeg?auto=compress&cs=tinysrgb&w=800','15');



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
  ('Migration Studies', 6, 'Expert in analyzing trends, causes, and impacts of human migration on societies, economies, and cultures.', 5),
  ('Leadership', 8, 'Led cross-functional teams in multiple projects.', 6),
  ('Programming', 5, 'Full-stack web development with JavaScript stack.', 6),
  ('Data Science', 10, 'Extensive experience with machine learning models.', 7),
  ('Marketing', 6, 'Ran successful marketing campaigns for startups.', 7),
  ('Deep Learning', 6, 'Trained neural networks for complex patterns, enabling advanced image recognition and natural language understanding.', 8),
  ('International Law', 8, 'Profound knowledge of legal principles governing relationships between nations, treaties, and diplomatic protocols.', 8),
  ('Sustainable Development', 5, 'Designed strategies for balanced economic, social, and environmental progress to ensure long-term well-being.', 9),
  ('Renewable Energy', 9, 'Specializes in alternative energy sources like solar, wind, and hydro for sustainable power solutions.', 9),
  ('Climate Science', 6, 'Deep understanding of Earth''s climate patterns, dynamics, and the implications of climate change.', 10),
  ('Migration Studies', 6, 'Expert in analyzing trends, causes, and impacts of human migration on societies, economies, and cultures.', 10),
  ('Leadership', 8, 'Led cross-functional teams in multiple projects.', 11),
  ('Programming', 5, 'Full-stack web development with JavaScript stack.', 11),
  ('Data Science', 10, 'Extensive experience with machine learning models.', 12),
  ('Marketing', 6, 'Ran successful marketing campaigns for startups.', 12),
  ('Deep Learning', 6, 'Trained neural networks for complex patterns, enabling advanced image recognition and natural language understanding.', 13),
  ('International Law', 8, 'Profound knowledge of legal principles governing relationships between nations, treaties, and diplomatic protocols.', 13),
  ('Sustainable Development', 5, 'Designed strategies for balanced economic, social, and environmental progress to ensure long-term well-being.', 14),
  ('Renewable Energy', 9, 'Specializes in alternative energy sources like solar, wind, and hydro for sustainable power solutions.', 14),
  ('Climate Science', 6, 'Deep understanding of Earth''s climate patterns, dynamics, and the implications of climate change.', 15),
  ('Migration Studies', 6, 'Expert in analyzing trends, causes, and impacts of human migration on societies, economies, and cultures.', 15);

-- Insert data into the Mentees_interest table
INSERT INTO mentees_interests ( name_of_subject, subject_description, mentee_id)
VALUES
  ('Artificial Intelligence', 'Exploring AI and its real-world applications.',1),
  ('Graphic Design', 'Learning to create visually appealing designs.', 2),
  ('Web Development', 'Building web applications from scratch.', 3),
  ('Web Development', 'Building web applications from scratch.', 4),
  ('Web Development', 'Building web applications from scratch.', 5),
  ('Web Development', 'Building web applications from scratch.', 6),
  ('Web Development', 'Building web applications from scratch.', 7),
  ('Web Development', 'Building web applications from scratch.', 8),
  ('Web Development', 'Building web applications from scratch.', 9),
  ('Web Development', 'Building web applications from scratch.', 10),
  ('Web Development', 'Building web applications from scratch.', 11),
  ('Web Development', 'Building web applications from scratch.', 12),
  ('Web Development', 'Building web applications from scratch.', 13),
  ('Web Development', 'Building web applications from scratch.', 14),
  ('Web Development', 'Building web applications from scratch.', 15);


-- Finally, insert data into the Connections table
INSERT INTO connections (requestor, requestee)
VALUES
  (1, 16),
  (2, 16),
  (3, 16),
  (4, 16),
  (5, 16),
  (6, 16),
  (7, 16),
  (8, 16),
  (9, 16),
  (10, 16),
  (11, 16),
  (12, 16),
  (13, 16),
  (14, 16),
  (15, 16);

