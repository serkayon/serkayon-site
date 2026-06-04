import { motion } from "framer-motion"
import heroImg from "../assets/3d model.png"
import WhoWeAre from "./WhoWeAre";

export default function Hero(){

return(

<section id="home" className="section grid-bg">

<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

<motion.div
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:1}}
>

<h1 className="text-5xl text-[#29334E] md:text-6xl font-bold leading-tight">

Every Industry   
<span className="text-red-500  md:text-nowrap"> Deserves IoT</span>

</h1>

<p className="mt-6 text-gray-600">

Smart industrial intelligence platform enabling
predictive maintenance, analytics and automation.

</p>




</motion.div>


{/* Industrial Illustration */}

<div className="relative flex justify-center">

<motion.img
  src={heroImg}
  alt="Industrial Illustration"
  animate={{
    y: [0, -10, 0],
    rotate: [0, 2, -3, 0]
  }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut"
  }}
/>


</div>

</div>
{/* Who We Are Section */}
<div className="mt-24">
  <WhoWeAre />
</div>

</section>


)
}