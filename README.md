# SetJS

A basic implementation of the `Set` data structure in Javascript. In case you don't know what a [set][1] is, I'll quote Wikipedia.

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

[1]: http://en.wikipedia.org/wiki/Set_(computer_science) "Set (abstract data type)"
