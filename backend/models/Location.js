import mongoose, { Schema, model } from "mongoose"

const locationSchema = new Schema(
    {
        apiID: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        type: {
            type: String,
        },
        dimension: {
            type: String
        },
        residents: {
            type: [{id: mongoose.ObjectID, name: String}]
        }
    }, {
        versionKey: false,
        timestamps: true
    }
)