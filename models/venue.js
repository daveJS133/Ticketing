var mongoose = require("mongoose");

venueSchema = new mongoose.Schema(
{
  address:{type:String, required: true},
  box_office_fringe:{type:Boolean, required: true},
  box_office_opening:{type:String, required: true},
  cafe_description:{type:String, required: true},
  code:{type:String, required: true},
  description:{type:String, required: true},
  disabled_description:{type:String, required: true},
  email:{type:{type:String},
  fax:{type:String},
  has_bar:{type:Boolean, required:true},
  has_booking_over_card:{type:Boolean, required:true},
  has_booking_over_phone:{type:Boolean, required:true},
  has_booking_over_web:{type:Boolean, required:true},
  has_cafe:{type:Boolean, required:true},
  name:{type:String, required: true},
  phone:{type:String, required: true},
  position:
  {
    {type:Number, required:true},
    {type:Number, required:true}
  },

  post_code:{type:String, required: true},
  web_address:{type:String, required: true},


  performance_spaces:
  [ id: 
  {
   type: mongoose.Schema.Types.ObjectId,
   ref: "performanceSpace"
 }
 ]

});

module.exports = mongoose.model("Venue", venueSchema);