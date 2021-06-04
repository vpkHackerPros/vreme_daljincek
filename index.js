const readline = require('readline')
const digest = require('digest-fetch')
const client = new digest('admin', 'admin')


readline.emitKeypressEvents(process.stdin)

process.stdin.setRawMode(true)
process.stdin.on('keypress', (str, key) => {
  if (key.name == 'pageup') {
    console.log('\nfast macro')
    client.fetch('http://192.168.250.103/v1/trigger?name=fast')
      .then(response => response.text())
      .then(body => console.log(body))
      .catch(error => console.log(error))
  } else if (key.name == 'pagedown') {
    console.log('\nslow macro')
    client.fetch('http://192.168.250.103/v1/trigger?name=slow')
      .then(response => response.text())
      .then(body => console.log(body))
      .catch(error => console.log(error))
  } else if (key.ctrl && key.name === 'c') {
    process.exit();
  } else {
    console.log(`You pressed the "${str}" key`)
  }
})
console.log('Press any key...');
