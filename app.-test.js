let a = 100;
let b = 50;

///it('add(a, b) adds two numbers and returns the result', function() {
/// expect(add(a, b)).toEqual(a + b)
///})

function add() {
  console.log(a + b);
}
add();

///it('subtract(a, b) subtracts b from a and returns the result', function() {
/// expect(subtract(a, b)).toEqual(a - b)
///})
function subtract() {
  console.log(a - b);
}
subtract();

///it('multiply(a, b) multiplies two numbers and returns the result', function() {
///  expect(multiply(a, b)).toEqual(a * b)
///})

function divide() {
  console.log(a * b);
}
divide();

///it('divide(a, b) divides a by b and returns the result', function() {
/// expect(divide(a, b)).toEqual(a / b)
//})

function multiply() {
  console.log(a * b);
}
multiply();

///it('increment(n) increments n and returns the result', function() {
/// expect(increment(a)).toEqual(a + 1)
///})
function increment() {
  console.log(++a, ++b);
}
increment();

//// it('decrement(n) decrements n and returns the result', function() {
//   expect(decrement(a)).toEqual(a - 1)
////})
//})

function decrement() {
  console.log(--a, --b);
}
decrement();

///describe('makeInt(n)', function() {
// it('parses n as an integer and returns the parsed integer', function() {
/// expect(makeInt(a.toString())).toEqual(a)
// })
function tostring() {
  let a = String(100);
  console.log(a);
}

tostring();

//it('assumes base 10', function() {
// expect(makeInt('0x2328')).toEqual(0)
//})

function stringtozero() {
  let r = parseInt("0x2328");
  let q = parseFloat(r);
  console.log(q);
}

stringtozero();

//describe('preserveDecimal(n)', function() {
// it('preserves n\'s decimals (it parses n as a floating point number) and returns the parsed number', function() {
//   expect(preserveDecimal('2.222')).toBe(2.222)
//  })

function stringtonumber() {
  let c = parseFloat("2.222");
  console.log(c);
}

stringtonumber();

/// it('returns NaN as appropriate', function() {
//  expect(isNaN(makeInt('sldkjflksjf'))).toEqual(true)
// })
//})

function stringnotanumber() {
  let o = isNaN("sldkjflksjf");
  console.log(true);
}
stringnotanumber();

///describe('preserveDecimal(n)', function() {
//it('preserves n\'s decimals (it parses n as a floating point number) and returns the parsed number', function() {
//  expect(preserveDecimal('2.222')).toBe(2.222)
// })

function stringtonumber() {
  let c = parseFloat("2.222");
  console.log(c);
}

stringtonumber();
