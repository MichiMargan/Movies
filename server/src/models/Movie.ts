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
      type: String,
      required: true,
    },
    genres: {
      type: [String],
      required: true,
    },
    release: {
      type: Date,
    },
    credits: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

export default model("Movie", movieSchema);
