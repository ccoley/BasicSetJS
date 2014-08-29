# SetJS

A basic implementation of the `Set` data structure in Javascript. In case you don't know what a `Set` is, I'll quote [Wikipedia][1]...

> A set is an abstract data structure that can store certain values, without any particular order, and no repeated values.

The `BasicSet` in SetJS supports values of type `Numeric` or `String`.

### Syntax

```javascript
new BasicSet([initialData]);
```
`initialData` can be a value, several values, an array of values, or a mix of values and arrays of values. If no arguments are provided an empty `BasicSet` will be returned. For example, the following would return a `BasicSet` containing the values `{1,'2',2.5,'c','d',5}`.
```javascript
var set = new BasicSet(1,'2',[2.5,'c'],'d',5.0); // {1,'2',2.5,'c','d',5.0}
```

### Methods

**BasicSet.prototype.add(args)**
<br>Appends all elements in `args` to the `BasicSet` object. `args` can be a value, several values, an array of values, or a mix of values and arrays of values. Returns the `BasicSet` object.

**BasicSet.prototype.remove(args)**
<br>Removes all elements in `args` from the `BasicSet` object. `args` can be a value, several values, an array of values, or a mix of values and arrays of values. Returns the `BasicSet` object.

**BasicSet.prototype.has(value)**
<br>Returns a boolean asserting whether an element is present with the given value in the `BasicSet` object or not.

**BasicSet.prototype.hasSome(args)**
<br>Returns a boolean asserting whether any of the elements in `args` are present in the `BasicSet` object. `args` can be a value, several values, an array of values, or a mix of values and arrays of values.

**BasicSet.prototype.hasAll(args)**
<br>Returns a boolean asserting whether all of the elements in `args` are present in the `BasicSet` object. `args` can be a value, several values, an array of values, or a mix of values and arrays of values.

**BasicSet.prototype.getAll()**
<br>Returns an Array containing every element in the `BasicSet` object.

**BasicSet.prototype.size()**
<br>Returns the number of elements in the `BasicSet` object.

**BasicSet.prototype.isEmpty()**
<br>Returns a boolean asserting whether the `BasicSet` object contains no elements.

**BasicSet.prototype.clear()**
<br>Removes all elements from the `BasicSet` object. Returns the `BasicSet` object.

**BasicSet.prototype.toString()**
<br>Returns a String representation of the elements in the `BasicSet` object.

[1]: http://en.wikipedia.org/wiki/Set_(computer_science) "Set (abstract data type)"
