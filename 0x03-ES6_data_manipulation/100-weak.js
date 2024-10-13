const weakMap = new WeakMap();

function queryAPI(endpoint) {
  if (weakMap.has(endpoint)) {
    const queries = weakMap.get(endpoint);
    if (queries >= 5) throw new Error('Endpoint load is high');
    weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  } else {
    weakMap.set(endpoint, 1);
  }
}

export { queryAPI, weakMap };
