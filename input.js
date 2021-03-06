let connection;

const setUpInput = function(conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  const handleUserInput = stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }

    //Movement
    if (key === 'w') {
      connection.write('Move: up');
    } else if (key === 'a') {
      connection.write('Move: left');
    } else if (key === 's') {
      connection.write('Move: down');
    } else if (key === 'd') {
      connection.write('Move: right');
    }

    if (key === 'q'){
      connection.write('Say: Heads Up!');
    } else if (key === 'e'){
      connection.write('Say: Snek!')
    }
  })

  return stdin;
}


module.exports = {setUpInput};