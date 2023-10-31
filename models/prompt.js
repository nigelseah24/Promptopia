import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User', //one user can have many prompts
    },
    prompt: {
        type: String,
        required: [true, "Prompt is required"],
    },
    tag: {
        type: String,
        required: [true, "Tag is required"],
    }
});

const Prompt = models.Prompt || model("Prompt", PromptSchema); //if model exists, use it, otherwise create it

export default Prompt;
