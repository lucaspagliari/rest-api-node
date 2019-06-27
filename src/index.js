const express = require('express');
const bodyParser = require('body-parser');

// Instância uma nova aplicação
const app = express();

// Entender as requisições em json
app.use(bodyParser.json());
// Identificar os parâmetros via url
app.use(bodyParser.urlencoded({ extended: false}))

require('./controllers/authController')(app);

app.listen(3000);