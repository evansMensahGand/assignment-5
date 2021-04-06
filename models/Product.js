  const{Schema, model}= require("mongoose");

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please provide the name of the product."],
    },
    price: {
        type:String,
        required: [true, "Please provide the price of the product."],

    },
    quantity: {
        type: Number,
        default: 0,
    },
    size: {
        type: String,
        required: [true, "Please select either small(S), medium(M), large(L), xtra large(XL), or xtra xtra Large(XXL)"],
    },
    description: String,
},
    {
        timestamps: true
    }
);

module.exports = model("Product", productSchema);