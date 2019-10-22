const mongoose = require('mongoose')
//mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://todo-app:todo-app1@ds233258.mlab.com:33258/todo-app', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false})