const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const User = new Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },

  links: [
    {
      name: { type: String, required: true },
      url: { type: String, required: true },
    },
  ],
});

export default mongoose.models.User || model("User", User);
