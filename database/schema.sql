DROP TABLE IF EXISTS admins;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS paragraphs;

CREATE TABLE admins(
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  salt VARCHAR(255) NOT NULL,
  created_on DATE DEFAULT CURRENT_DATE
);

CREATE TABLE posts(
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  video_url TEXT NOT NULL,
  content TEXT NOT NULL,
  created_on DATE DEFAULT CURRENT_DATE
);

CREATE TABLE paragraphs(
  id SERIAL PRIMARY KEY,
  content TEXT NOT NULL
);

INSERT INTO admins(email, password, salt)
VALUES('yaguneetsidhu@gmail.com', '$2a$10$xBKJi6lS4inVGxdlnqxokeExVRv5PQaV7F0BVO5FcvLp/WyjRwp8C', '$2a$10$xBKJi6lS4inVGxdlnqxoke');

INSERT INTO posts(title, video_url, content)
VALUES('Page 2 to Page 1 on Google: Simple Methods to Rise in Rankings', 'https://www.youtube.com/embed/kDuSbebij54?rel=0', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo');

INSERT INTO posts(title, video_url, content)
VALUES('3 Insights on Property Management Companies Ranking #1 on Google', 'https://www.youtube.com/embed/UT0IjfYvcak?rel=0', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo');

INSERT INTO posts(title, video_url, content)
VALUES('How Local Businesses Rank Higher on Google Local Listings', 'https://www.youtube.com/embed/YH9qzfV6IGU?rel=0', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo');

INSERT INTO posts(title, video_url, content)
VALUES('4 Reasons Why Video is The Future of Property Management', 'https://www.youtube.com/embed/uWE1h3nWzcs?rel=0', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo');

INSERT INTO paragraphs(content)
VALUES('There are 198 million ad blockers in the world. And the thing is, people dont hate ads, they hate poor experiences. Dont believe? People remember Budweisers dog and horse 2014 Superbowl commercial more than the actual game itself. The Lego Movie was essentially a 2-hour advertisement and that generated $470 million at the box office.');

INSERT INTO paragraphs(content)
VALUES('In marketing, creating a great experience is paramount. Im a digital marketer who specializes in content, SEO, online advertising, UX design, and email marketing. My focus in the past 5 years has been specifically on small, local businesses as I have a passion in enriching the local community and to promote entrepreneurialism');

INSERT INTO paragraphs(content)
VALUES('I enjoy listening to Marketing podcasts like Call to Action, Marketing Week by Alan Harte, and Noah Kagan presents. One day, I wish to write with as much vigor as Mark Ritson from Marketing Week.');

