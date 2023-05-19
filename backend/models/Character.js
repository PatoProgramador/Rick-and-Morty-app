import { Schema, model} from "mongoose"

const userSchema = new Schema(
    {
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
        gender: {
            type: String
        },
        origin: {
            type: String,
            required: true
        },
        location: {
            type: String
        }
    }, {
        versionKey: false,
        timestamps: true
    }
);

export default model('character', userSchema);
