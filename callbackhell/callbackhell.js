// Use axios for an http library. Axios returns a Promise which makes it await-able. 
var http = require('axios')

// Our app function. Note how our use of await is encapsulated by a function that uses async.
async function app () {  
 
  console.log('First request.')
  var response = await http.get('http://api.github.com/repos/nodejs/node')
  console.log(response.data)

  console.log('Second request.')
  var response = await http.get('http://api.github.com/repos/nodejs/http2')
  console.log(response.data)

  console.log('Third request.')
  var response = await http.get('http://api.github.com/repos/nodejs/docker-node')
  console.log(response.data)

}

// Kick it off.
app()