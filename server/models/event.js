var mongoose = require("mongoose");


var eventSchema = new mongoose.Schema({
  age_category:{type:String, required: true},
  artist:{type:String, required: true},
  artist_type:{type:String, required: true},

  categories:
  {
    strand_titles:[{type:String, required: true}],
    subjects:
    [{type:String, required: true}],
    keywords:
    [
    {
      category:{type:String, required: true},
      keywords:[{type:String, required: true}]
    }
    ]
  },

  code:{type:String, required: true},
  country:{type:String, required: true},
  description:{type:String, required: true},
  description_teaser:{type:String, required: true},

  disabled:
  {
    audio:{type:Boolean, required: true},
    audio_dates:{type:Date},
    captioning:{type:Boolean, required: true},
    captioning_dates:{type:Date},
    other_services:{type:Boolean, required: true},
    other_services_dates:{type:Date},
    other_services_information:{type:Date},
    signed:{type:Boolean, required: true},
    signed_dates:{type:Date}
  },

  discounts:
  {
    friends:{type:Boolean, required: true},
    group:{type:Boolean, required: true},
    passport:{type:Boolean, required: true},
    schools:{type:Boolean, required: true},
    two_for_one:{type:Boolean, required: true}
  },

  festival:{type:String},
  festival_id:{type:String},
  fringe_first:{type:Boolean},
  genre:{type:String, required: true},
  genre_tags:[{type:String, required: true}],
  images:{},
  latitude:{type:Number, required: true},
  longitude:{type:Number, required: true},
  non_english:{type:Boolean, required: true},

  performance_space:

  {
   type: mongoose.Schema.Types.ObjectId,
   ref: 'PerformanceSpace'
 },

 performances:
 [
 {
  concession:{type:Number},
  concession_additional:{type:Number},
  concession_family:{type:Number},
  end:{type:Date, required:true},
  price:{type:Number, required:true},
  start:{type:Date, required:true},
  title:{type:String},
  performers_number:{type:Number, required:true},
  status:{type:String, required:true},
  sub_venue:{type:String},
  title:{type:String, required:true}
}
],

twitter:{type:String},
updated:{type:Date, required:true},
url:{type:String, required:true},
venue:
{
 type: mongoose.Schema.Types.ObjectId,
 ref: 'Venue'
},

warnings:{type:String},
website:{type:String, required: true}

});

module.exports = mongoose.model("Event", eventSchema);