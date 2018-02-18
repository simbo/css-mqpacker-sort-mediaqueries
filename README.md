css-mqpacker-sort-mediaqueries
==============================

  > Sorts mediaqueries by min-width and/or max-width, ordered ascending
  > (to be used as *sort* option value for postcss plugin css-mqpacker)

📖 See
[css-mqpacker documentation](https://github.com/hail2u/node-css-mqpacker)
to read more about its usage and the
[*sort* option](https://github.com/hail2u/node-css-mqpacker#sort).

Example:

``` js
const cssMqpacker = require('css-mqpacker');
const sortMediaqueries = require('css-mqpacker-sort-mediaqueries');

cssMqpacker({
  sort: sortMediaqueries
});
```
