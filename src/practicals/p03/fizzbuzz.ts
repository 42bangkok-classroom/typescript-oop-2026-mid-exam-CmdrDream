const x = Number(process.argv[2]);

if ((isNaN(x) || x <=0)){
    console.log(x);
} else if (x){
    console.log("Grade is A");
} else if (score >= 70){
    console.log("Grading is B");
} else if (score >=60){
    console.log("Grading is C");
} else if (score >=50){
    console.log("Grading is D");
} else console.log("Grading is F");