
"use strict";

const empty = {a: {}};
console.log(Reflect.isExtensible(empty));
Reflect.preventExtensions(empty);
console.log(Reflect.isExtensible(empty));

empty.a= 123;
console.log(empty);

const p = new Proxy(function() {}, {
  apply: function(target, thisArg, argumentsList) {
    console.log("called: " + argumentsList.join(", "));
    console.log(target.constructor.name);
    console.log(thisArg);
    return argumentsList[0] + argumentsList[1] + argumentsList[2];
  }
});

function invoke() {
  console.log(p(1, 2, 3));
}
invoke();

/*const person = observable({
  name: '张三',
  age: 20
});

function print() {
  console.log(`${person.name}, ${person.age}`)
}

observe(print);
person.name = '李四';*/