const express =require('express');
const router =express.Router();
const questController = require('../Controllers/questControllers')
router.post('/question',questController.create_quest)

router.get('/questions',questController.select_quest)

router.put('/question/id',questController.update_quest)

router.get('/question/id',questController.select_rep)

router.delete("/question/:id", questController.delete_quest)
module.exports = router;

