const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 6,
      max: 255,
    },
    email: {
      type: String,
      require: true,
      min: 6,
      max: 255,
      unique: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.statics.paginate = async function (query, options) {
    const { page, limit, orderBy } = options;
    if(!("createdAt" in orderBy)) {
        orderBy.createdAt = "desc";
    }
    const sorting = [];
    for (let key in orderBy) {
        sorting.push([key, orderBy[key] == "desc" ? -1 : 1]);
    }
    console.log("sorting", sorting);
    const skip = (page - 1) * limit;

    return await this.find(query).sort(sorting).skip(skip).limit(limit);

};

const User = mongoose.model("User", UserSchema);

module.exports = User;
