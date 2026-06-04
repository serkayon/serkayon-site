import { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import logo from "../assets/NEW logo.jpeg"

export default function Navbar(){

const [open,setOpen]=useState(false)
const [productOpen, setProductOpen] = useState(false)
const dropdownRef = useRef(null)

useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setProductOpen(false)
    }
  }

  document.addEventListener("mousedown", handleClickOutside)

  return () =>
    document.removeEventListener(
      "mousedown",
      handleClickOutside
    )
}, [])
return(

<nav className="sticky top-0 bg-white shadow-sm z-50">

<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

<img src={logo} className="h-8 md:h-10 object-contain"/>

<ul className="hidden md:flex gap-10 text-sm font-medium font-family-new">

<li><a href="/" className="nav-link">Home</a></li>
<li
  className="relative"
  ref={dropdownRef}
  onMouseEnter={() => setProductOpen(true)}
  onMouseLeave={() => setProductOpen(false)}
>
  <button
    className="nav-link flex items-center gap-1"
  >
    Products
    {/* <span
      className={`transition-transform duration-300 ${
        productOpen ? "rotate-180" : ""
      }`}
    >
      ▼
    </span> */}
  </button>

  <div
    className={`
      absolute top-full left-0 mt-3
      w-72
      bg-white
      rounded-xl
      shadow-xl
      border border-slate-200
      overflow-hidden
      transition-all duration-300
      ${
        productOpen
          ? "opacity-100 visible translate-y-0"
          : "opacity-0 invisible -translate-y-3"
      }
    `}
  >
    <Link
      to="/product/machine-monitoring"
      className="block px-5 py-3 hover:bg-slate-50 text-[#1F2A44]"
    >
      Machine Tool Guard (MTG)
    </Link>
    <Link
      to="/product/poultrynet"
      className="block px-5 py-3 hover:bg-slate-50 text-[#1F2A44]"
    >
 Poultry Net
    </Link>

    <Link
      to="/product/predictive-maintenance"
      className="block px-5 py-3 hover:bg-slate-50 text-[#1F2A44]"
    >
      Bio Predictive Maintenance
    </Link>

    <Link
      to="/product/column-integrity-guard"
      className="block px-5 py-3 hover:bg-slate-50 text-[#1F2A44]"
    >
      Bio Column Integrity Guard
    </Link>
  </div>
</li>
<li><a href="/services" className="nav-link">Services</a></li>
{/* <li><a href="/clients" className="nav-link">Clients</a></li> */}
<li>
  <Link
    to="/pricing"
    className="nav-link"
  >
  Plans & Pricing</Link>
</li>
<li><a href="/contact" className="nav-link">Contact Us</a></li>


</ul>

<button 
className="md:hidden text-2xl"
onClick={()=>setOpen(!open)}
>
☰
</button>

</div>
{/* Mobile Overlay Menu */}

<div
  className={`
    md:hidden
    absolute left-0 top-full w-full
    bg-white
    border-t border-[#FEE2E2]
    shadow-[0_20px_40px_rgba(0,0,0,0.08)]
    overflow-hidden
    transition-all duration-500 ease-in-out
    ${
      open
        ? "max-h-[700px] opacity-100"
        : "max-h-0 opacity-0"
    }
  `}
>
  <div className="p-5">

    <div className="space-y-2">

      <Link
        to="/"
        onClick={() => setOpen(false)}
        className="
          flex items-center
          px-5 py-4
          rounded-2xl
          text-[#1F2A44]
          font-semibold
          hover:bg-[#FFF8F8]
          hover:text-[#FB2C36]
          transition-all duration-300
        "
      >
        Home
      </Link>

      <button
        onClick={() => setProductOpen(!productOpen)}
        className="
          w-full
          text-left
          px-5 py-4
          rounded-2xl
      

          text-[#1F2A44]
          font-semibold
          hover:bg-[#FFEAEA]
          transition-all duration-300
        "
      >
        Products
      </button>

      <div
        className={`
          overflow-hidden
          transition-all duration-500 ease-in-out
          ${
            productOpen
              ? "max-h-[300px] opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <div
          className="
            ml-3
            mt-3
            rounded-2xl
            border border-[#FEE2E2]
            bg-[#FFFBFB]
            overflow-hidden
            shadow-sm
          "
        >
          <Link
            to="/product/machine-monitoring"
            onClick={() => {
              setOpen(false)
              setProductOpen(false)
            }}
            className="
              block
              px-5 py-4
              text-[#1F2A44]
              hover:bg-[#FFF1F2]
              hover:text-[#FB2C36]
              transition-all duration-300
            "
          >
            Machine Tool Guard
          </Link>
   <Link
            to="/product/poultry"
            onClick={() => {
              setOpen(false)
              setProductOpen(false)
            }}
            className="
              block
              px-5 py-4
              border-t border-[#FEE2E2]
              text-[#1F2A44]
              hover:bg-[#FFF1F2]
              hover:text-[#FB2C36]
              transition-all duration-300
            "
          >
       Poultry Net
          </Link>
          <Link
            to="/product/predictive-maintenance"
            onClick={() => {
              setOpen(false)
              setProductOpen(false)
            }}
            className="
              block
              px-5 py-4
              border-t border-[#FEE2E2]
              text-[#1F2A44]
              hover:bg-[#FFF1F2]
              hover:text-[#FB2C36]
              transition-all duration-300
            "
          >
            Bio-Predictive Maintenance
          </Link>

          <Link
            to="/product/column-integrity-guard"
            onClick={() => {
              setOpen(false)
              setProductOpen(false)
            }}
            className="
              block
              px-5 py-4
              border-t border-[#FEE2E2]
              text-[#1F2A44]
              hover:bg-[#FFF1F2]
              hover:text-[#FB2C36]
              transition-all duration-300
            "
          >
            Bio-Column Integrity Guard
          </Link>
        </div>
      </div>

      <Link
        to="/services"
        onClick={() => setOpen(false)}
        className="
          flex items-center
          px-5 py-4
          rounded-2xl
          text-[#1F2A44]
          font-semibold
          hover:bg-[#FFF8F8]
          hover:text-[#FB2C36]
          transition-all duration-300
        "
      >
        Services
      </Link>

      <Link
        to="/pricing"
        onClick={() => setOpen(false)}
        className="
          flex items-center
          px-5 py-4
          rounded-2xl
          text-[#1F2A44]
          font-semibold
          hover:bg-[#FFF8F8]
          hover:text-[#FB2C36]
          transition-all duration-300
        "
      >
        Pricing
      </Link>

      {/* <Link
        to="/clients"
        onClick={() => setOpen(false)}
        className="
          flex items-center
          px-5 py-4
          rounded-2xl
          text-[#1F2A44]
          font-semibold
          hover:bg-[#FFF8F8]
          hover:text-[#FB2C36]
          transition-all duration-300
        "
      >
        Clients
      </Link> */}

      <Link
        to="/contact"
        onClick={() => setOpen(false)}
        className="
  
           flex items-center
          px-5 py-4
          rounded-2xl
          text-[#1F2A44]
          font-semibold
          hover:bg-[#FFF8F8]
          hover:text-[#FB2C36]
          transition-all duration-300
        "
      >
        Contact Us
      </Link>

    </div>
  </div>
</div>
</nav>

)
}