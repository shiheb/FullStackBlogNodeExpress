const express = require('express');

const morgan = require('morgan');

const mongoose = require('mongoose');

const blogRoutes = require('./routes/blogRoutes');
const app = express();
const port = 3000;

// connect to mongoose
const dbURI = 'mongodb+srv://shiheb:pantopan1234@nodetuts.fvtku.mongodb.net/node-tuts?retryWrites=true&w=majority';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => {app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });})
  .catch(err => console.log(err));



//register view engine
app.set('view engine', 'ejs');

 //middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));

// // mongoose and mongo sandbox routes

// app.get('/add-blog', (req, res) => {
//   const blog = new Blog ({
//     title: 'new blog 2',
//     snippet: 'about my new blog',
//     body: 'more about my new blog'
//   });
//   blog.save()
//     .then((result) => {
//       res.send(result)
//     })
//     .catch((err) => {
//       console.log(err)
//     })
// });

// app.get('/all-blogs', (req, res) => {
//   Blog.find()
//   .then((result) => {
//     res.send(result);
//   })
//   .catch((err) => {
//     console.log(err)
//   })
// });

// app.get('/single-blog', (req, res) => {
//   Blog.findById('5f520f12ae2e6327080d8ed4')
//   .then((result) => {
//     res.send(result);
//   })
//   .catch((err) => {
//     console.log(err)
//   })
// });


app.get('/', (req, res) => {
  //res.send('<p>Hello World!</p>');
  //res.sendFile('./views/index.html', { root: __dirname });
  // const blogs = [
  //   {title: 'Yoshi finds eggs', snippet: 'lorem fsodifjjg pjjerjjdf'},
  //   {title: 'Boughi finds butter', snippet: 'lorem fsodfdgjjg pjjerjjdf'},
  //   {title: 'Maniro finds pasta', snippet:'lorem fsodidfgdgfjjg pjjerjjdf'},
  //   {title: 'Fedez finds lenses', snippet: 'lorem fsodidfgdfgfjjg pjjerjjdf'},
  //   {title: 'Chiarra finds stars', snippet: 'lorem dfgfghfsodifjjg pjjerjjdf'}
  // ]; 
  // res.render('index', {title:'Home', blogs:blogs}  )
 res.redirect('/blogs');
});

//blog routes
app.use('/blogs',blogRoutes);

app.get('/about', (req, res) => {
  //res.send('<p>About Page</p>');
  //res.sendFile('./views/about.html', { root: __dirname });
  res.render('about', {title:'About'} );
});

//redirects 
app.get('/about-us', (req, res) => {
       res.redirect('./about');
  });

  //404
  app.use((req,res)=>{
      //res.status(404).sendFile('./views/404.html', { root: __dirname });
    res.status(404).render('404', {title:'Page Not Found'});
  });