import mongoose from "mongoose"

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})

mongoose.connection
.on("open", () => console.log("Connected to Mongo"))
.on("error", (err) => console.log(err))

const blogSchema = new mongoose.Schema({
    title:  String,
    body: String
}, {timestamps: true})

export const connection = mongoose

export const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema)
