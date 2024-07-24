import { MongoClient } from "mongodb"

export default function Home() {
  const client = MongoClient.connect('mongodb+srv://heoboyoung:HBY723@heoboyoung.u77umxd.mongodb.net/?retryWrites=true&w=majority&appName=heoboyoung');

  return (
    <div>테스트</div>

  )
}