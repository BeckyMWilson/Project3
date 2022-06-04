const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const jargonSchema = new Schema(
    {
        jargonBody: {
            type: String,
            required: true,
            unique: true,
            maxlength: 100
        },
        jargonDef: {
            type: String,
            required: 'Please define the term!'
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        username: {
            type: String,
            required: true
        },
        comments: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Comment'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

jargonSchema.virtual('commentCount').get(function() {
    return this.comments.length;
});

const Jargon = model('Jargon', jargonSchema);

module.exports = Jargon;