import {connectDB} from "/utils/database.js";

export default async function handler(요청,응답){
    
    if (요청.method == "POST"){
        if (요청.body.title == ""){
            return 응답.status(500).json("제목을 제대로 입력하세요");
        }
        try {
            let db = (await connectDB).db('forum');
            let result = db.collection("post").insertOne(요청.body)
            응답.redirect(302,'/list');
            응답.status(200).json(요청.body);
        } catch (error){
            console.log("DB 에러 발생");
        }
    }    
}