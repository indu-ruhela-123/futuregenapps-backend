import mongoose from "mongoose";

const homeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    subtitle: { type: String },
    bannerImage: { type: String },
    aboutSection: { type: String },
    services: [
      {
        name: String,
        description: String,
      },
    ],
    images: [String],
  },
  { timestamps: true }
);

const Home = mongoose.model("Home", homeSchema);

export default Home;
