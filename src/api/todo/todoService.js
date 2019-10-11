const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete'])
//Todo.updateOption({ new: true, runValidator: true })

module.exports = Todo