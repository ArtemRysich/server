const express = require('express');
const mongoose = require('mongoose');
const app = express();
const router = express.Router();
const Model = require('./models/question');
app.use(express.json());
app.use('/api', router);
app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})
const db = 'mongodb+srv://arysich:oBe3d0ukBZX2xOyC@cluster0.plp6laf.mongodb.net/?retryWrites=true&w=majority'

mongoose
    .connect(db)
    .then(res => console.log('conneсt'))
    .catch(err => console.log(err));

router.post('/question', async (req, res) => {
    const data = new Model({
        name: req.body.name,
    })

    try {
        const saved = await data.save();
        res
            .status(200)
            .json(saved)
    } catch (err) {
        res
            .status(400)
            .json({ message: err.message })
    }

})

router.get('/getAll', async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})