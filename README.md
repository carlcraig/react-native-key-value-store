react-native-key-value-store
==============================

> A wrapper for React-Native AsyncStorage

Installation
------------

```
npm i --save react-native-key-value-store
```

Basic Usage
-----------

All methods on the `KeyValueStore` are `async` and therefore return `promises`.

```js
import Storage from 'react-native-key-value-store';

let value = await Storage.get('foo', 'default value');
console.log(value); // should be default value if foo hasn't already been set

await Storage.set('foo', 'bar');

value = await Storage.get('foo');
console.log(value); // should be 'bar' as it has been set
```

Methods
-------

### `get(key, defaultValue)`

This will get a value based on the key provided. You can also set a default value
in case the key does not exist in the store.

### `set(key, value)`

This will set a value based for the key provided.

### `remove(key)`

This will delete the key from the store.

### `keys()`

This will return an array of all keys in the store.

Creating Namespaced Stores
--------------------------

The default key value store has a namespace of `@Default`

You can create your own key value stores with different namespaces

```js
import { KeyValueStore } from 'react-native-key-value-store';

const appStore = new KeyValueStore('@App');
```

This will allow you to isolate different key/values, and will also affect the
return value from `keys()` method, as it will check the namespace.

License
-------

react-native-key-value-store is licensed with the MIT license.

See LICENSE for more details.
