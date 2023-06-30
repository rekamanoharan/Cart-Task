import React from "react";

function AddCart({ data = {},onClickHandler,cartItems }){
    const isInCart = cartItems.length ? !!cartItems.find((item)=> item.id === data.id) : false;

return (
    <div>
          <div className="col mb-5">
                <div className="card h-100">
                    <img className="card-img-top" src={data.image} alt="..." />
                    <div className="card-body p-4">
                        <div className="text-center">

                            <h5 className="fw-bolder">${data.productName}</h5>

                       ₹{data.price}
                        </div>
                    </div>
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={(e)=>onClickHandler(e,data,isInCart)}>{isInCart ? 'Remove from cart': 'Add to cart'}</a></div>
                    </div>
                </div>
            </div>
            </div>
);
}

export default AddCart;