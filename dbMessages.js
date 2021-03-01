import mongoose from "mongoose";
const whatsAppSchema = mongoose.Schema({
  message: String,
  name: String,
  timeStamp: String,
  received: Boolean
});

// export default mongoose.model("messagecontents", whatsAppSchema);
// module.exports(mongoose.model("messagecontents", whatsAppSchema));
export default mongoose.model("messagecontents", whatsAppSchema);
