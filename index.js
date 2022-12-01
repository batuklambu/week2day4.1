const { totalmem } = require("os");

let i=10;
while(i<=90){
    console.log(i)
    i=i+20;
}

console.log("-------------------------")
 i=20;
while(i<=100){
    console.log(i)
    i=i+20;
}
console.log("-------------------------")
// Write a while loop that prints all numbers from 500 - 800 only if they are divisible by 4.
i=500;
while(i<=800){
  			if(i%4===0)
			{
            console.log(i)
			}
			i++;

}