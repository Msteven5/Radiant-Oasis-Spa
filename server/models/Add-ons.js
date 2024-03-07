

const addOnSchema = new Schema(
  {
    addOnId: {
      type: Schema.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId(),
    },
    addOnName: {
      type: String,
      required: true,
      trim:true
    },
    addOnPrice: {
      type: Number,
      required: true,
    }
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

module.exports = addOnSchema;
