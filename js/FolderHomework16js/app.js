function createCachedFunction(originalFunction) {
  const cache = new Map();
  const maxCacheSize = 10;

  return function (...args) {
      const key = JSON.stringify(args);
      if (cache.has(key)) {
          return cache.get(key);
      }

      const result = originalFunction.apply(this, args);
      cache.set(key, result);

      if (cache.size > maxCacheSize) {
          const oldestKey = [...cache.keys()][0];
          cache.delete(oldestKey);
      }

      return result;
  };
}

function add(a, b) {
  console.log("Function called");
  return a + b;
}
const cachedAdd = createCachedFunction(add);

console.log(cachedAdd(2, 3)); // Вивод: Function called, 5
console.log(cachedAdd(2, 3)); // Вивод: 5 (без нового виклику функції)
