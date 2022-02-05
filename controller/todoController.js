
const TodoSchema = require("../models/todo")
class NewController {
    index(req, res, next) {
        TodoSchema.find({})
        .then(todos=> {
            res.render('todo', {todos})
        })
        .catch(error=> res.status(500).json('Lỗi server')) 
    }
    create(req, res) {
        let todo = new TodoSchema(
            {
                name: req.body.name,
                status: "unfinished"
            }
        );
        todo.save();
        res.redirect('/');
    }
    destroy(req, res, next) {
        TodoSchema.findByIdAndRemove(req.params.id)
        .then(()=> {
        res.redirect('/');
    })
        .catch(error=> res.status(500).json('Lỗi server')) 

    }
    update(req, res) {
        res.json('ok');
        // let todo = new TodoSchema(
        //     {
        //         name: req.body.name,
        //         status: "complete"
        //     }
        // );
        // todo.save();
        console.log('Updating todo: ' + req.params.id);
        TodoSchema.findByIdAndUpdate({_id:req.params.id})
        .then(()=> res.redirect('/'))
    }

}

module.exports= new NewController;