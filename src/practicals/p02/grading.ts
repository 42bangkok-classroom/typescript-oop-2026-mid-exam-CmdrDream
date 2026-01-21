const score = parseFloat(process.argv[2]);

if ((isNaN(score)) || score < 0 || score >100){
    console.log("Invalid input")
} else if (score >= 80){
    console.log("Grade is A");
} else if (score >= 70){
    console.log("Grading is B");
} else if (score >=60){
    console.log("Grading is C");
} else if (score >=50){
    console.log("Grading is D");
} else console.log("Grading is F");