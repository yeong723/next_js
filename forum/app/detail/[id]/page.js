import { ObjectId } from "mongodb";
import { connectDB } from "@/utils/database.js"

export default async function Detail(props) {
    let db = (await connectDB).db('forum');
    let result = await db.collection('post').findOne({_id : new })
    console.log(result)
    console.log(props)
}