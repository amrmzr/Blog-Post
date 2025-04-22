import express from 'express';
import bodyParser from 'body-parser';
import __dirname from 'path';
const app = express();
const port = 3000;

app.use(express.static('public'));
app.set('views', (__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
var posts = [];

app.get('/', (req, res) => {
  res.render('index.ejs', { posts });
});
// app.get('/home', (req, res) => {
//   res.render('index.ejs', { posts });
// });
app.get('/about', (req, res) => {
  res.render('about.ejs');
});
app.get('/contact', (req, res) => {
  res.render('contact.ejs', {
    message: null,
  });
});

app.post('/contact', (req, res) => {
  const user = req.body['name'];
  res.render('contact.ejs', {
    message: `Thank you, ${user}! Your feedback has been received.`,
  });
});
app.post('/', (req, res) => {
  const title = req.body['title'];
  const content = req.body['blog-post'];
  const post = { title, content };
  posts.push(post);
  // console.log(posts);
  res.render('index.ejs', { posts });
});

app.get('/edit/:id', (req, res) => {
  res.render('edit.ejs', {
    id: req.params.id,
    title: posts[req.params.id].title,
    content: posts[req.params.id].content,
  });
});

app.post('/update/:id', (req, res) => {
  const id = req.params.id;
  posts.splice(id, 1);
  const title = req.body['title'];
  const content = req.body['blog-post'];
  const post = { title, content };
  posts.push(post);
  res.redirect('/');
});
app.get('/delete/:id', (req, res) => {
  const id = req.params.id;
  posts.splice(id, 1);
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
