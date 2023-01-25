module.exports= (server => {
    const PostController = require('../controllers/postController');
    server.route('/posts')
        .get(PostController.list_all_posts);
});