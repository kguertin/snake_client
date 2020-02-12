const net = require('net');
//Establish connection with game server

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

console.log('connecting...');
connect();