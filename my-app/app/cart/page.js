export default function Cart () {
        return (
        <div>
            <h4 className="title">Cart</h4>
            <CartItem/>
            <CartItem/>
            <CartItem/>
        </div>
    )
}

function CartItem() {
    return (
            <div className="cart-item">
                <p>상품명</p>
                <p>14000원</p>
                <p>1개</p>
            </div>
    )
}