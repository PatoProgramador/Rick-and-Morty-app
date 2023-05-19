import { Schema, model} from "mongoose"

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
                type: mongoose.ObjectID
            },
            name: {
                type: String
            }
        },
        location: {
            id: {
                type: mongoose.ObjectID
            },
            name: {
                type: String
            }
        },
        episodes: [{id: mongoose.ObjectID, name: String}]
    }, {
        versionKey: false,
        timestamps: true
    }
);

export default model('character', userSchema);
