import { Router } from 'express'
const router = Router()
import * as flightsCtrl from '../controllers/flights.js'


// localhost:3000/flights - GET
router.get('/', flightsCtrl.index)
// localhost:3000/flights/new - GET
router.get('/new', flightsCtrl.new)
// localhost:3000/fllights/:id - GET
router.get('/:id', flightsCtrl.show)

// localhost:3000/flights/create
router.post('/', flightsCtrl.create)
// localhost:3000/flights/:id/tickets
router.post('/:id/tickets', flightsCtrl.createTicket)

router.post('/:id/destinations', flightsCtrl.addToFlight)

// localhost:3000/flights/:id
router.delete('/:id', flightsCtrl.delete)

// DELETE /flights/:id
router.delete('/:id/tickets/:ticketId', flightsCtrl.deleteTicket)

export {
  router
}