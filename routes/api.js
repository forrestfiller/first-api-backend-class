var express = require('express')
var router = express.Router()

var politicians = [
	{id: 0, age: 70, firstname: 'Donald', lastname: 'Trump', party: 'r', 
	state: 'NY', positions: ['Real Estate', 'Investor', 'Golfer'], image: '0image'},
	{id: 1, age: 68, firstname: 'Hillary', lastname: 'Clinton', party: 'd', 
	state: 'NY', positions: ['Secretary of State','Senator', 'First Lady'], image: '1image'},
	{id: 2, age: 58, firstname: 'Chris', lastname: 'Christie', party: 'r', 
	state: 'NJ', positions: ['Governor','US Attorney for District of NJ'], image: '2image'},
	{id: 3, age: 54, firstname: 'Barack', lastname: 'Obama', party: 'd', 
	state: 'IL', positions: ['President','Senator', 'Lawyer'], image: '3image'},
	{id: 4, age: 53, firstname: 'Paul', lastname: 'Ryan', party: 'r', 
	state: 'WI', positions: ['Speaker of the House','Senator'], image: '4image'}
]
// add state, positions, then three more politicians

router.get('/:resource', function(req, res, next) {
  var resource = req.params.resource

  if (resource == 'politician'){
      res.json({
  	 	  confirmation: 'success',
  	      politician: politicians
      })

     return
  }

})
// this is an endpoint to support additional requests - this one is for 'id'
router.get('/:resource/:id', function(req, res, next) {
  var resource = req.params.resource
  var id = req.params.id

  if (resource == 'politician'){
  	var politician = politicians[id]



      res.json({
  	 	  confirmation: 'success',
  	      politician: politician
      })

     return
  }

})

module.exports = router
