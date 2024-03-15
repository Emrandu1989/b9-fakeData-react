

const Carts = ({carts,handleDelete}) => {
    console.log(carts)
     const totalPrice = carts.reduce((p, c)=>p + c.price, 0)
    return (
        <div>
                <h2 className="text-center my-2 text-2xl font-bold text-yellow-800">Your Cart</h2>
                <div className="flex justify-between gap-3 mx-5">
                    <h2>Name</h2>
                    <h5 className="mr-12">Price</h5>
                </div>
                <div>
                    
                     {

                     }
                     {
                        carts.map((product, idx)=> (
                            <div
                            key={product.id}
                            >
                            
                            <div className="flex justify-between ">
                             <div className="flex">
                             <p>{idx + 1}.</p>
                              <h3>{product.title.slice(0,10)}</h3>
                             </div>
                                <h5 className="ml-12">{product.price}</h5>
                              <button onClick={()=>handleDelete(product.id)}  className="mr-5">X</button>
                            </div>
                            </div>
                        ) )
                     }
                </div>
                <h3 className="text-2xl text-center mr-2 mt-20">Total Price: { totalPrice.toFixed(2)} Tk </h3>
        </div>
    );
};

export default Carts;