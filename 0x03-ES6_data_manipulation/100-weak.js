const weakMap = new WeakMap();

function queryAPI(endpoint) {
  if (weakMap.has(endpoint)) {
    const queries = weakMap.get(endpoint);
    weakMap.set(endpoint, queries + 1);
    if (queries + 1 >= 5) throw new Error('Endpoint load is high');
  } else {
    weakMap.set(endpoint, 1);
  }
}

export { queryAPI, weakMap };
