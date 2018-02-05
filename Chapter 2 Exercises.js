/*Problem 1:Write a loop that makes seven calls to console.log to output the following triangle: 
#
##
###
####
#####
######
*/

let pound =[];
for (let counter=0; counter <= 6; counter++){
    pound = pound + "#";
    console.log(pound);
 }
/* Problem 2: Write a program that uses console.log to print all the numbers from 1 to 100, 
with two exceptions. For numbers that are divisible by 2, print "fizz" instead of the number. 
For numbers that are divisible by 5 (and not 3), print "buzz" instead.

Then modify program to print "FizzBuzz" for numbers that are divisible by both 5 and 3. 
*/

for (i = 1; i<=100;i++){
    if(i % 15 === 0){
        console.log("FizzBuzz");
    }
    else if( i % 3 === 0){
        console.log("Fizz");
    }
    else if ( i % 5 === 0){
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}
/* Chess Board: Write a program that creates a strin that represents an 8x* grid, using newline characters to separate line. 
At each position of the grid there is either a speace or a "#" character. The characters should form a chess board. 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for
any size, outputting a grid of the given width and height. */

// TODO