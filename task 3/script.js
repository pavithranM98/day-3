function areEqual(obj1, obj2) {
  const stringifyAndSort = (obj) => JSON.stringify(obj, Object.keys(obj).sort());

  return stringifyAndSort(obj1) === stringifyAndSort(obj2);
}

// Example usage
let obj1 = { name: 'Parson 1', age: 5 };
let obj2 = { age: 5, name: 'Parson 1' };

if (areEqual(obj1, obj2)) {
  console.log('The JSON objects are equal.');
} else {
  console.log('The JSON objects are not equal.');
}
