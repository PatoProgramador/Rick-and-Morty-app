import mongoose, { Schema, model } from "mongoose"

const episodeSchema = new Schema(
    {
        apiID: {
            type: Number,
            required: true
        },
        img: {
            type: String,
        },
        name: {
            type: String,
            required: true
        },
        airDate: {
            type: String,
            required: true
        },
        episode: {
            type: String,
            required: true
        },
        characters: {
            type: [{id: mongoose.ObjectID, name: String}]
        }
    }, {
        versionKey: false,
        timestamps: true
    }
);

export default model('episode', episodeSchema)