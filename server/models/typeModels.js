const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const typeSchema = new Schema({
  name_item: {
    type: String,
    require: [true, 'Name Item Required']
  },
  address: {
    type: String,
    require: [true, 'Address Required']
  },
  sale: {
    type: Number,
    require: [true, 'Sale Required']
  },
  specific: {
    type: {
      type: String,
    },
    luas: {
      type: String
    }
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  image: String,
  lat: String,
  lng: String
});

typeSchema.index({
  'name_item': 'text', 
  'address': 'text' 
})

const Type = mongoose.model('Type', typeSchema);

module.exports = Type;