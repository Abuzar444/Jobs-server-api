const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
    company: {
        type: String,
        required: [true, 'Please provide company name'],
        maxLength: 50,
    },
    position: {
        type: String,
        required: [true, 'Please provide position'],
        maxLength: 200
    },
    status: {
        type: String,
        enum: ['enterview', 'declined', 'pending'],
        default: 'pending'
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide true']
    }
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Job', jobSchema)