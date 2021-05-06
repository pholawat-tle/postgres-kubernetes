const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const app = express();

const PORT = 5000 || process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(logger('tiny'));

app.get('/', (req, res) => {
    res.send({ msg: 'Success!' });
});

app.listen(PORT, () => {
    console.log(`Listening to ${PORT}`);
});
