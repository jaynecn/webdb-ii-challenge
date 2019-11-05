const express = require('express');

const app = express();

// plug in middleware
app.use(express.json());

// catch-all endpoint
app.get('*', handleDefault)
function handleDefault(req, res) {
  {res.json('This is Web-DB II Challenge with Jayne')}
}

// server listen
app.listen(process.env.PORT || 3500, () => {
  console.log('listening on server ' + (process.env.PORT || 3500 ));
})