import './App.css'
import { Outlet, useParams } from 'react-router-dom'
// import Heading from './components/Heading'
import Navbar from './components/Navbar'
import Pagination from './components/Pagination'
import { useEffect, useState } from 'react';
import Hero from './components/Hero';

function App() {


  const [page, setPage] = useState(1);
  const [start, setStart] = useState(0);
  const [visible, setVisible] = useState(6);

  const {id}=useParams()
 





  console.log(start,visible,id,page)



useEffect(() => {
    setPage(id)


}, [id])




  return (

    <>

<div
className='
  h-screen
  grid
  grid-cols-1
  grid-rows-[.35fr_.15fr_1fr]

'
>
      
      <Navbar/>
      <Hero start={(page*6)-6} visible={page*visible}  id={page} />
      <Outlet/>

  


   <Pagination   setPage={setPage}  id={id}    />



      
  
</div>

    </>
  )
}

export default App
