require('dotenv').config();
const express = require('express'),
      massive = require('massive'),
      controller = require('./controller'),
      {SERVER_PORT, CONNECTION_STRING} = process.env,
      app = express();

app.use(express.json());

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('DB Connected')
})

app.get('/api/user', controller.getUser);

const port = SERVER_PORT;
app.listen(port, () => console.log(`Server running on ${port}`))