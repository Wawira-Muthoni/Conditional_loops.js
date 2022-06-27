//1. Write a JavaScript program which iterates
//  the integers from 1 to 100. But for multiples of three print "Fizz" 
//  instead of the number and for the multiples of five print "Buzz". 
//  For numbers which are multiples of both three and five print "FizzBuzz"
for( let p=1;p<=100;p++)
{
    if(p%3==0){
        console.log("Fizz");}
   
    else if(p%5==0){
    console.log("Buzz");
}
    else if (p%3==0 &&p%5==0){
        console.log("FizzBuzz");
}   else{
    console.log(p)
}}



// 2. Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
var sum = 0;
for (var i = 1;i<=1000;i++){
    if (i%3==0 && i%5==0){
      sum+=i
    }
  } 
console.log(sum)


// 3. Write a JavaScript for loop that will iterate from 0 to 20. For each
// iteration, it will check if the current number is odd or even, and 
// display a message to the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even
// 
x = 0
y = 20
for (let i=x;i<=y;i++){
    if (i%2==0){
        console.log(i,"is even" );
    }
    else{
        console.log(i,"is odd");
    }
}

//4. Write a JavaScript conditional statement to find the largest of five numbers in the
//given array.
//Let num = [-2, 4,-5, 6,0]

function letNum(array){
    largest = 0;
    for (i of array){
        if(i>largest){
            largest = i
        }
    } 
    return largest
}
console.log(letNum([-2, 4,-5, 6,0]))

// 5.Using conditional statements, write a JavaScript program to find the largest of the
// following two numbers: 10 & 40
a = 10
b = 40
if(a<b && a>b){
    console.log(a);
}
else
{
    console.log(b);
}

// 6. Write a JavaScript program to find leap years from 2000 to 2022
// function leap_year_range(start_year, end_year) {
  function leap_year_range(st_year, end_year) {
    var year_range = [];
    for (var i = st_year; i <= end_year; i++)
    {
         year_range.push(i);
    }
    var new_array = [];

year_range.forEach(
function(year)
{ 
   if (test_LeapYear(year)) 
   new_array.push(year);
});

return new_array;
 }

function test_LeapYear(year) {
if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
            return year;
    } else {
            return false;
    }
}

console.log(leap_year_range(2000,2022));

