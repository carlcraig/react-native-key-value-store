import { AsyncStorage } from 'react-native';

export class KeyValueStore {

  constructor(namespace = `@Default`, separator = `::`) {
    this.namespace = namespace;
    this.separator = separator;
  }

  async get(key, defaultValue = null) {
    let value = defaultValue;
    try {
      value = await AsyncStorage.getItem(`${this.__createKey(key)}`);
      value = JSON.parse(value);
    } catch (error) {
      value = defaultValue;
    }
    return value;
  }

  async set(key, value) {
    return await AsyncStorage.setItem(`${this.__createKey(key)}`, JSON.stringify(value));
  }

  async remove(key) {
    return await AsyncStorage.removeItem(this.__createKey(key));
  }

  async keys() {
    let keys = await AsyncStorage.getAllKeys();
    return keys.filter((key) => {
      return key.startsWith(this.__createPrefix());
    }).map((key) => {
      return key.replace(new RegExp(`^${this.__createPrefix()}`), '')
    });
  }

  __createKey(key) {
    return `${this.__createPrefix()}${key}`;
  }

  __createPrefix() {
    return `${this.namespace}${this.separator}`;
  }
}

const defaultKeyValueStore = new KeyValueStore();

export default defaultKeyValueStore;
