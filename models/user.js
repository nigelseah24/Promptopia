import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, "Email already exists!"], // If not unique, say "Email already exists"
        required: [true, "Email is required!"], 
    },
    name: {
        type: String,
        required: [true, "Username is required!"],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, 
        "Username must be between 8 and 20 alphanumeric letters and be unique."],
    },
    image: {
        type: String,
    },
});

const User = models.User || model("User", UserSchema);

export default User;

