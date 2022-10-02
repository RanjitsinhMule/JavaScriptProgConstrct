function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  a=getRandomInt(99);
  b=getRandomInt(99);
  c=getRandomInt(99);
  d=getRandomInt(99);
  e=getRandomInt(99);
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
  console.log(e);
    sum=(a+b+c+d+e);
    console.log(sum);
var average = 0;
average = sum / 5;
console.log("Total Sum: " + sum);
console.log("Average: " + average);