const net = require('net');

// Creates connection to game client.
const connect = function() {
  const conn = net.createConnection({
    host: '172.46.0.236',
    port: 50541
  });

  conn.on('data', (data) => {
    console.log(data)
  })

  conn.setEncoding('utf8');

  return conn;
}

module.exports = {
  connect
}