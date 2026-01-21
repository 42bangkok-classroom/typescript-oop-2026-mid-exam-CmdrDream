const x = Number(process.argv[2]);

if (isNaN(x) || x < 0){
    console.log("");
} else if (x % 3 && x % 5){
    console.log("FizzBuzz");
} else if (x % 3){
    console.log("Fizz");
} else if (x % 5){
    console.log("Buzz");
} else console.log(x);

export{};