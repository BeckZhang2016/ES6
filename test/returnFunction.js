/**
 * Created by beck.zhang on 6/15/2017.
 */
const proxyFunction = function proxyFucntion(a, b) {
  return function (c, d) {
    console.log("--->"+c,d);
    return c + d;
  }
};

console.log(proxyFunction(1, 1)());
console.log("ss");

