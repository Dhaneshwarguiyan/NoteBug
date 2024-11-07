const express = require('express');
const router = express.Router();

const {getUserPost,getOtherUserPost,postPostController,getAllPostController,deletePostController} = require('../Controllers/postControllers.js');
const {getbookmarkController,postbookmarkController} = require('../Controllers/bookmarkController.js');
const likeController = require('../Controllers/likeControllers.js');
const authMiddleware = require('../middlewares/authMiddleware.js');

router.post('/',authMiddleware,postPostController);
router.get('/',authMiddleware,getAllPostController);
router.get('/profile',authMiddleware,getUserPost);
router.get('/:userId',authMiddleware,getOtherUserPost);
router.delete('/delete/:postId',authMiddleware,deletePostController);
router.get('/likes/:id',authMiddleware,likeController);
router.get('/bookmarks/all',authMiddleware,getbookmarkController);
router.get('/bookmarks/:postId',authMiddleware,postbookmarkController);

module.exports = router;