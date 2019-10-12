// closure 
function sum(a){
  return function sum(b){
    return a+b;
  }
}

sum(10)(20) // 30 (its closure)

// currying 
function curry(f){
  return function(a){
    return function(b){
      return f(a,b);
    }
  }
};

function add(a,b){
  return a+b;
}

let curried = curry(add);

curried(10)(20); // 30


