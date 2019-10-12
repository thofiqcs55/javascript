let str = `function test(a, b){
  return a * b;
}`;

eval(str);

let result = test(10, 20);

console.log(result);