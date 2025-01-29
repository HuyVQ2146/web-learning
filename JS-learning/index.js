console.log("Hello"); //cái này sẽ hiện trong phần console trong inspect của web
alert("This is an alert!"); //window.alert() và alert() không khác gì nhau
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

let friendName = window.prompt("Friend Name: ");
console.log(friendName);
let friendAge = window.prompt("Friend Age: ");
hisAge = Number(friendAge);
hisAge += 1;
console.log(hisAge)

let k = 'pizza';
x = Number(k);
y = String(k);
z = Boolean(k);
console.log(x, typeof x); // NaN 'number'
console.log(y, typeof y); // pizza string
console.log(z, typeof z); // true 'boolean' (cứ khác (0 hoặc "") là true)

let username;
document.getElementById('mySubmit').onclick = function(){
    username = document.getElementById('myText').value;
    console.log(username);
    document.getElementById("welcome").textContent = `Hello ${username}`;
}

const pi = 3.14159 // gtri của const sẽ k bao h đổi
let radius;
let circumference;
radius = Number(window.prompt('Enter radius: '));
circumference = 2*pi*radius;
console.log(circumference)

document.getElementById('sub-radius').onclick = function(){
    radius = Number(document.getElementById('radius').value);
    let area = pi * (radius**2) ;
    console.log(area);
    document.getElementById('result').textContent = 'Area: ' + String(area) ;
}

console.log(Math.PI); //thư viện Math trong js
console.log(Math.E);
console.log(Math.floor(4.5)); // thư viện giống python
console.log(Math.ceil(4.5));
console.log(Math.pow(3,5));
console.log(Math.sqrt(99));
console.log(Math.trunc(8.33)); // làm tròn lên xg
console.log(Math.log(267));
console.log(Math.sin(45)); //ở đây số bên trong tự động là độ
console.log(Math.cos(45));
console.log(Math.tan(45)) ;
console.log(Math.abs(-456));
console.log(Math.sign(99)); //cnay xét âm dương: âm là -1, 0 là 0, dương là 1
console.log(Math.max(132,-123,31));
console.log(Math.min(-1109,33,99));
console.log(Math.random()); // tạo số bất kì giữa 1 và 0

// tạo 1 số random giữa 2 số
let min = 1;
let max = 100;
let ran = Math.trunc(Math.random() * (max - min)) + min;
console.log(ran);

const Age = document.getElementById('age');
const sub_age = document.getElementById("sub-age");
const result_age = document.getElementById("result-age");

sub_age.onclick = function(){
    age = Number(Age.value);
    if(age > 70){
        console.log('You are old');
        result_age.textContent = 'You are old';
    }
    else if(age < 20){
        console.log('You are young');
        result_age.textContent = 'You are young';
    }
    else{
        console.log('You are middle-aged');
        result_age.textContent = 'You are middle-aged';
    }

}

const checkBox = document.getElementById('checkBox');
const Visa = document.getElementById('Visa');
const Paypal = document.getElementById('Paypal');
const Card = document.getElementById('Card');
const form_btn = document.getElementById('form-btn');
const sub = document.getElementById('sub');
const pay = document.getElementById('pay');
form_btn.onclick = function(){
    if (checkBox.checked){ // cái .checked sẽ ktra true false (cả đc chọn hay k)
        sub.textContent = "Subcribed!"
    }
    else{
        sub.textContent = "Not Subcribed yet!"
    }

    if (Paypal.checked){
        pay.textContent = "Pay with PayPal"
    }
    else if (Visa.checked){
        pay.textContent = "Pay with Visa"
    }
    else if (Card.checked){
        pay.textContent = "Pay with Card"
    }
    else{
        pay.textContent = "Not paid yet!"
    }
}