/*
VAR, LET, and CONST in JavaScript
---------------------------------
- var   → function-scoped, hoisted, can be redeclared and reassigned.
- let   → block-scoped, not hoisted in the same way, can be reassigned but not redeclared in the same scope.
- const → block-scoped, must be initialized at declaration, cannot be reassigned (but object/array contents can change).
*/


// ===== const =====
const z = 10;
console.log(z); // 10

{
    const z = 20; // New block-scoped variable
    console.log("const inside block: " + z); // 20
}

// const z = 30;  //  Error: Identifier 'z' has already been declared
console.log(z); // 10 (outer z is unchanged)


// ===== var =====
var x = 10;
console.log(x); // 10

{
    var x = 20; // Same variable (function/global scoped)
    console.log(x); // 20
}

console.log(x); // 20 (outer x also changed)


// ===== let =====
let y = 10;
console.log(y); // 10

{
    let y = 20; // New block-scoped variable
    console.log(y); // 20
}

{
    y = 40; // Reassigning outer y
    console.log(y); // 40
}

console.log(y); // 40

// let y = 30; //  Error: Identifier 'y' has already been declared
y = 30; // valid: reassigning
console.log(y); // 30


/*
Key Points:
- var:
  * Function-scoped
  * Can be redeclared & reassigned
  * Hoisted (but initialized to undefined)

- let:
  * Block-scoped
  * Can be reassigned but not redeclared in same scope
  * Temporal Dead Zone (TDZ) before declaration

- const:
  * Block-scoped
  * Must be initialized at declaration
  * Cannot be reassigned (but object/array contents can still change)
*/
