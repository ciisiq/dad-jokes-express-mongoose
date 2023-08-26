const express = require('express');
const router = express.Router();
const controller = require('./controller/controller');

router.get('/jokes', controller.getAllJokes);
router.post('/jokes', controller.addJoke);
router.delete('/jokes/:id', controller.deleteJoke);

module.exports = router;
