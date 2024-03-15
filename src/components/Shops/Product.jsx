


const product = ({product,handleAddToCart}) => {
    // console.log(product)
    const {description, id, image, price, title} = product;
    return (
        <div>
             <div className="card border-2 py-2 w-72 my-5 bg-base-100 shadow-xl">
  <figure><img className="w-24" src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title.slice(0,10)}</h2>
    <p>{description.slice(0,100)}</p>
     <div className="flex justify-between items-center">
        <h5>Price:{price}</h5>
     <button onClick={()=>handleAddToCart(product)} className="bg-green-300 p-2 rounded ">Add To Cart</button>
     </div>
    <div className="card-actions justify-center w-full">
      
    </div>
  </div>
</div> 
        </div>
    );
};

export default product;