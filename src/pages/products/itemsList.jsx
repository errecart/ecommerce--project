import React, { useEffect, useState } from 'react'
import ItemsCard from './itemsCard'
import Loading from '../../loading/loading'
import { useParams } from 'react-router-dom';
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'


export default function ItemsList() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  const {categoryId} = useParams()


  useEffect(()=>{
      const db = getFirestore()
      const querryProductsAll = collection(db, 'productos')
      const querryFilt = categoryId ?
            query(querryProductsAll,where('categories','==',categoryId)) 
            : querryProductsAll
      getDocs(querryFilt)
      .then(resp => setProducts(resp.docs.map(prod => ({id:prod.id, ...prod.data()}) )))
      .catch(err => console.log(err))
      .finally(setLoading(false))
      // agregar sweatalert en el caso de un catch

  },[categoryId])


  return (
    <div className='products-container'>
      {loading ? 
        <Loading /> 
          :
          <div className='products'>
          {products.map((prod) =>(
              <div key={prod.id} className='products-list'>
                <ItemsCard data={prod}/>
              </div>
          ))}
          
      </div>
      }
    </div>
  )
}











