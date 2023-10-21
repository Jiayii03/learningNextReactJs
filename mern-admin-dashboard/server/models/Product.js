import mongoose from "mongoose"

// a schema that we pass into mongoose. The db will use this model to make sure that everytime the data has to follow this specific format
const ProductSchema = new mongoose.Schema(
    {
        name: String,
        price: Number,
        
    },
    { timestamps: true },
);

const Product = mongoose.model("Product", UserSchema)

export default Product