

const addOnSchema = new Schema(
  {
    addOnName: {
      type: String,
      required: true,
      trim:true
    },
    addOnPrice: {
      type: Number,
      required: true,
    }
  }
);

module.exports = addOnSchema;
