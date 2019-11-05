const server = require('./server');


// catch-all endpoint
server.get('*', handleDefault)
function handleDefault(req, res) {
  {res.json('This is Web-DB II Challenge with Jayne')}
}

// server listen
server.listen(process.env.PORT || 3500, () => {
  console.log('listening on server ' + (process.env.PORT || 3500 ));
})