import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema(
  {
    id:{type:Number,required:true,unique:true},
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    requirement: { type: String, required: true },
    
  },
  { timestamps: true }
);

const Enquiry = mongoose.model("Enquiry", enquirySchema);

export default Enquiry;
