function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

exports.getRandomIndex = getRandomIndex;

/* Hi your getRandomIndex method is not working
If you want you can use the below method to generate 
random number between min and max 
you can pass min as 0 and max as array length 
Hope this helps

function between(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  */
