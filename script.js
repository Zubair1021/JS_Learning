
// -----------------------------------------Eligible if any two conditions are true--------------------------------------------
// var height=prompt("Enter height");
// var age=prompt("Enter the age");
// var education=prompt("Enter the Education");

// height=Number(height);
// age=Number(age);
// education=Number(education); 

// if((height>=5.6 && age>=18)||(height===5.6 && education===14)||(education===14 && age>=18) ){
//     console.log("You are eligible for the trial");
// }
// else{
//     console.log("You are not eligible for the trial");
// }



// ----------------Using Tenary Operator----------------

// (height>=5.6 && age>=18)||(height===5.6 && education===14)||(education===14 && age>=18) ? console.log("You are eligible for the trial"):console.log("You are not eligible for the trial");



// --------------------------------------Multiply array elements with 2--------------------------------------------

// var arra =[2,3,4,5,6];

// for(data in arra){
//     console.log(arra[data]*2);
// }



// --------------------------------------Table of given number--------------------------------------------

// var table = prompt("Enter the table number");


// table=Number(table);

// for(var i=1;i<=10;i++){
//     console.log(table+"X"+i+"="+table*i);
// }



// --------------------------------------Sum of numbers in array--------------------------------------------


// var arra =[2,3,4,5,6];
// var sum=0

// for(data in arra){
//     sum = sum + arra[data];
// }

// console.log(sum);


// --------------------------------------Combine the Last name with First name using two loops--------------------------------------------

// var firstN =['Ali','Ahmed','Asad','Kashif','Nasir'];
// var lastN = ['Khan','Raza','Ali','Khan','Ali'];

// for(var i=0;i<firstN.length;i++){
//     for(var j=0;j<lastN.length;j++){
//         if(i === j){
//             console.log(firstN[i]+" "+lastN[j]);
//         }
//     }
// }



// -------------------------------------Sum of numbers from given input to 0--------------------------------------------

// var input=Array(prompt("Enter the Name"));
// console.log(input, typeof(input))

// var input=Number(prompt("Enter the number"))


// var sum=0

// for(var i=input;i>=0;i--){
//     sum = sum + i;
// }

// console.log(sum);


// -------------------------Smallest number in array------------------------------------------

// var arra =[10,3,4,5,6];
// var small=arra[0]

// for(var i=0;i<arra.length;i++){
//     if(small>arra[i])
//         small=arra[i];
// }

// console.log(small);



// ---------------------Built-in function

// var arra =[10,3,4,5,6];
// var small = Math.min(...arra);

// console.log(small);


// --------------------------Multiple of 3(1-100)--------------------------


// var multipleofthree=0;
// for(var i=0;i<=100;i++){
//     if(i%3==0)
//         multipleofthree=multipleofthree+i;
// }

// console.log(multipleofthree);
 



//---------------------Factorial---------------------


// var input = Number(prompt("Enter the number"));
// var fact=1;

// for(var i=1;i<=input;i++){
//      fact=fact*i;
// }

// console.log(fact);



// -------------------Prime Number Check-------------------

// var input = Number(prompt("Enter the number"));
// console.log(checkprime(input)?console.log("Prime"):console.log("Not Prime"));

// function checkprime(n){

//     for(var i=2;i<n;i++){
//         if(n%i==0){
//             return false;
//         }
//     }
//     return true;
// }


// -----------------------Even and odd-------------------------

// var input = Number(prompt("Enter the number"));
// console.log(checkevenodd(input)?console.log("Even"):console.log("Odd"));   

// function checkevenodd(n){
//     if(n%2==0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }





