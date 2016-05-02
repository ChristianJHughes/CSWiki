var express = require('express'),
  app = express(),
  sessions = require('client-sessions'),
  adminOnly = require('./middleware/admin_only'),
  loadUser = require('./middleware/load_user');

// Enable template engine
app.set('view engine', 'ejs');
app.set('views', './templates');

// Enable sessions
app.use(sessions({
  cookieName: 'session',
  secret: 'lkajslkajsdlkajdsasndansd',
  duration: 24 * 60 * 60 * 1000,
  activeDuration: 1000 * 60 * 5
}));

// Load the user (if there is one)
app.use(loadUser);

// Login routes
var session = require('./endpoints/session.js');
app.get('/login', session.new);
app.post('/login', session.create);
app.get('/logout', session.destroy);

// Wiki Get Routes routes
var wiki = require('./endpoints/wiki.js');
app.get('/wiki', wiki.index);
app.get('/', wiki.index);
app.get('/wiki/:id', wiki.showContent);
app.get('/wiki/talk_page/:id', wiki.showTalkPage);

// A Route for the users page
app.get('/users', adminOnly, wiki.showUserPage)
app.get('/users/unban/:id', adminOnly, wiki.unbanUser);
app.get('/users/ban/:id', adminOnly, wiki.banUser);

//Routes for editing a content page.
app.get('/wiki/:id/edit', wiki.showEditPage);
app.post('/edit/:id', wiki.applyEdits);
app.post('/wiki/talk_page/:id', wiki.addComment);


app.listen(8080, function() {
  console.log("Listening on port 8080...");
});
