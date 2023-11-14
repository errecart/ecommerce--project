import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetails from './itemDetails'
import { doc, getDoc, getFirestore } from 'firebase/firestore'



export default function ItemDetailContainer() {

  const [details, setDetails] = useState([])
  const {productId} = useParams()

  useEffect(()=>{
    const db = getFirestore()
    const queryProduct  =  doc(db, 'productos', productId)
    getDoc(queryProduct)
    .then(resp =>setDetails( { id: resp.id, ...resp.data() } ))
  },[productId])

  return (
    <div>
      <ItemDetails info={details}/>
    </div>
  )
}
