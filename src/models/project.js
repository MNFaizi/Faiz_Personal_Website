const mongosee = require('mongoose');

const ProjectSchema = new mongosee.Schema({
    owner : {
        type : mongosee.Schema.Types.ObjectId,
        ref : 'User',
    },
    project_name : {
        type: String,
        required: true,
        unique:true,
    },
    description : {
        type: String,
        required : true,
    },
    technology : {
        type : [String]
    },
    // this for multimedia path
    path : {
        type : String,
        require : true
    } 
})

module.exports = mongosee.model('Project', ProjectSchema);