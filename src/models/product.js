import mongoose from "mongoose";
const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
    },
    price: {
        type: Number,
    }
});

export default mongoose.model("Product", productSchema);