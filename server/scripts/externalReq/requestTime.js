  exports.checkInitial = function (initial) {
   if(initial == true){
    initial = false;
    return undefined;
  }else{
    console.log('this. timestamp =   ', this.getTimeStamp())
    return this.getTimeStamp();
  };

}

function pad(number) {
    if (number < 10) {
      return '0' + number;
    }
    return number;
  }

exports.getTimeStamp = function(){
  let date = new Date()
  dateString = date.getUTCFullYear() +
  '-' + pad(date.getUTCMonth() + 1) +
  '-' + pad(date.getUTCDate()) +
  '+' + pad(date.getUTCHours()) +
  ':' + pad(date.getUTCMinutes()) +
  ':' + pad(date.getUTCSeconds());
  console.log(dateString);
  return dateString
}




