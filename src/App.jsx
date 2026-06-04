import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/NavBar"
import Hero from "./components/Hero"
import Services from "./components/Services"

import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Products from "./components/Products"
import Pricing from "./components/Pricing"
export default function App(){

// const [showIntro,setShowIntro] = useState(true)

// useEffect(()=>{  

// setTimeout(()=>{
// setShowIntro(false)
// },3000)

// },[])

// const text = "Every Industry Deserves IoT"

// const container = {
// hidden:{opacity:1},
// visible:{
// transition:{
// staggerChildren:0.05
// }
// }
// }

// const letter = {
// hidden:{opacity:0,y:40},
// visible:{opacity:1,y:0}
// }

// if(showIntro){
// return(

// <div className="intro-screen">

// <motion.h1
// variants={container}
// initial="hidden"
// animate="visible"
// className="intro-text"
// >

// {text.split("").map((char,i)=>(
// <motion.span key={i} variants={letter}>
// {char}
// </motion.span>
// ))}

// </motion.h1>

// </div>

// )
// }

return(

<div>

{/* <Navbar/>
<Hero/>
<Industries/>
<Services/>
<Products/>
<Clients/>
<Contact/>
<Footer/> */}

  <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />

            <Route path="/products" element={<Products />} />
                    <Route path="/product/:productId" element={<Products />} />


        <Route path="/services" element={<Services />} />
   
        <Route path="/contact" element={<Contact />} />
           <Route path="/footer" element={<Footer />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <Footer />
    </BrowserRouter>
</div>

)

}