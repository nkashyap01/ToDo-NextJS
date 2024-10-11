const Schema = new moongoose.Schema({
    title:{
        type:string,
        required:true
    },
    description:{
        type:string,
        required:true
    },
    isCompleted: {
        type:Boolean,
        default:false
    }

},
{
    timeStamp:true
});


const TodoModel = mongoose.models.todo||mongoose.model('todo', Schema);

export default TodoModel;