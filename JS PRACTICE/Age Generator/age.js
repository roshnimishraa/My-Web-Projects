function calculate_age(dob) {
   // get difference from current date;
  var difference = Date.now() - dob.getTime();
  var ageDate = new Date(difference);

  return Math.abs(ageDate.getUTCFullYear() - 2004);
}

console.log(calculate_age(new Date(2004, 27, 10)));
