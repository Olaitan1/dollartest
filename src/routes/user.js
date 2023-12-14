const router = require('express').Router();
const { viewProfile, getAllUsers, saveData, editUserById} = require('../controller/user-controller');

router.post('/save-data', saveData)
router.get('/all-users', getAllUsers)
router.get('/user/:userId', viewProfile)
router.put('/user/edit/:userId', editUserById)
module.exports = router