console.log("Hello"); //cái này sẽ hiện trong phần console trong inspect của web
window.alert("This is an alert!"); //window.alert() và alert() không khác gì nhau
window.alert("This is the second alert!"); //sau cái đầu thì sẽ hiện cnay
//js cũng chạy theo thứ tự từ trên xuống dưới

/*
Đây là cách
để comment nhiều dòng
trong JavaScript
*/
document.getElementById('h1').textContent = 'Welcome to my website!'; //tạo chữ trên web bằng JS
//document để chọn cái phần chữ trong web
document.getElementById('p').textContent = 'This is a simple website created using HTML, CSS, and JavaScript.';

let x;
x = 100;
console.log(x);
x = x + 1; // + - * ** / %  += -= *= /= **= %= giống python
console.log(x);

let y  = 123;
console.log(y);
y++; //cộng thêm 1 vào y
console.log(y);
y--; // trừ đi 1 vào y
console.log(y)


let Name = 'Huy';
let age = 19;
let price = 500;
let gpa = 3.45;
let online = true;
console.log(`Your age is ${age}, your current gpa is ${gpa}, and the test price is ${price}`)
// muốn dùng format trong JS thì dùng dấu `` 
console.log(typeof Name) //kiểu dữ liệu
console.log(typeof age) 
console.log(typeof online)
document.getElementById('p1').textContent = Name;
document.getElementById('p2').textContent = age;
document.getElementById('p3').textContent = gpa;

let friendName = window.prompt("Friend Name: ")
console.log(friendName)