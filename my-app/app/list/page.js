export default function List () {
    let 상품 = ['Tomatoes','Pizza', 'Pasta']
    return (
        <div>
            <h4 className="title">상품목록</h4>
            {
                상품.map((a, i) => {
                    return (
                        <div className="food" key={i}>
                            <img src={`/food${i}.png`} className="food-img" alt="토마토"></img>
                            <h4>{a} 14000원</h4>
                        </div>
                    )
                })
            }
        </div>
    )
}