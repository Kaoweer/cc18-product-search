/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"

export default function ProductInfo({search,setDebounce,debounce,curPage,setTotal}) {
  const [products,setProduct] = useState([])

  const fetchData = async() => {
    const resp = await fetch(`https://dummyjson.com/products/search?q=${debounce}&skip=${curPage}`)
    const result = await resp.json()
    setProduct(result.products)
    setTotal(result.total)
  }

  useEffect(() => {
    const timer = setTimeout(()=>{
      setDebounce(search)
      console.log('search')
    },1000)
    return ()=> clearTimeout(timer)
  },[search])

  useEffect(() => {
    fetchData()
    console.log('debounced')
  },[debounce])

  useEffect(() => {
    fetchData()
  },[curPage])

  return (
    <div>
      {products.map((el) => 
      <li key = {el.id}>{el.title} | {el.tags[0]} | ${el.price}</li>
      )}
    </div>
  )
}