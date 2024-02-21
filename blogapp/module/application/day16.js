// // Step 1: Project Setup
// const express = require('express');
// const fs = require('fs');
// const app = express();
// const PORT = process.env.PORT || 3000;
// const POSTS_FILE = 'posts.json';

// // Step 3: Implement MVC Architecture
// // Models
// function getAllPosts() {
//   return JSON.parse(fs.readFileSync(POSTS_FILE, 'utf8'));
// }

// function createPost(post) {
//   const posts = getAllPosts();
//   posts.push(post);
//   fs.writeFileSync(POSTS_FILE, JSON.stringify(posts, null, 2));
// }

// // Controllers
// const postController = {
//   createPost: (req, res) => {
//     const { title, content } = req.body;
//     if (!title || !content) {
//       return res.status(400).json({ error: 'Title and content are required' });
//     }
//     const newPost = { title, content };
//     createPost(newPost);
//     res.status(201).json({ message: 'Post created successfully', post: newPost });
//   }
// };

// // Routes
// const postRoutes = express.Router();
// postRoutes.post('/posts', postController.createPost);

// // Step 5: Middleware
// // Logging Middleware
// function loggingMiddleware(req, res, next) {
//   console.log(`${req.method} ${req.url}`);
//   next();
// }

// // Error Handling Middleware
// function errorHandler(err, req, res, next) {
//   console.error(err.stack);
//   res.status(500).send('Something broke!');
// }

// // Step 6: Testing your Application
// // Middleware
// app.use(express.json()); // Parse JSON bodies
// app.use(loggingMiddleware); // Logging middleware

// // Routes
// app.use('/api', postRoutes);

// // Error handling middleware
// app.use(errorHandler);

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
