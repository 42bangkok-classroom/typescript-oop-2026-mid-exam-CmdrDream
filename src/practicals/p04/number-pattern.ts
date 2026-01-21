const N = Number(process.argv[2]);

for(let i = 0; i < N; i++){
  let str = "";
  for (let j = 0; j < N; j++) {
    str += String(i+1);
  }
  console.log(str);

}