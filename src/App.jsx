import { useState } from "react"
import ProductInfo from "./ProductInfo"

function App() {
  const [search,setSearch] = useState('')
  const [debounce,setDebounce] = useState('')
  const [curPage,setCurPage] = useState(0)
  const [total,setTotal] = useState(0)

  return (
    <>
      <h1>Product Search</h1>
      <p>https://dummyjson.com/products/search?q=<u><b>{debounce}</b></u>&limit=10&skip=<u><b>{curPage}</b></u></p>
      <button onClick={() => {
        if (curPage-10 >= 0){
          setCurPage(prv => prv-10)
        }}}>prev</button>
      {(curPage/10) +1}/{Math.ceil(total/10)}
      <button onClick={() => {
        if (curPage+10 < Math.ceil(total)){
          setCurPage(prv => prv+10)
        }
        }}>next</button>
      <hr/>
      <input type="text" onChange={(e) => {
        setSearch(e.target.value)
        setCurPage(0)
        // console.log(search)
      }}/>
      <ProductInfo 
      search={search}
      setDebounce = {setDebounce}
      debounce = {debounce}
      curPage = {curPage}
      setTotal = {setTotal}/>
    </>
  )
}

export default App
