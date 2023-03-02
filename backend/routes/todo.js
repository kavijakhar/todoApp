const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const fatchuser = require('../middleware/fatchuser');
const Todo = require('../models/Todo')

// Router 1 : Get all the Todo using : GET "api/todo/fatchalltodo". 
router.get('/fatchalltodo', fatchuser, async (req, res) => {
    try {

        const todo = await Todo.find({ user: req.user.id });
        res.json(todo);
        console.log(todo)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some Error occurred");
    }
})

// Route 2 : add a new todo using post :"/api/todo/addtodo": login required
router.post('/addtodo', fatchuser, [
    body('title', 'please a enter viled title').isLength({ min: 3 }),
    body('description', 'Description atleast 5 characters').isLength({ min: 5 }),
],
    async (req, res) => {
        try {

            const { title, description } = req.body;
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const todo = new Todo({
                title, description, user: req.user.id
            });
            const saveTodo = await todo.save();
            res.json(saveTodo);
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Some Error occurred");
        }
    })
// Route 3 : update a new Todo using put :"/api/todo/updatetodo": login required
router.put('/updatetodo/:id', fatchuser, async (req, res) => {
    try {

        const { title, description } = req.body;
        // create a newTodo object
        const newTodo = {};
        if (title) { newTodo.title = title };
        if (description) { newTodo.description = description };




        // find the todo to be updated and update it 
        let todo = await Todo.findById(req.params.id);
        if (!todo) { return res.status(404).send("Not Found") };


        if (todo.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        todo = await Todo.findByIdAndUpdate(req.params.id, { $set: newTodo }, { new: true })
        // console.log(newTodo)
        res.json({ todo });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some Error occurred");
    }

})
// Route 4: delete a new todo using delete :"/api/todo/deletetodo": login required
router.delete('/deletetodo/:id', fatchuser, async (req, res) => {
    try {
        // find the todo to be updated and update it 
        let todo = await Todo.findById(req.params.id);
        if (!todo) { return res.status(404).send("Not Found") }; 

        // allow deletion only if user owns this todo 
        if (todo.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        todo = await Todo.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Todo has been deleted ", todo: todo });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some Error occurred");
    }
})

module.exports = router;