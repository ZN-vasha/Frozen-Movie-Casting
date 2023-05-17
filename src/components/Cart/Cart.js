import './Cart.css'

const Cart = (props) => {
    const{cart}=props;
    // Calculating Total Cost
    let total=0;
    for(const character of cart)
    {
        total=total+character.demand;
    }
    
    return (
        <div className="cartDetails">
            <h3>Actor Booking Summary</h3>
            {/* Total Actor booked */}
            <h4>Actor booked : {props.cart.length} </h4>
            <div>
                {
                    // Show Actor Name
                    props.cart.map(character=><h5 key={character.key}>
                         <small>{character.name}</small> </h5>)
                }
                
            </div>
            
            <hr/>
            <h5>Total Casting Cost : ${total} </h5>

        </div>
    )
};

export default Cart;