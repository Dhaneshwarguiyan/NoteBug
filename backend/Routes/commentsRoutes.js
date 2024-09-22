const express = require("express");
const router = express.Router();

const {getPostCommentController,commentPostController,deleteCommentController} = require('../Controllers/commentControllers.js');
const likeController = require('../Controllers/likeControllers.js');
const authMiddleware = require('../middlewares/authMiddleware.js');

router.post('/:postId',authMiddleware,commentPostController);
router.get('/:postId',authMiddleware,getPostCommentController);
router.delete("/delete/:commentId",authMiddleware,deleteCommentController);
router.put('/likes/:id',authMiddleware,likeController);

module.exports = router;