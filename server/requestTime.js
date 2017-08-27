
module.exports = {
  checkInitial:function (initial) {

    if(initial == true){
      initial = false;
      return null;
    } else{
      return getTimeStamp();
    };

  },

  getTimeStamp:function (){
    return Math.floor(Date.now().toISOString());
  }
}


