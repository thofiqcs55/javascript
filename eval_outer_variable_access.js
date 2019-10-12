let x = 10;

function test(){
  let x = 20;
  eval(`console.log(x)`); // 20
  eval(`console.log(window.x)`); // 10 (outer variable) 
};

test();