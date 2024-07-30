import { ObjectId } from "/utils/database.js";
import { ObjectId } from "mongodb";

export default async function handler(요청,응답) {
    if (요청.method == 'POST') {
        console.log(요청,body);
    }
    let db = (await connnectDB).db('forum');
    let result = await db.collec
}