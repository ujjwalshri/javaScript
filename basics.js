// a=2;
// b=4;
// console.log(a*b);

// console.log("ujjwal is a good person");
//  A=9;
//  B=10;
// console.log(A*B);
// var a= 9;
// var b=3;
// var temp=a;
// a=b;
// b=temp;
// console.log(a);
// console.log(b)
//without using third variables

// var a=10;
// var b=5;

// a= a+b;
// b=a-b;
// a=a-b;
// console.log(a);
// console.log(b);

// var x= 12;
// for(var i=1;i<=10;i++){
//     console.log(`${x} * ${i} == ${x*i}` );
// }

// function table(x){
//     for(var i=1;i<=10;i++){
//     console.log(`${x} * ${i} == ${x*i}` );
// }


// 
// table(3);

//fat arrow function
// const sum=()=> `returing the sum of two numbers ${(a=10)+(b=20)}`;
// console.log(sum());


// let months=["January","febraury","March","April","May","June","July"];
// var ret=months.splice(months.length,0,"August");
// var index=months.indexOf("January");
// var deleted=months.splice(index,1);
// console.log(months);
// console.log(ret);
// console.log(deleted);
// const arr1=[1,4,9,16,25];
// let newArr = arr1.map((curElem,index,arr)=> {
//    return curElem>9;
// });
// console.log(arr1);
// console.log(newArr);
//map method does not change the original array it just returns another copy of it

//for each and do the same operation but foreach will return undefined in ans and the map() will return the new array copy
//with all the answers at with respect to each element in the array
 
// let newArr2= arr1.map((currElem,index,arr1)=>{
//     return `the index no is ${index}  the element is ${currElem} and it is present in ${arr1}`;
     
// });
// console.log(newArr2);

// Q. find the square root of each element in an array
// let arr= [25,36,49,64,81];
// let newArr = arr.map((e)=>{
//     return Math.sqrt(e);

// });
// console.log(newArr);

//Q. multiply each elemnt by 2 and return only those which are greater than 5
//chaining effect // merging one method with another method
// map(), reduce(), filter() are the most inp array methods used in the arrays
// let arr=[2,3,4,6,8];
// let ans=arr.map((e)=>e*2).filter((e)=>e>10);
// console.log(ans);


//# reduce() method
// reducer function 4 parameters
// let arr= [1,3,4];
// let ans= arr.reduce((sum,e)=>sum+=e);
// console.log(ans);

 


//Strings in javaScript
// very important topic
//a javaScript string is 0 or more written inside quotes
// you can use either single or double quotes
//Strings can be created as primitives
//from string literals or as a object using              string( contructor)

// let myName="this is my name ";
// let new_name=new String("this is new name");
// console.log(new_name);



//Escape character
// we can also use \"viking \" this is called escape characters
// let anySentence='We are the "viking" from the north '
// console.log(anySentence);





//finding a string in a string

//indexOf()
// the index of methods simply returns the index where the given string is found
//indexOf() method is case sensitive in javaScript


// let name= "ujjwal is a goood boy"

// console.log(name.indexOf("is",8));





//lastIndexOf()
// it just search from backwards


// let name= "ujjwal is a goood boy"

// console.log(name.lastIndexOf("is"));


// .search()
// this method just returns the position but cannot contain a second argument



//Extracting parts from a String 
// there are three methods for extracting a part of string 

// slice(start,end) : end is exclusive in this method
// slice method does not include the last 
//substring(start,end)
//substr(start,length) 

//slice example
// let str= "this is  my string string";
// let res= str.slice(0,6);
// console.log(res);


// let str= " this is my String string";
// let res= str.slice(0,-4);
// console.log(res);




// challenge time
// Q. Display only 280 characters of a string like use in twitter???

// let myTweets= "lorem lowreifsuh";
// let res=myTweets.slice(0,2)


//.substring()

// this method is similar to slice but it cannot except negative indexes

  // this  is same like we do in java so we are not gonna do this today



// The substr() method
// this is also similar to slice but  
// the difference is this that the second parameter specifies the lenggth of the extracted part
// if we add negative value in the second parameter in this method then we will not get any output

// var str= "Apple, banana , kiwi";
// // let res= str.slice(0,7);
// let res= str.slice(-6);
// console.log(res);





// Replacing String content 
// for doing tihis we will use replace() method
// by default replace method replace only this that is first found
// replace method is case sensitive
// let str= " sggntvvdsitvngsj ";
// let res = str.replace("tv","??LED TV ??");
// console.log(res);





//       ->  #Extracting string characters#

// 1. str.charAt()
// returns the specifies character at a string

// let str = "ujjwal";
// let res= str.charAt(0);
// console.log(res);


// 2. str.charCodeAt()
// * this method returns the unicode of the character present at that particular index 
// the method returns UTF-16 code 
// (an integer between 0 and 65535) 

//example
// let str= "ujjwal";
// let res=str.charCodeAt(0);
// console.log(res);



//Q. return  the unicode of last character in a string

// console.log("hellow".charCodeAt("hellow".length-1));



//  -> #Other useful methods#
// * concat()
// this method is used to concat two strings
// example

// let str1="ujjwal";
// let str3="    ";

// let str2="shreivadrs";
// console.log(str1.concat(str3,str2));


//* .trim()
// let str= "     turrewe rew       ";
// let res = str.trim();
// console.log(res);  



//Q. how to convert a string to an array??
// ans: we can use split() method in this case
// let str= "this sis fjefasifjoifsdfsdf";
// console.log(str.split(" "));\
 





//   --> # Time & Date in javaScript# <-- (important)

// use this to get the exact timing 
// let current_date= new Date().toLocaleString();
// let current_date2= new Date().toString();
// console.log(current_date2);


// console.log(Date.now());

// java Script count months from 0 to 11
// how to give currect time??
// console.log(new Date(2023,8,17).toLocaleString());



// we can covert a string into date using this

// var d= new Date("october 5 2023 12:20");
// console.log(d.toLocaleString());

// var d=new Date(0);// this will give first january 1970

// console.log(d.toLocaleString());


// Some other methods for Date()
// const date= new Date();
// console.log(date.toLocaleString());
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDay());
// console.log(date.getDate());
 
 
// ->Methods for gettting time()
// const time = new Date();
//  console.log(time.getTime());
//  console.log(time.getHours());
//  console.log(time.getMinutes());
//  console.log(time.getSeconds());
//  console.log(time.getMilliseconds());


//Methods for setting time
//just use .set and you will get all the automatic recommendations



// Practise time 
//Q. if your wann to ger only date
//use new Date().toLocaleDateString();
//Q. if you want only time
// use new Date().toLocaleTimeString();
//Q if you want both
// use new Date().toLocaleString();






//**************** Math Object in javaScript *********//

// console.log(Math.PI);
 
//Math.round()
// let a= 10.9;
// console.log(Math.round(a));


//Math.pow()
// console.log(Math.pow(2,3));// this will  give power

// Math.sqrt()
//Math.sqrt(x) returns the square root of x
// console.log(Math.sqrt(25));// this will give 5
// this converts negative values in positive values

//Math.abs()
// this returns the absolute difference bwetween two numbers
// console.log(Math.abs(2-6));// this will give 4

// Math.ceil()
// Math.ceil(x) returns the value of x rounded up to its nearrest integer
// at every number it gives the upper bound of that number 
// console.log(Math.ceil(99.1));
// console.log(Math.ceil(99.9));

// Math.floor()
//Math.floor(x) returns the floor of the number x
// console.log(Math.floor(5.1));
// console.log(Math.floor(5.9));

// Math.max()
// Math.max(x,y,z) this method  is used to find the maximum numbers between 2 or more arguments
// console.log(Math.max(0,150,30,20,-1,-200));

//Math.min()
// this methods returns the minimu number between difffrent argumentns
// console.log(Math.min(2,3,5));  

//Math.random()
// this return random value between 0 to 1
// console.log(Math.floor(Math.random()*10));

//Math.trunc()
// it returns the integer part of a number
//  console.log(Math.trunc(7.8));// this will return 7
//  console.log(Math.trunc(-8.9));// this will return -8









//   ------->>>>>>DOM in javaScript<<<<<<<---------------
 
// window vs document
// the document is the child of the window object
// window is the main container of the browser
// work of the document is to render html document
// this deals with the html and its elements


//Q. difference between DOM vs BOM??
// In simple maening all the operations which comes under Browser are performed by BOM


//# properties of window global object
// 1. innerwidth
// 2. innerheight

// alert()/ confirm()/ prompt() are also a part of BOM

//# DOM navigation
// 1. <HTML> : <body> , <Head> : <a>, <p> /// this is known as dom tree


// #document.documnetElement ->: return the root element of the dom model



//#document.querySelector -> returns the first matching values
// we can use class id or tag in querySelector method to perform any operation

//#document.querySelectorAll('.para').innerHTML="i changed again"; // this will apply to all tags with para as class
// we can select anything with querySelector

 // document.getElementByID is faster than querySelector
  

//  *********Objects in javaScript*********
// we can also create singleTon objects using Object.create
// 1. Object literals
// we can define keys and values in objects

//  **syntax**
// const user= {
//   key: "value",
//   key2:"value2" 
// }

//symbol in javaScript we can create symbols in javaScript
// var sym= Symbol("XXX");

// const jsUser= {
//   name: "ujjwal",
//   [sym]: "XXXX",
//   class: 15,
//   gfriend:"anshika",
//   email:"ujjwalshrivastava2323@gmial.com",
//   arr: [1,2,3,4,5]



// }

// console.log(jsUser.email);
// console.log(jsUser[sym]);


// 2. How to declare objects with the help of constructor

// const user_1 = new Object() // this will give a singleton object

// how to add objects???

// const obj_1={1:"a",2:"b"}
// const obj_2={3:"c", 4:"d"}
// // const obj3=Object.assign({},obj_1,obj_2); // this will add
// // const obj3={obj_1,obj_2} // this will not add
// const obj3={...obj_1,...obj_2} // this will addd values in obj_3 one by one using Spread operator(...);
// console.log(obj3);


// we can also make an array of objects this method is very important because we use it in the real time projects

// const aar_obj =[
//   {
//     id:"-99",
//     name:"fnahodaa"
//   },
//   {
//     id:"-65",
//     name:"sadijo"
//   },
//   {
//     id:"-98",
//     name:"dnjnfoi"
//   }
// ]

// const obj = {
//   id:34,
//   name:"ijefjs",
//   callNo: 6232636173
// } 
// console.log(Object.keys(obj));
// console.log(Object.values(obj));


// const course={
//   course1: "english",
//   techer: "fjifjdsf",
//   number:1012091092
// }
// // course.course1// this is the normal way of accessing the values in an object in javaScript

// //Object destructuring
// const {number:no}=course;
// // console.log(number);
// console.log(no); 



 
 




















