const express = require('express');
const {postUser,getUserByEmail,updateUser,deleteUser} = require('../controllers/user.controller.js');

const router = express.Router();

router.post('/user', postUser);
router.get('/user/:email',getUserByEmail);
router.put('/user/:email',updateUser);
router.delete('/user/:email',deleteUser);

module.exports = router;