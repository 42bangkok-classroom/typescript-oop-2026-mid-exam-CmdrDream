const n = Number(process.argv[2]);

if (isNaN(n) || x < 0){
    console.log("");
} else if (n % 3 && n % 5){
    console.log("FizzBuzz");
} else if (n % 3 === 0){
    console.log("Fizz");
} else if (n % 5 === 0){
    console.log("Buzz");
} else console.log(x);

export{};