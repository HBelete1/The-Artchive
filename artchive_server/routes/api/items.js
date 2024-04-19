const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');

const Item = require('../../models/Item');

//Items on homepage
router.get('/', (req, res) => {
    Item.find()
        .then((items) => res.json({items}))
        .catch((err) => res.status(400).json({noitemsfound: 'No items found'}));
});

//Items by you
router.get('/portfolio/:id', (req, res) => {
    Item.findById(req.params.id)
        .then((item) => res.json({item}))
        .catch((err) => res.status(400).json({noitemfound: 'No item found'}));
});

//Edit item
router.put('/portfolio/:id', (req, res) => {
    Item.findByIdAndUpdate(req.params.id, req.body)
        .then((item) => res.json({msg: 'Update successfully'}))
        .catch((err) => res.status(400).json({error: 'Unable to update the Database'}));
});

//Item create
router.post('/uploadPage', bodyParser.json(), (req, res) => {
    Item.create(req.body)
        .then((item) => res.json({ msg: 'Item added successfully' }))
        .catch((err) => res.status(400).json({error: 'Error'}));
});

//Delete items
router.delete('/portfolio/:id', (req, res) => {
    Item.findByIdAndDelete(req.params.id)
        .then((item) => res.json({ msg: 'Item entry delete successfully'}))
        .catch((err) => res.status(400).json({error: 'No such item'}));
});

module.exports = router;