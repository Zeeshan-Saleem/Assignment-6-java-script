//chap 21 - 25
// task 1 

// var first_name=prompt("Enter first name:");
// var last_name=prompt("Enter last name:")
// var full_name = first_name + last_name;
// alert("Hellow " +full_name)


// task 2
// var a = prompt("Enter your favourite mobile");
// document.write("My favourite phone is " + a + a.length);


// task 3
//  var a = "pakistani";
//  var b = a.indexOf("n")
//  document.write("Pakistani " + "<br>")
//  document.write("index of letter n is " + b)


// task 4
// var a ="Hello World";
// var b = a.lastIndexOf("l");
// document.write(a  + "<br>")
// document.write("last index of letter l is " + b)


// task 5
// var a = "pakistani";
// var b = a.charAt(3)
// document.write("Character at 3rd index is " + b)


// task 6
// var a=["zeeshan"];
// var b =["saleem"];
// var c  = a.concat(b)
// document.write(c)



// task 7
// var city = "Hyderabad";
// var new_city = city.replace("Hyder","Islam");
// document.write(city + "<br>")
// document.write(new_city)


// // task 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var new_message = message.replace(/and/g,"&")
// document.write(message + "<br>")
// document.write(new_message)


// task 9
// var a = "472"
// var b= parseInt(a)
// document.write("value " + a + "<br>")
// document.write("type " + typeof(a)+ "<br>")
// document.write("value " + a + "<br>")
// document.write("value " + typeof(b) + "<br>")


// task 10

// var a = prompt("Enter any string: ")
// var b = a.toUpperCase();
// document.write(a + "<br>")
// document.write(b)


// task 11

// var a = prompt("Enter any string: ")
// var b = a.toLowerCase();
// document.write(a + "<br>")
// document.write(b)



// task 12
// var a = 35.36;
// var b = a.toString();
// document.write("Number : " + a + "<br>")
// var c = b.replace(".","")
// document.write("Result : " + c)


// task 13
// var a = "university of karachi";
// var b  = a.split("");
// document.write(b)

// task 14
// var a = prompt("Enter any country : ");
// var b = a.charAt(a.length-1);
// document.write(b)


// task 15
// var a = "The quick brown fox jumps over the lazy dog";
// var b = a.count("The")
// document.write(b)


// chap 26 -30
// task 1

// var a = prompt("Enter any positive integer no : ")
// var b = Math.round(a);
// document.write("Number" + a + "<br>")
// document.write("Round off = " + b + "<br>")
// var c= Math.floor(a);
// document.write("Floor value = " + c + "<br>")
// var d = Math.ceil(a);
// document.write("Ceil value = " + d + "<br>")


// task 2
// var a = prompt("Enter any negative integer no : ")
// var b = Math.round(a);
// document.write("Number" + a + "<br>")
// document.write("Round off = " + b + "<br>")
// var c= Math.floor(a);
// document.write("Floor value = " + c + "<br>")
// var d = Math.ceil(a);
// document.write("Ceil value = " + d + "<br>")


// task 3
// var a = +prompt("Enter any no")
// var b = Math.abs(a)
// document.write("Absolute value of " + a + " is " + b )


// task 4

// var a= Math.floor( Math.random() * 6 );
// var diceRoll = Math.floor( Math.random() * 6 ) +1;
// document.write("Random dice value : " + diceRoll)


// task5
// var a= Math.floor( Math.random() * 2 );
// var coin_value = Math.floor( Math.random() * 2 ) +1
// document.write("Random coin value : " + coin_value)


// task 6
// var a= Math.floor( Math.random() * 100 );
// var ran_num = Math.floor( Math.random() * 100 ) +1
// document.write("Random number between 1 to 100 : " + ran_num) 


// task 7
// var a = prompt("Enter your weight in kilograms: ")
// var b = parseInt(a)
// document.write(b)


// task 8
// var inp= +prompt("Enter any no form 1 to 10 : ")
// var a= Math.floor( Math.random() * 10 );
// var ran_num = Math.floor( Math.random() * 10 ) +1
// if (inp === ran_num){
//     alert("Congratulations! you win ")
// }
// else(alert("Try Again"))



// task 31 -34
// task 1
// var a = new Date;
// document.write(a)


// task 2
// var a  = new Date;
// var b = a.getMonth();
// document.write(a)

// task 3

// var a = new Date;
// b = a.toString()
// var c = b.slice(0,3)
// alert(c)

// task 4
// var a = new Date
// b = a.toString();
// var c  = b.splice(0,3)
// if (c == Sat || c == Sun){
//     alert("Its Funday!")
// }
// else(alert("Its week dau"))



//  task 5
// var a = new Date
// // document.write(a )
// var b = a.toString()
// document.write(b + "<br>")
// var c = b.slice(8,10)
// // document.write(c)
// if (c <= 15){
//     document.write("First fifteen days of month")
// }
// else(document.write("Last 15 days of month"))


// task 6
// var a = prompt("Enter your date of birth");
// var b =  a.getTime();
// var c = new Date;
// var d = c.getTime();
// var diff = d -a;
// var age = Math.floor(diff/(1000*60*60*24*30*12))
// document.write(age)


// task 7
// var a = new Date;
// b = a.toString()
// var c = b.slice(0,3)
// alert(c)

// task 8
// var a = new Date
// b = a.toString();
// var c  = b.splice(0,3)
// if (c == Sat || c == Sun){
//     alert("Its Funday!")
// }
// else(alert("Its week dau"))

//  task 9
// var a = new Date
// // document.write(a )
// var b = a.toString()
// document.write(b + "<br>")
// var c = b.slice(8,10)
// // document.write(c)
// if (c <= 15){
//     document.write("First fifteen days of month")
// }
// else(document.write("Last 15 days of month"))


// chap 35-38
// task 1

//  function cur_date(){
//     var a = new Date();
//     document.write(a)
// }
// cur_date()


// task 2
// function abc(){
// var a =prompt("Enter first name")
// var b = prompt("Enter last name")
// var c = a + b
// alert("Hello " + c)
// }
// abc()


// task 3
// function abc(){
//     var a =+prompt("Enter first name")
//     var b = +prompt("Enter last name")
//     var c = a + b
//     alert (c)
//     }
//     abc()

// task 4
//  function calc(num1, opr, num2){
//      if (opr ==="+"){
//          return num1 + num2
//      }
//      else if(opr ==="-"){
//          return num1 - num2
//      }
//      else if(opr === "*"){
//         return num1 * num2
//      }
//      else if(opr === "/"){
//         return num1 / num2
//      }

//  }
// var a = calc(2,"*",8)
// document.write(a)


// task 5

// function sq(a){
//     var a = a**2
//     return a
// }
// b =sq(4)
// document.write(b)


// task 6

// function factorialize(num) {
//     if (num < 0) {
//         return -1;
//     }
//     else if(num == 0){
//         return 1;
//     }
//     else (return (num * factorialize(num - 1)))

// }
// a = factorialize(5)
// document.write(a)



// task 7
// function counting (){
// var a = +prompt("Enter first no :");
// var b = +prompt("Enter second no :");
// for (var i =  a; i <=b; i++){
//     document. write(i)
// }
// }
// counting()


// task 8


//  function calc(num1, opr, num2){
//      if (opr ==="+"){
//          return num1 + num2
//      }
//      else if(opr ==="-"){
//          return num1 - num2
//      }
//      else if(opr === "*"){
//         return num1 * num2
//      }
//      else if(opr === "/"){
//         return num1 / num2
//      }

//  }
// var a = calc(2,"*",8)
// document.write(a)