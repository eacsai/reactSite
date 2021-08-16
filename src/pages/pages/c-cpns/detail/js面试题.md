## 面向对象

### 创建对象的方式

1. ES5创建对象的方式

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayName = function () {
        console.log(this.name);
    }
}
var person = new Person('mike', 18);
var person2 = new Person('alice', 20);
// 相当于以下操作
var obj = new Object(); 
obj.__proto__ = Person.prototype;
Person.call(obj, 'mike', 18);
```

2. ES6创建对象的方式

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.hobby = ['football', 'singing'];
    }
     sayName() {
         console.log(this.name);
    }
}
var person1 = new Person('mike', 18);
person1.hobby.push('dancing');
var person2 = new Person('alice', 19);
```



### 防抖节流

1. 防抖：只执行最后一次

   ```javascript
   function debounce(fn,index,delay){
     let timer = null //借助闭包
     return function() {
         if(timer){
             clearTimeout(timer) 
         }
         timer = setTimeout(()=>fn(index),delay) // 简化写法
     }
   }
   let func = (index) => {
     console.log(index)
   }
   b = debounce(func,1,1000)
   b()
   b()
   b()
   ```

   

2. 节流：一段时间内只执行一次

```javascript
function debounce(fn,index,delay){
  let timer
  return function() {
    if(!timer){
      timer = setTimeout(()=>{
        fn(index)
        timer = null;
      },delay)
    }
  }
}
let func = (index) => {
  console.log(index)
}
b = debounce(func,1,1000)
b()
b()
b()
```

### 手写promise

```javascript
class HD {
  static PENDING = "pending";
  static FUFILED = "fulfilled";
  static REJECT = "rejected";
  constructor(executor) {
    this.status = HD.PENDING;
    this.value = null;
    this.callbacks = [];
    try {
      executor(this.resolve.bind(this), this.reject.bind(this));
    } catch (e) {
      this.reject(e);
    }
  }
  resolve(value) {
    if (this.status === HD.PENDING) {
      this.status = HD.FUFILED;
      this.value = value;
      setTimeout(() => {
        this.callbacks.map((callback) => callback.onFulfilled(this.value));
      });
    }
  }
  reject(reason) {
    if (this.status === HD.PENDING) {
      this.status = HD.REJECT;
      this.value = reason;
      this.callbacks.map((callback) => callback.onRejected(this.value));
    }
  }
  then(onFulfilled, onRejected) {
    if (typeof onFulfilled != "function") {
      onFulfilled = () => {};
    }
    if (typeof onRejected != "function") {
      onRejected = () => {};
    }
    return new HD((resolve, reject) => {
      if (this.status === HD.PENDING) {
        this.callbacks.push({
          onFulfilled: (value) => {
            try {
              let result = onFulfilled(this.value)
              resolve(result);
            } catch (e) {
              onRejected(e);
            }
          },
          onRejected: (value) => {
            try {
              onRejected(value);
            } catch (e) {
              onRejected(e);
            }
          },
        });
      }
      if (this.status === HD.FUFILED) {
        setTimeout(() => {
          try {
            let result = onFulfilled(this.value)
            resolve(result);
          } catch (e) {
            onRejected(e);
          }
        });
      }
      if (this.status === HD.REJECT) {
        setTimeout(() => {
          try {
            let result = onFulfilled(this.value)
            resolve(result);
          } catch (e) {
            onRejected(e);
          }
        });
      }
    });
  }
}
let p = new HD((resolve, reject) => {
  setTimeout(() => {
    resolve("解决");
    console.log(11);
  }, 1000);
}).then(
  (value) => {
    console.log(value);
    return '111'
  },
  (reason) => console.log(reason)
).then(
  (value) => console.log(value),
  (reason) => console.log(reason)
);

console.log("111");

```



### 手写new

```javascript
function _new(obj, ...rest){
  // 基于obj的原型创建一个新的对象
  const newObj = Object.create(obj.prototype);

  // 添加属性到新创建的newObj上, 并获取obj函数执行的结果.
  const result = obj.apply(newObj, rest);

  // 如果执行结果有返回值并且是一个对象, 返回执行的结果, 否则, 返回新创建的对象
  return typeof result === 'object' ? result : newObj;
}
```

#### 说明

- 创建一个新的对象
- 继承父类原型上的方法.
- 将步骤1新创建的对象作为this的上下文
- 执行构造函数内部的代码(给新对象添加属性)
- 如果执行结果有返回值并且是一个对象, 返回执行的结果, 否则, 返回新创建的对象。

### 手写apply

```javascript
function person(a,b){
  console.log(a,b)
  console.log(this.name);
}
const egg = {
  name: '蛋老师'
}
Function.prototype._call = function(obj,...args){
  obj.p = this
  obj.p(...args)
  delete obj.p
}
person._call(egg,1,2)
```



### 手写bind

```javascript
Function.prototype.myBind = function(ctx,...args) {
  if (typeof this !== 'function') {
    return;
  }
  const self = this;
  return function() {
    return self.apply(ctx, args)
  }
}
function test(a,b,c) {
  console.log(a,b,c);
  console.log('this',this);
  return '我是哈默';
}

const res1 = test(1,10,100);
const boundTest = test.myBind({name:'meituan'},1,11,111);
console.log('================================')
const res2 = boundTest(1,10,100);
console.log('res1',res1);
console.log('res2',res2);
```



#### 说明

* this的四种绑定规则：

**1.默认绑定**

独立函数调用时， `this` 指向全局对象，如果使用严格模式，那么全局对象无法使用默认绑定， `this` 绑定至 `undefined` 并抛错（TypeError: this is undefined）

**2.隐式绑定**

当函数作为引用属性被添加到对象中，隐式绑定规则会把函数调用中的 `this` 绑定到这个上下文对象

**3.显示绑定**

运用apply call 方法，在调用函数时候绑定this，也就是指定调用的函数的this值

**4.new绑定**

就是使用new操作符的时候的this绑定

上述四条规则优先级由上到下依次递增。



### 原型链和原型对象

1. 常见等式

```javascript
Object.prototype.show0 = 'show0'
function User(name) {
  //里面定义的东西都会在new时执行
  this.name = name;
  console.log(name);
}
User.prototype.show1 = function(){
  console.log('show1')
}
User.__proto__.show2 = function(){
  console.log('show2')
}
User.prototype.constructor.show3 = function(){
  console.log('show3')
}
console.dir(User)
class Creater {
  constructor(name){
    this.name = name;
    console.log(name);
  }
}
console.dir(Creater)
console.dir(Object)
const user1 = new User('mei');
const creater1 = new Creater('tuan')
console.log(User.prototype.__proto__ == User.__proto__.__proto__)
console.log(User.prototype.constructor == User)
console.log(Object.prototype == User.__proto__.__proto__)
console.log(Object.prototype == User.prototype.__proto__)
```



### this指向问题

1. 作为构造函数调用：

```javascript
function Point(x, y){ 
  console.log(this); // point对象
  this.x = x; 
  this.y = y; 
  this.moveTo = function(x,y){
     console.log('=====',this)
     console.log('1',this.x)//
     console.log('2',this.y)
     this.x = x;
     this.y = y;
     console.log('3',this.x);//1 10
     console.log('4',this.y);//1 10
  }
}
var p1 =  new Point(0,0); //注意这种形式方法的调用及apply、call的使用

var p2 = {
   x:0,
   y:0
}
p1.moveTo(1,1); 
p1.moveTo.apply(p2,[10,10]);
```

2. 对象中 **:** 定义：

```javascript
var o = {
    a: 10,
    b: {
        a: 12,
        fn: function(){
            console.log(this.a); // 输出结果是 12
            console.log(this); // 输出结果是 b 对象
        }
    }
}
//调用
o.b.fn();
```

3.  **=** 毁灭一切，暴露function原型

```javascript
var o = {
    a: 10,
    b: {
        a: 12,
        fn: function(){
            console.log(this.a); //undefined 若在对象o外定义a，则输出的就是其在外定义的值(全局变量)
            console.log(this);   // window
        }
    }
}
var j = o.b.fn; //只是将b对象下的方法赋值给j，并没有调用
j(); //调用，此时绑定的对象是window,并非b对象直接调用
```

4. =出现时，作为函数调用，this指向包含住function的对象，作为对象调用，this指向对象

```javascript
var point = { 
    x : 0, 
    y : 0, 
    moveTo : function(x, y) { 
       // 内部函数
       var moveX = function(x) { 
           this.x = x;
       }; 
       // 内部函数
       var moveY = function(y) { 
           this.y = y;
       };
       moveX(x); // 这里是全局调用
       moveY(y); 
    }; 
}; 
point.moveTo(1, 1); 
console.log(point.x); // 0
console.log(point.y); // 0
```

```javascript
var point = { 
         x : 0, 
         y : 0, 
         moveTo : function(x, y) { 
             this.x = x;
             console.log(this.x); // 1
             console.log(this);   // point对象

             // 内部函数
             var moveX = function(x) { 
                this.x = x;
             }; 
             // 内部函数
             var moveY = function(y) { 
                this.y = y;
             } 
             moveX(x); // 这里是全局调用
             moveY(y); 
         } 
    }; 
    point.moveTo(1, 1); 
    console.log(point.x); // 1
    console.log(point.y); // 0
    console.log(x); // 1
    console.log(y);// 1
```

function 传递变量：

```javascript
var point = { 
         x : 0, 
         y : 0, 
         moveTo : function(x, y) { 

             var that = this; //内部变量替换

             // 内部函数
             var moveX = function(x) { 
                 that.x = x; 
                // this.x = x;
             }; 
             // 内部函数
             var moveY = function(y) { 
                 that.y = y;
                // this.y = y;
             } 
             moveX(x); //这里依然是全局调用，但是在给变量赋值时，不再是this指向，而是that指向，而that指向的对象是 point。
             moveY(y); 
         } 
    }; 
    point.moveTo(1, 1); 
    console.log(point.x); // 1
    console.log(point.y); // 1
    console.log(x) // 报错 x is not defined
    console.log(y) //
```

