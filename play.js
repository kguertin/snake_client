const {connect} = require('./client');
const {setUpInput} = require('./input');

console.log('connecting...');
setUpInput(connect());