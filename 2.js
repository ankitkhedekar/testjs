// problem: why does it log out out 1000?
// fix it to log 100, 200, 300, 400, 500 etc

// loops 10 times from 0 - 1000 in increments of 100
for (var i = 100; i <= 1000; i += 100) {//changed the initial value of i to 100 to get desired output
    waitFor(i, function then(j) {
      console.log(j);
    });
}

// this will run a callback function after waiting milliseconds
function waitFor(milliseconds, callback) {
  setTimeout(callback(milliseconds), milliseconds)//the call back function required a parameter
}
