const net = require('net');
const {IP, PORT} = require('./constants');

// Creates connection to game client.
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  //Connection messages and name 
  conn.on('connect', () => {
    console.log('Successfully connected to game server.')
    conn.write('Name: KG');
  })
// Movement 
// ~Hardcoded~
/*   conn.on('connect', () => {
    conn.write('Move: up');
    setInterval(() => {
      conn.write('Move: up')
    }, 50)
  }) */

  
  conn.on('data', (data) => {
    console.log(data)
  })


  conn.setEncoding('utf8');

  return conn;
}

module.exports = {
  connect
}