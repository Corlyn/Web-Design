var name ="Corlyn";
alert("Hello"+name);

var name = "Yu";
var age = 18;
var isBoy = true;
var fruits = ["apple","banana","peach"];

alert(name);
alert(age);
alert(isBoy);
alert(fruits[0]);
alert(fruits[2]);

var addition= function(num)
{
	return num+10;
};
var age = 28;
var trueage= addition(age);
alert(trueage);

var age2 = 38;
var trueage2= addition(age2);
alert(trueage2);

(function (){
	alert("Hello World!");
})();


(function (){
	alert("Red");
})();

document.getElementById("byid").innerHTML="我來自ID";
document.getElementById("byid").style.color = "red";

document.getElementsByClassName("byclass")[0].innerHTML="我來自Class";
document.getElementsByClassName("byclass")[0].style.color="blue";


document.getElementsByTagName("div")[2].innerHTML = "我來自Tag";
document.getElementsByTagName("div")[2].style.color = "red";

document.getElementsByTagName("p")[0].innerHTML = "大小為30px的紅色字";
document.getElementsByTagName("p")[0].style.color = "red";
document.getElementsByTagName("p")[0].style.size = "30"