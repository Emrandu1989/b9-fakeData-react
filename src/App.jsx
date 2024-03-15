
import { useState } from 'react'
import './App.css'
import Carts from './components/Carts/Carts'
import Shops from './components/Shops/Shops'

function App() {
  const [carts, setCarts] = useState([]);
   
  const handleAddToCart = (product) =>{
    const isExist = carts.find(p=> p.id === product.id);
      if(isExist){
           alert('already Exist')
      }
      else{

        const newCart = [...carts, product];
        setCarts(newCart)
  }
      }

      const handleDelete = (id) =>{
            const newCart = carts.filter(item=>item.id !== id)
            setCarts(newCart)
      }
  

  return (
    <>
      
      <h1 className='text-4xl text-center font-bold my-5'>Welcome To Yellow</h1>

       <div className='grid grid-cols-12 max-w-6xl mx-auto'>
       <div className='col-span-9'>
            <Shops handleAddToCart={handleAddToCart} />
        </div>
        <div className='col-span-3 h-96 bg-slate-300 rounded-xl'>
              <Carts carts={carts} handleDelete={handleDelete}/>
        </div>
       </div>
      
    </>
  )
}

export default App
