module('BasicSet');
test('BasicSet()', function() {
    var object = {};
    var set = new BasicSet();
    deepEqual(set._data, object, 'new BasicSet() -> {}');

    object = {1:1};
    set = new BasicSet(1);
    deepEqual(set._data, object, 'new BasicSet(1) -> {1}');

    object = {1:1,2:2,3:3,4:4,5:5};
    set = new BasicSet(1,2,3,4,5);
    deepEqual(set._data, object, 'new BasicSet(1,2,3,4,5) -> {1,2,3,4,5}');

    set = new BasicSet([1,2,3,4,5]);
    deepEqual(set._data, object, 'new BasicSet([1,2,3,4,5]) -> {1,2,3,4,5}');

    set = new BasicSet(1,[2,3,4],5);
    deepEqual(set._data, object, 'new BasicSet(1,[2,3,4],5) -> {1,2,3,4,5}');

    set = new BasicSet(1,2,[2,3,4],5,3,3);
    deepEqual(set._data, object, 'new BasicSet(1,2,[2,3,4],5,3,3) -> {1,2,3,4,5}');

    object = {'a':'a'};
    set = new BasicSet('a');
    deepEqual(set._data, object, "new BasicSet('a') -> {'a'}");

    object = {'a':'a','b':'b','c':'c','d':'d','e':'e'};
    set = new BasicSet('a','b','c','d','e');
    deepEqual(set._data, object, "new BasicSet('a','b','c','d','e') -> {'a','b','c','d','e'}");

    set = new BasicSet(['a','b','c','d','e']);
    deepEqual(set._data, object, "new BasicSet(['a','b','c','d','e']) -> {'a','b','c','d','e'}");

    set = new BasicSet('a',['b','c','d'],'e');
    deepEqual(set._data, object, "new BasicSet('a',['b','c','d'],'e') -> {'a','b','c','d','e'}");

    set = new BasicSet('a','b',['b','c','d'],'e','c','c');
    deepEqual(set._data, object, "new BasicSet('a','b',['b','c','d'],'e','c','c') -> {'a','b','c','d','e'}");

    object = {'a':'a',2:2,3:3,'d':'d',5:5};
    set = new BasicSet('a',[2,3,'d'],5);
    deepEqual(set._data, object, "new BasicSet('a',[2,3,'d'],5) -> {'a',2,3,'d',5}");

    object = {1:1,2:'2',3:'3',4:4};
    set = new BasicSet(1,2,[3,'2'],'3',4);
    deepEqual(set._data, object, "new BasicSet(1,2,[3,'2'],'3',4) -> {1,'2','3',4}");

    object = {0.1:0.1,1:1,'1.0':'1.0'};
    set = new BasicSet(0.1,0.1,[0.1,1,1.0,'1.0'],1.0);
    deepEqual(set._data, object, "new BasicSet(0.1,0.1,[0.1,1,1.0,'1.0'],1.0) -> {0.1,1,'1.0'}");
});

test('add()', function() {
    var object = {};
    var set = new BasicSet();

    object[1] = 1;
    set.add(1);
    deepEqual(set._data, object, '{}.add(1) -> {1}');

    object[2] = 2;
    set.add(2);
    deepEqual(set._data, object, '{1}.add(2) -> {1,2}');

    object[3] = 3;
    object[4] = 4;
    set.add(3,4);
    deepEqual(set._data, object, '{1,2}.add(3,4) -> {1,2,3,4}');

    object[5] = 5;
    object[6] = 6;
    set.add([5,6]);
    deepEqual(set._data, object, '{1,2,3,4}.add([5,6]) -> {1,2,3,4,5,6}');

    object[7] = 7;
    object[8] = 8;
    object[9] = 9;
    set.add(7,[8,9]);
    deepEqual(set._data, object, '{1,2,3,4,5,6}.add(7,[8,9]) -> {1,2,3,4,5,6,7,8,9}');

    // Add things that already exist
    object[0] = 0;
    object[5] = 5;
    object[10] = 10;
    set.add(0,5,10);
    deepEqual(set._data, object, '{1,2,3,4,5,6,7,8,9}.add(0,5,10) -> {1,2,3,4,5,6,7,8,9,0,10}');

    set.add(0,5,10);
    deepEqual(set._data, object, '{1,2,3,4,5,6,7,8,9,0,10}.add(0,5,10) -> {1,2,3,4,5,6,7,8,9,0,10}');

    object = {};
    set = new BasicSet();

    object.a = 'a';
    set.add('a');
    deepEqual(set._data, object, "{}.add('a') -> {'a'}");

    object.b = 'b';
    set.add('b');
    deepEqual(set._data, object, "{'a'}.add('b') -> {'a','b'}");

    object.c = 'c';
    object.d = 'd';
    set.add('c','d');
    deepEqual(set._data, object, "{'a','b'}.add('c','d') -> {'a','b','c','d'}");

    object.e = 'e';
    object.f = 'f';
    set.add(['e','f']);
    deepEqual(set._data, object, "{'a','b','c','d'}.add(['e','f']) -> {'a','b','c','d','e','f'}");

    object.g = 'g';
    object.h = 'h';
    object.i = 'i';
    object.j = 'j';
    set.add(['g'],'h',['i','j']);
    deepEqual(set._data, object, "{'a','b','c','d','e','f'}.add(['g'],'h',['i','j']) -> {'a','b','c','d','e','f','g','h','i','j'}");

    // Add things that already exist
    object.j = 'j';
    object.k = 'k';
    object.l = 'l';
    set.add('j','k','l');
    deepEqual(set._data, object, "{'a','b','c','d','e','f','g','h','i','j'}.add('j','k','l') -> {'a','b','c','d','e','f','g','h','i','j','k','l'}");

    set.add('j','k','l');
    deepEqual(set._data, object, "{'a','b','c','d','e','f','g','h','i','j','k','l'}.add('j','k','l') -> {'a','b','c','d','e','f','g','h','i','j','k','l'}");
});

test('remove()', function() {
    var object = {1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,10:10,11:11,12:12,13:13,14:14,15:15};
    var set = new BasicSet(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15);

    set.remove(1);
    delete object[1];
    deepEqual(set._data, object, 'remove(1)');

    set.remove(3,5);
    delete object[3];
    delete object[5];
    deepEqual(set._data, object, 'remove(3,5)');

    set.remove([7,9]);
    delete object[7];
    delete object[9];
    deepEqual(set._data, object, 'remove([7,9])');

    set.remove(11,[13,15]);
    delete object[11];
    delete object[13];
    delete object[15];
    deepEqual(set._data, object, 'remove(11,[13,15])');

    object = {'a':'a','B':'B','c':'c','D':'D','e':'e','F':'F','g':'g','H':'H','i':'i','J':'J','k':'k','L':'L','m':'m','N':'N','o':'o'};
    set = new BasicSet('a','B','c','D','e','F','g','H','i','J','k','L','m','N','o');

    set.remove('a');
    delete object.a;
    deepEqual(set._data, object, "remove('a')");

    set.remove('c','e');
    delete object.c;
    delete object.e;
    deepEqual(set._data, object, "remove('c','e')");

    set.remove(['g','i']);
    delete object.g;
    delete object.i;
    deepEqual(set._data, object, "remove(['g','i'])");

    set.remove('k',['m','o']);
    delete object.k;
    delete object.m;
    delete object.o;
    deepEqual(set._data, object, "remove('k',['m','o'])");

    // Test removing things that don't exist
    object = {2:2,4:4,6:6,7:7,8:8,'B':'B','D':'D','F':'F','g':'g','H':'H'};
    set = new BasicSet(2,4,6,7,8,'B','D','F','g','H');

    set.remove(1,[3,5]);
    deepEqual(set._data, object, "remove(1,[3,5]) from a set that doesn't contain any of them");

    set.remove('a',['c','e']);
    deepEqual(set._data, object, "remove('a',['c','e']) from a set that doesn't contain any of them");

    delete object[7];
    delete object[8];
    set.remove(3,[5,7],8);
    deepEqual(set._data, object, 'remove(3,[5,7],8) from a set that contains only some of them');

    delete object.g;
    delete object.H;
    set.remove('c',['e','g'],'H');
    deepEqual(set._data, object, "remove('c',['e','g'],'H') from a set that contains only some of them");
});

test('has()', function() {
    var set;

    set = new BasicSet(1,2,3,4,5);
    ok(set.has(3), '{1,2,3,4,5}.has(3) is TRUE');
    ok(!set.has(6), '{1,2,3,4,5}.has(6) is FALSE');

    set = new BasicSet('a','b','c','d','e');
    ok(set.has('c'), "{'a','b','c','d','e'}.has('c') is TRUE");
    ok(!set.has('f'), "{'a','b','c','d','e'}.has('f') is FALSE");
});

test('hasSome()', function() {
    var set = new BasicSet(1,2,3,4,5);

    ok(set.hasSome(3), '{1,2,3,4,5}.hasSome(3) is TRUE');
    ok(set.hasSome(2,4,6), '{1,2,3,4,5}.hasSome(2,4,6) is TRUE');
    ok(set.hasSome([2,4,6]), '{1,2,3,4,5}.hasSome([2,4,6]) is TRUE');
    ok(set.hasSome(2,[4,6]), '{1,2,3,4,5}.hasSome(2,[4,6]) is TRUE');
    ok(!set.hasSome(7), '{1,2,3,4,5}.hasSome(7) is FALSE');
    ok(!set.hasSome(6,7,8), '{1,2,3,4,5}.hasSome(6,7,8) is FALSE');
    ok(!set.hasSome([6,7,8]), '{1,2,3,4,5}.hasSome([6,7,8]) is FALSE');
    ok(!set.hasSome(6,[7,8]), '{1,2,3,4,5}.hasSome(6,[7,8]) is FALSE');

    set = new BasicSet('a','b','c','d','e');

    ok(set.hasSome('c'), "{'a','b','c','d','e'}.hasSome('c') is TRUE");
    ok(set.hasSome('b','d','f'), "{'a','b','c','d','e'}.hasSome('b','d','f') is TRUE");
    ok(set.hasSome(['b','d','f']), "{'a','b','c','d','e'}.hasSome(['b','d','f']) is TRUE");
    ok(set.hasSome('b',['d','f']), "{'a','b','c','d','e'}.hasSome('b',['d','f']) is TRUE");
    ok(!set.hasSome('g'), "{'a','b','c','d','e'}.hasSome('g') is FALSE");
    ok(!set.hasSome('f','g','h'), "{'a','b','c','d','e'}.hasSome('f','g','h') is FALSE");
    ok(!set.hasSome(['f','g','h']), "{'a','b','c','d','e'}.hasSome(['f','g','h']) is FALSE");
    ok(!set.hasSome('f',['g','h']), "{'a','b','c','d','e'}.hasSome('f',['g','h']) is FALSE");
});

test('hasAll()', function() {
    var set = new BasicSet(1,2,3,4,5);

    ok(set.hasAll(2), '{1,2,3,4,5}.hasAll(2) is TRUE');
    ok(set.hasAll(1,3,5), '{1,2,3,4,5}.hasAll(1,3,5) is TRUE');
    ok(set.hasAll([1,3,5]), '{1,2,3,4,5}.hasAll([1,3,5]) is TRUE');
    ok(set.hasAll(1,[3,5]), '{1,2,3,4,5}.hasAll(1,[3,5]) is TRUE');
    ok(!set.hasAll(6), '{1,2,3,4,5}.hasAll(6) is FALSE');
    ok(!set.hasAll(2,4,6), '{1,2,3,4,5}.hasAll(2,4,6) is FALSE');
    ok(!set.hasAll([2,4,6]), '{1,2,3,4,5}.hasAll([2,4,6]) is FALSE');
    ok(!set.hasAll(2,[4,6]), '{1,2,3,4,5}.hasAll(2,[4,6]) is FALSE');

    set = new BasicSet('a','b','c','d','e');

    ok(set.hasAll('b'), "{'a','b','c','d','e'}.hasAll('b') is TRUE");
    ok(set.hasAll('a','c','e'), "{'a','b','c','d','e'}.hasAll('a','c','e') is TRUE");
    ok(set.hasAll(['a','c','e']), "{'a','b','c','d','e'}.hasAll(['a','c','e']) is TRUE");
    ok(set.hasAll('a',['c','e']), "{'a','b','c','d','e'}.hasAll('a',['c','e']) is TRUE");
    ok(!set.hasAll('f'), "{'a','b','c','d','e'}.hasAll('f') is FALSE");
    ok(!set.hasAll('b','d','f'), "{'a','b','c','d','e'}.hasAll('b','d','f') is FALSE");
    ok(!set.hasAll(['b','d','f']), "{'a','b','c','d','e'}.hasAll(['b','d','f']) is FALSE");
    ok(!set.hasAll('b',['d','f']), "{'a','b','c','d','e'}.hasAll('b',['d','f']) is FALSE");
});

test('getAll()', function() {
    var set = new BasicSet(1,2,3,4,5);
    deepEqual(set.getAll(), [1,2,3,4,5], '{1,2,3,4,5}.getAll() -> [1,2,3,4,5]');

    set = new BasicSet('a','b','c','d','e');
    deepEqual(set.getAll(), ['a','b','c','d','e'], "{'a','b','c','d','e'}.getAll() -> ['a','b','c','d','e']");
});

test('size()', function() {
    var set = new BasicSet(1,2,3);
    ok(set.size() === 3, '{1,2,3}.size() === 3');
    ok(set.add(2,4,6).remove(1,5).size() === 4, '{1,2,3}.add(2,4,6).remove(1,5).size() === 4');
    ok(set.clear().size() === 0, '{2,3,4,6}.clear().size() === 0');

    set = new BasicSet('a','b','c');
    ok(set.size() === 3, "{'a','b','c'}.size() === 3");
    ok(set.add('b','d','f').remove('a','e').size() === 4, "{'a','b','c'}.add('b','d','f').remove('a','e').size() === 4");
    ok(set.clear().size() === 0, '{2,3,4,6}.clear().size() === 0');
});

test('isEmpty()', function() {
    var set;

    set = new BasicSet();
    ok(set.isEmpty(), 'A set initialized with no initial data should return TRUE for isEmpty()');

    set = new BasicSet(1);
    ok(!set.isEmpty(), 'A set with one numeric value in it should return FALSE for isEmpty()');

    set = new BasicSet(1,2);
    ok(!set.isEmpty(), 'A set with multiple numeric values in it should return FALSE for isEmpty()');

    set = new BasicSet('a');
    ok(!set.isEmpty(), "A set with one string value in it should return FALSE for isEmpty()");

    set = new BasicSet('a','b');
    ok(!set.isEmpty(), "A set with multiple string values in it should return FALSE for isEmpty()");

    set = new BasicSet(1,'a');
    ok(!set.isEmpty(), "A set with values of mixed type should return FALSE for isEmpty()");

    set = new BasicSet(1,2,3,4,5);
    set.remove(1,2,3,4,5);
    ok(set.isEmpty(), "A set that has had all its items removed with remove() should return TRUE for isEmpty()");

    set = new BasicSet(1,2,3,4,5);
    set.clear();
    ok(set.isEmpty(), "A set that has been cleared with clear() should return TRUE for isEmpty()");
});

test('clear()', function() {
    var object = {};
    var set;

    set = new BasicSet(1,2,3,4,5);
    set.clear();
    deepEqual(set._data, object, '{1,2,3,4,5}.clear() -> {}');

    set = new BasicSet('a','b','c','d','e');
    set.clear();
    deepEqual(set._data, object, "{'a','b','c','d','e'}.clear() -> {}");

    set = new BasicSet('a',2,3,'d',5);
    set.clear();
    deepEqual(set._data, object, "{'a',2,3,'d',5}.clear() -> {}");
});

test('toString()', function() {
    var set = new BasicSet(1,2,3,4,5);
    deepEqual(set.toString(), "1,2,3,4,5", '{1,2,3,4,5}.toString() -> "1,2,3,4,5"');

    set = new BasicSet('a','b','c','d','e');
    deepEqual(set.toString(), "a,b,c,d,e", "{'a','b','c','d','e'}.toString() -> \"a,b,c,d,e\"");
});
