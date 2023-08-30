import { Schema, model } from "mongoose";

const movieSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    description: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Movie", movieSchema);
