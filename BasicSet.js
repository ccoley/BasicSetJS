/**
 * Basic implementation of a Set in JavaScript.
 * Supports elements of type Number or String.
 */

// polyfill for Array.isArray
if(!Array.isArray) {
    Array.isArray = function (vArg) {
        return Object.prototype.toString.call(vArg) === "[object Array]";
    };
}

// Usage:
// new BasicSet()
// new BasicSet(1)
// new BasicSet(1, 2, 3, ...)
// new BasicSet([1, 2, 3, ...])
// new BasicSet(1, [2, 3, 4], ...)
function BasicSet(initialData) {
    this.data = {};
    this.add.apply(this, arguments);
}

// Usage:
// add(key)
// add(key1, key2, key3, ...)
// add([key1, key2, key3, ...])
// add(key1, [key2, key3, key4], ...)
BasicSet.prototype.add = function() {
    var key;
    for (var i = 0; i < arguments.length; i++) {
        key = arguments[i];
        if (Array.isArray(key)) {
            for (var j = 0; j < key.length; j++) {
                this.data[key[j]] = key[j];
            }
        } else {
            this.data[key] = key;
        }
    }
    return this;
}

// Usage:
// remove(key)
// remove(key1, key2, key3, ...)
// remove([key1, key2, key3, ...])
// remove(key1, [key2, key3, key4], ...)
BasicSet.prototype.remove = function() {
    var item;
    for (var i = 0; i < arguments.length; i++) {
        item = arguments[i];
        if (Array.isArray(item)) {
            for (var j = 0; j < item.length; j++) {
                delete this.data[item[j]];
            }
        } else {
            delete this.data[item];
        }
    }
    return this;
}

BasicSet.prototype.has = function(key) {
    return Object.prototype.hasOwnProperty.call(this.data, key);
}

BasicSet.prototype.hasSome = function(args) {
    var key;
    for (var i = 0; i < arguments.length; i++) {
        key = arguments[i];
        if (Array.isArray(key)) {
            for (var j = 0; j < key.length; j++) {
                if (Object.prototype.hasOwnProperty.call(this.data, key[j])) {
                    return true;
                }
            }
        } else {
            if (Object.prototype.hasOwnProperty.call(this.data, key)) {
                return true;
            }
        }
    }
    return false;
}

BasicSet.prototype.hasAll = function(args) {
    var key;
    for (var i = 0; i < arguments.length; i++) {
        key = arguments[i];
        if (Array.isArray(key)) {
            for (var j = 0; j < key.length; j++) {
                if (!Object.prototype.hasOwnProperty.call(this.data, key[j])) {
                    return false;
                }
            }
        } else {
            if (!Object.prototype.hasOwnProperty.call(this.data, key)) {
                return false;
            }
        }
    }
    return true;
}

BasicSet.prototype.getAll = function() {
    var results = [];
    for (var key in this.data) {
        results.push(this.data[key]);
    }
    return results;
}

BasicSet.prototype.size = function() {
    var count = 0;
    for (var key in this.data) {
        count++;
    }
    return count;
}

BasicSet.prototype.isEmpty = function() {
    for (var key in this.data) {
        if (Object.prototype.hasOwnProperty.call(this.data, key)) {
            return false;
        }
    }
    return true;
}

BasicSet.prototype.clear = function() {
    this.data = {};
    return this;
}

BasicSet.prototype.toString = function() {
    var results = [];
    for (var key in this.data) {
        results.push(this.data[key]);
    }
    return results.join(',');
}
