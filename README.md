# pk-utilities

A set of javasript utilities and patterns to use in `pk-` modules. You may of course adopt and leverage these utilities in any non `pk-` project as well.

### `classes.js`
An object of common classes, particularly used to determine UI state.

### `focusable.js`
An array of possible focusable DOM elements to check against.

### `helpers.js`

An object of helper functions.

`addClass`, `removeClass`, and `toggleClass` pulled from  http://youmightnotneedjquery.com

`closest` pulled from https://github.com/apostrophecms/apostrophe-lean-frontend

### `keys.js`
An object of javascript event key codes

### `state.js`
helpers that handle toggling classes and aria for UI state.


### How To Use:


Import entire module and call whatever utils:
```
import pkutils from 'pk-utilities';

button.addEventListener('click', function () {
  pkutils.helpers.toggleClass(this, pkutils.classes.active);
});

```
Or import each util as needed:
```
import { helpers, classes } from 'pk-utilities';

button.addEventListener('click', function () {
  helpers.toggleClass(this, classes.active);
});

```
