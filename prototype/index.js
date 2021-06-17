// 构造函数
function Person() {}

var p = new Person();

p.name = "jin";

/*
 对象、函数拥有__proto__属性,函数才有prototype属性，通过__proto__形成原型链。
 (即当前对象找不到属性就，向上一层继续查找，直到查到顶层null停止)
*/

// p -> Person -> Object -> null

console.log(p.name);
console.log("__proto__ === prototype:", p.__proto__ === Person.prototype);
console.log("constructor:", p.constructor === Person.prototype.constructor);
console.log(Person.__proto__ === Object.__proto__);
console.log(Object.__proto__.__proto__);
