import Link from "next/link";

export default function Home() {
  let name = 'kim min jae'
  return (
    <div>
      <h4 className="title" style={{color: 'red'}}>충주상고</h4>
      <p className="title-sub">by dev {name}</p>
    </div>
  );
}
