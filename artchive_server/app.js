const express = require('express');
const app = express();
const port = process.env.PORT || 8085;
const mongoose = require('mongoose');
const cors = require('cors');
const items = require('./routes/api/items');
const users = require('./routes/api/users');

app.use(express.json())
app.use(cors);
app.use('/api/users', users);
app.use(cors({origin: true, credentials: true}));
app.use('/api/items', items);
app.get('/', (req, res) => res.send('Hello world'));

const conn_str = 'mongodb+srv://sdr92017:sockstiger@artchivecluster.xswurje.mongodb.net/?retryWrites=true&w=majority&appName=ArtchiveCluster';
mongoose.set('strictQuery', false);
mongoose.connect(conn_str).then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
    console.log(`MongoDB Connection Suceeded...`);
})
.catch(err => {
    console.log(`Error in DB Connection ${err}`);
});
