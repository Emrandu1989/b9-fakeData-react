import { useEffect } from "react";
import { useState } from "react";
import Product from "./Product";



const Shops = ({handleAddToCart}) => {
       const [products, setProducts] = useState([]);
    //    console.log(products)

       useEffect(()=>{
            fetch('./fakeData.json')
            .then(res=>res.json())
            .then(data=>setProducts(data))
       },[])

    return (
        <div>
           <div className="text-center">
           <h2 className=" my-3 text-xl font-bold text-orange-500">This is Yellow's Collection</h2>
             <h4>Quantity of Products: {products.length}</h4>
           </div>
              <div className="grid grid-cols-2 gap-5 ml-12 mt-12">
                  {
                    products.map(product=> <Product 
                        product={product}
                        key={product.id}
                        handleAddToCart={handleAddToCart}
                    />  )
                  }
              </div>
        </div>
    );
};

export default Shops;