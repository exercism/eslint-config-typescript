// https://eslint.org/docs/latest/rules/array-callback-return
[].forEach(function (_item) {});

const _indexMap = [].reduce<Record<string, number>>(function (
  memo,
  item,
  index,
) {
  memo[item] = index;
  return memo;
}, {});

const foo = Array.from([], function (node: Element) {
  if (node.tagName === 'DIV') {
    return node;
  }
  return node;
});

const _bar = foo.map((node) => node.getAttribute('id'));
