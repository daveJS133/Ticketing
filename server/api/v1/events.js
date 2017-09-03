const router = require('express').Router();
const controller = require('../../controllers/events');

//Injects route multiple functionalities in routes
router.route('/')
.get(controller.list)
.post(controller.new);

router.route('/:id')
.get(controller.get)
.put(controller.update)
.delete(controller.delete)

router.param('id', controller.eventId);

module.exports = router