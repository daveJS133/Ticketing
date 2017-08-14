
module.exports = {
  function getRequestTime(initial) {

    if(initial == true){
      initial = false;
      return null;
    } else{
      return getTimeStamp();
    };

  }

  function getTimeStamp(){
    return Math.floor(Date.now().toISOString();
  };
}


