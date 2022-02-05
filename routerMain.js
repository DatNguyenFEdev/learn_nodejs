var express = require("express");
var newController = require("./controller/todoController")

var router = express.Router();
router.get('/', newController.index)
// router.get('/detail/:slug', newController.detail)
router.post('/create/', newController.create)
router.post('/delete/:id', newController.destroy)
router.put('/edit/:id', newController.update)



module.exports = router