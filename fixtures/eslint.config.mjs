import config from '../index.mjs';

const [rules, ...rest] = config;

export default [
  {
    ...rules,
    files: ['*.{ts,tsx,mts,cts}*'],
  },
  ...rest,
];
