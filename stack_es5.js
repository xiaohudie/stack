"use strict";
/*
 *author 余梦
 *2016.8.18
 *栈的实现类
 */

function Stack(){
  this.dataStore = [];
  this.top = 0;
}

//压入栈方法
Stack.prototype.push = function (element) {
  this.dataStore[this.top++] = element;
};

//出栈方法
//栈顶的元素删除
//Top减一
//将栈顶元素返回给调用者
Stack.prototype.pop = function () {
  // var lastItem = this.dataStore.pop();
  // this.top--;
  // return lastItem;
  if(this.top==0){
    return undefined;
  }
  return this.dataStore[--this.top];
};

//查看栈顶元素方法
Stack.prototype.peek = function () {
  return this.dataStore[this.top-1];
};

//返回栈内元素数量
Stack.prototype.length = function () {

};

//清空栈
Stack.prototype.clear= function () {

};

Stack.prototype.toString = function(){
  return this.dataStore.join("|");
};

var maRong = new Stack();
maRong.push("牛二");
maRong.push("牛三");
maRong.push("牛四");
maRong.push("牛五");
maRong.push("宋喆");
maRong.toString();
console.log(maRong.toString());
maRong.pop();
console.log(maRong.toString());
console.log(maRong.top);
maRong.pop();
maRong.pop();
maRong.pop();
maRong.pop();
console.log(maRong.pop());
console.log(maRong.toString());
maRong.push("宋喆则");
console.log(maRong.peek());
