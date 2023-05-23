import mongoose, { Schema, model } from "mongoose"

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
            },
            apiUrl: {
                type: String
            },
        },
        location: {
            id: {
                type: mongoose.Schema.Types.ObjectId
            },
            name: {
                type: String
            },
            apiUrl: {
                type: String
            }
        },
        episodes: [String]
        //episode: [{id: mongoose.Schema.Types.ObjectId, name: String}]
    }, {
        versionKey: false,
        timestamps: true
    }
);

export default model('character', userSchema);
