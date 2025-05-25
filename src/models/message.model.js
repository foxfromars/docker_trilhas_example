import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
  sender: String,
  receiver: String,
  content: String,
  meta: {
    seen: {
      type: Boolean,
      default: false
    }
  },
});

const messageModel = mongoose.model("Message", messageSchema);

export default messageModel;
