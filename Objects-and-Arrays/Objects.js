//OBJECTS IN JAVASCRIPT

// An object is a collection of properties, and a property is an association between a name (or key) and a value. 
// A property's value can be a function, in which case the property is known as a method. 
// Nearly all objects in JavaScript are instances of Object, which has methods for performing operations on objects.

//===================================================================================================

//Creating an object (2  types)

//1. You can create an object using an object initializer.
//2. Alternatively, you can first create a constructor function and then instantiate an object by invoking that function with the new operator.

//--------------------------------------------------------------------------------------------------

/*Using object initializers -> {}
    -- An object initializer is a comma-delimited list of zero or more pairs of property names and associated values of an object, enclosed in curly braces ({})
*/

const obj1={
    property: "value",
    id: 501,}
console.log(obj1) // { property: 'value', id: 501 }

//property name may be an identifier or a string literal or a number or also an object (in case of nested objects)
const obj2={
   "property name": "value",
   100: "number as property name",
   nestedObj: {nestedProperty: "nestedValue"}
}
console.log(obj2) 
// { '100': 'number as property name', 'property name': 'value', nestedObj: { nestedProperty: nestedValue' } }

//In this example, the newly created object is assigned to a variable obj — this is optional. If you do not need to refer to this object elsewhere, you do not need to assign it to a variable.
 
//--------------------------------------------------------------------------------------------------

//using a constructor function -> function()

/*
A constructor function is a regular function that is used to create multiple similar objects. 

Alternatively, you can create an object with these two steps:

    1. Define the object type by writing a constructor function. There is a strong convention, with good reason, to use a capital initial letter (to distinguish them from regular functions).
    2. Create an instance of the object with new.


*/