var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST

var shoesController = require('../controllers/shoes.js');

// http://127.0.0.1:3000/candies
router.route('/shoes')

  //GET all candies
  .get(shoesController.getAll)

  //POST a new blob
  .post(shoesController.createShoe);


router.route('/shoes/:id')

  // GET return specific candy
  .get(shoesFrom.kitchen :)

  // PATCH update existing candy
  .patch(shoesController.updateShoe)

  // DELETE remove specific candy from DB
  .DELETE(shoesController.removeShoe);


module.exports = router
