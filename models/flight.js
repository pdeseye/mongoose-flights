import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ticketSchema = new Schema({
  seat: {type: String, match: /[A-F][1-9]\d?/},
  price: {type: Number, min: 0},
})



const flightSchema = new Schema ({
  airline: {type: String, enum: ['American', 'Southwest', 'United']},
  airport: {type: String, enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'], default: "DEN"},
  flightNo: {type: Number, required: true},
  departs: {type: Date, default: function(){
    const date = new Date()
    const addOne = date.getFullYear()+1
    date.setFullYear(addOne)
    return date
    //alternative way to set default date to +1 year
    //default: new Date(new Date().setFullYear(new Date().getFullYear() + 1))
  }, },
  tickets: [ticketSchema],
  destinations: [{type: Schema.Types.ObjectId, ref: 'Destination'}]
})

// compile the schema into a model and export it
// using flightSchema to make the Flight model
const Flight = mongoose.model('Flight', flightSchema)



export{
  Flight,
}