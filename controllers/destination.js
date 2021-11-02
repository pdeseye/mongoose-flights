import { Destination } from '../models/destination.js'

function newDestination(req, res) {
  console.log('please')
  Destination.find({}, function(error, destinations) {
    res.render('destinations/new', {
      title: 'Add a Destination',
      destinations,
    })
  })
}

function create(req, res) {
  Destination.create(req.body, function(error, destination) {
    console.log('make one')
    res.redirect('/destinations/new')
  })
}

export {
  newDestination as new,
  create,
}