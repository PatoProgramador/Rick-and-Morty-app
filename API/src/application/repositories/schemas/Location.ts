import { Schema, model } from 'mongoose'
import mongooosePaginate from 'mongoose-paginate'

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
      type: [Object]
    }
  }, {
  versionKey: false,
  timestamps: true
}
)

locationSchema.plugin(mongooosePaginate)

export default model('location', locationSchema)
