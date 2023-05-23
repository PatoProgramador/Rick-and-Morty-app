import mongoose, { Schema, model } from "mongoose";
import mongooosePaginate from 'mongoose-paginate';

const userSchema = new Schema(
    {   
        apiID: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        img: {
            type: String,
        },
        status: {
            type: String,
            required: true
        },
        species: {
            type: String
        },
        gender: {
            type: String
        },
        origin: {
            id: {
                type: mongoose.Schema.Types.ObjectId
            },
            name: {
                type: String
            }
        },
        location: {
            id: {
                type: mongoose.Schema.Types.ObjectId
            },
            name: {
                type: String
            }
        },
        episodes: [Object]
    }, {
        versionKey: false,
        timestamps: true
    }
);

userSchema.plugin(mongooosePaginate);

export default model('character', userSchema);
