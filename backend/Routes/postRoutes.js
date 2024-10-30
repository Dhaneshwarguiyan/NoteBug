const express = require('express');
const router = express.Router();

const {getUserPost,getOtherUserPost,postPostController,getAllPostController,deletePostController} = require('../Controllers/postControllers.js');
const likeController = require('../Controllers/likeControllers.js');
const authMiddleware = require('../middlewares/authMiddleware.js');

router.post('/',authMiddleware,postPostController);
router.get('/',authMiddleware,getAllPostController);
router.get('/profile',authMiddleware,getUserPost);
router.get('/:userId',authMiddleware,getOtherUserPost);
router.delete('/delete/:postId',authMiddleware,deletePostController);
router.post('/likes/:id',authMiddleware,likeController);

module.exports = router;