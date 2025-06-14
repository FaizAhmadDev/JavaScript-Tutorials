"use strict";  // treat all JS code as newer version 

// alert(3+4)       // this is node env not JS env(browser)
// name = "hdjh";   // will not work when using strict mode

console.log("Topic: Data " 
    +
    "Types\n"
  )                 // code readability is important


// -----List Of Commom DataTypes-----

// number => 2 ^ 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => uninitialized variables
// symbol

// object


const a = 42;
const b = "FA";
const c = true;
const d = { key: "value" };
const e = [1, 2, 3];
const f = null;
const g = undefined;
const h = function () {};
const i = Symbol("sym");

const variables = [
  { name: "a", value: a, type: typeof a },
  { name: "b", value: b, type: typeof b },
  { name: "c", value: c, type: typeof c },
  { name: "d", value: d, type: typeof d },
  { name: "e", value: e, type: typeof e },
  { name: "f", value: f, type: typeof f },
  { name: "g", value: g, type: typeof g },
  { name: "h", value: h, type: typeof h },
  { name: "i", value: i, type: typeof i },
];

console.table(variables);

const msg = `\n Hi its my "Javascript tutorials", hope you 'learned' something :)`
console.log(msg)