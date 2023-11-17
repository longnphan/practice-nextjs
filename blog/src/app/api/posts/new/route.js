import Post from "@/app/model/blogModel";
import { connectToDB } from "../../../utils/database"

export const POST = async request => {
  const { title, message } = await request.json();

  try {
    await connectToDB();
    const newPost = new Post({ title: "test123", message: "message555" });

    await newPost.save();
    return new Response(JSON.stringify(newPost), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new post", { status: 500 });
  }
};
