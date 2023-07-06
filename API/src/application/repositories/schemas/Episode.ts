import { Schema, model } from 'mongoose'
import mongooosePaginate from 'mongoose-paginate'

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
      type: [Object]
    }
  }, {
  versionKey: false,
  timestamps: true
}
)

episodeSchema.plugin(mongooosePaginate)

export default model('episode', episodeSchema)
