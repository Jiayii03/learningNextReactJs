import mongoose from "mongoose"

// a schema that we pass into mongoose. The db will use this model to make sure that everytime the data has to follow this specific format
const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            min: 2,
            max: 100,
        },
        email: {
            type: String,
            required: true,
            max: 50,
            unique: true
        },
        password: {
            type: String,
            required: true,
            min: 5,
        },
        city: String,
        state: String,
        country: String,
        occupation: String,
        phoneNumber: String,
        transactions: Array,
        role: {
            type: String,
            enum: ["user", "admin", "superadmin"],
            default: "admin",
        },

    },
    { timestamps: true },
);

const User = mongoose.model("User", UserSchema)

export default User