// https://eslint.org/docs/latest/rules/array-callback-return
// Expect: Array.prototype.reduce() expects a return value from function.
const _indexMap = [].reduce(function (memo, item, index) {
  memo[item] = index;
}, {});

// Expect: Array.from() expects a value to be returned at the end of function
const foo = Array.from([], function (node: Element) {
  if (node.tagName === 'DIV') {
    return node;
  }
});

const _bar = foo.filter(function (x) {
  if (x) {
    return true;
  } else {
    // Expect: Array.prototype.filter() expects a return value from function.
    return;
  }
});
