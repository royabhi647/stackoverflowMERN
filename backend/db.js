const mongoose = require("mongoose");

const url =
"mongodb+srv://stackoverflowClone:8imVNKimpr1dzptg@cluster0.hnuhu8n.mongodb.net/?retryWrites=true&w=majority";

module.exports.connect = () => {
  mongoose
    .connect(url)
    .then((res) => console.log("MongoDB is connected successfully"))
    .catch((err) => console.log("Error: ", err));
};
