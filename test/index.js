const regEx = new RegExp('.*[^a-zA-Z0-9\s].*');
const text = 'amaboy of';
console.log(regEx.test(text));
