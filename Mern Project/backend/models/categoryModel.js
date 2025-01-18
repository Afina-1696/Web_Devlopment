const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter category Name"],
        trim: true,
      },
      description: {
        type: String,
        required: [true, "Please Enter category Description"],
      },
      images: [
        {
          public_id: {
            type: String,
            required: true,
          },
          url: {
            type: String,
            required: true,
          },
        },
      ],
    
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    });
    
    module.exports = mongoose.model("Category", categorySchema);