var sqlite3 = require('sqlite3'),
    db = new sqlite3.Database('./cs_wiki.sqlite3');

// Create the database schema and populate
db.serialize(function() {
  // Create the posts table.
  db.run("CREATE TABLE pages (pageID INTEGER PRIMARY KEY, page_name TEXT, main_content_markdown TEXT)");
  // Create the comments table.
  db.run("CREATE TABLE comments (commentID INTEGER PRIMARY KEY, comment TEXT, associated_page INTEGER, FOREIGN KEY(associated_page) REFERENCES pages(pageID))");

  db.run("CREATE TABLE users (userID INTEGER PRIMARY KEY, username TEXT, password TEXT, isBanned INTEGER, isAdmin INTEGER)");
  // Add two sample posts.
  db.run("INSERT INTO pages (page_name, main_content_markdown) VALUES ('CIS 526 Information', 'CIS 526 is the *greatest class that has ever been taught*.')");
  db.run("INSERT INTO pages (page_name, main_content_markdown) VALUES ('Dogs', '**Dogs are the best.** Do you have a dog? Well you should. All hail the glow cloud.')");
  // Give each of those sample posts two comments.
  db.run("INSERT INTO comments (comment, associated_page) VALUES ('LOL this wiki is incredible!', 1)");
  db.run("INSERT INTO comments (comment, associated_page) VALUES ('This wiki is terrible, it needs major edits!', 1)");
  db.run("INSERT INTO comments (comment, associated_page) VALUES ('Who wrote this garbage?', 2)");
  db.run("INSERT INTO comments (comment, associated_page) VALUES ('This is awful, I am quiting the Internet.', 2)");

  //Create some users (there will be no way to add additional users in the inital application).
  db.run("INSERT INTO users (username, password, isBanned, isAdmin) VALUES ('admin1', '0000', 0, 1)");
  db.run("INSERT INTO users (username, password, isBanned, isAdmin) VALUES ('admin2', '0000', 0, 1)");
  db.run("INSERT INTO users (username, password, isBanned, isAdmin) VALUES ('bob', '1111', 0, 0)");
  db.run("INSERT INTO users (username, password, isBanned, isAdmin) VALUES ('christian', '1111', 0, 0)");
  db.run("INSERT INTO users (username, password, isBanned, isAdmin) VALUES ('bannedGuy', '1111', 1, 0)");
});
