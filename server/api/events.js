const router = require('express').Router();
const controller = require('server/contollers/events');

router.route('/')
.get(contoller.list)
.post(controller.new);

router.route('/:id')
.get(controller.get)
.put(controller.update)
.delete(controller.delete)

router.param('id', controller.eventID)

module.exports = router