const express = require("express");
const router = express.Router();

const {solutionController,deleteSolutionController,getAllSolutionController} = require('../Controllers/solutionControllers.js');
const authMiddleware = require('../middlewares/authMiddleware.js');
const likeController = require("../Controllers/likeControllers.js");

router.post('/:postId',authMiddleware,solutionController)
router.get('/:postId',authMiddleware,getAllSolutionController)
router.delete('/delete/:solutionId',authMiddleware,deleteSolutionController)
router.put('/likes/:id',authMiddleware,likeController);

module.exports = router;