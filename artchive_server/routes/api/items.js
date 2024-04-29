const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
const auth = require('../../middleware/auth');

const Item = require('../../models/Item');

//Items on homepage
router.get('/', (req, res) => {
    Item.find()
        .then((items) => res.json({items}))
        .catch((err) => res.status(404).json({noitemsfound: 'No items found'}));
});

//Items by you
router.get('/portfolio', auth, (req, res) => {
    const userId = req.user;
    Item.find({
        user: userId
    })
        .then((items) => res.json({items}))
        .catch((err) => res.status(404).json({noitemfound: 'No item found'}));
});

//Edit item
router.put('/portfolio/:id', auth, (req, res) => {
    Item.findByIdAndUpdate(req.params.id, req.body)
        .then((item) => res.json({msg: 'Update successfully'}))
        .catch((err) => res.status(400).json({error: 'Unable to update the Database'}));
});

//Item create
router.post('/uploadPage', auth, bodyParser.json(), async (req, res) => {
   try {
    const userId = req.user;
    const { image, title, date, description, category } = req.body;
    const newItem = await Item.create({ image, title, date, description, category, user:userId});

        res.json({ msg: 'Item added successfully', item: newItem });
    } catch (err) {
        res.status(400).json({ error: 'Error creating item', message: err.message });
    }
});

//Delete items
router.delete('/portfolio/:id', auth, (req, res) => {
    Item.findByIdAndDelete(req.params.id)
        .then((item) => res.json({ msg: 'Item entry delete successfully'}))
        .catch((err) => res.status(404).json({error: 'No such item'}));
});

module.exports = router;
