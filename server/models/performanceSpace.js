var mongoose = require("mongoose"); 
PerformanceSpaceSchema = new mongoose.Schema(
{
  age_limit:{type:String},
  age_limited:{type:Boolean, required: true},
  capacity:{type:Number, required:true},
  name:{type:String, required:true},
  wheelchair_access:{type:String, required:true}
});

module.exports = mongoose.model("PerformanceSpace", PerformanceSpaceSchema);