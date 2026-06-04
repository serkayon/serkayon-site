import { FaLinkedinIn, FaYoutube, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-[#191F2F] border-t border-[#2a3247] text-white">
      {/* TOP */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        
        {/* BRAND */}
        <div>
          <h3 className="text-2xl font-bold tracking-widest mb-3 text-[#FB2C36]">
            Serkayon
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Industrial Intelligence for modern manufacturing, predictive
            analytics, and bio-pharma process optimization.
          </p>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
            Our Product
          </h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li  className="hover:text-[#FB2C36] transition">
Machine Tool-Guard            </li>
            <li className="hover:text-[#FB2C36] transition">
             Bio-Predictive Maintenance
            </li>
            <li className="hover:text-[#FB2C36] transition">
              Column Integrity Guard
            </li>
            <li className="hover:text-[#FB2C36] transition">
              Feed Mill Intelligence
            </li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
            Company
          </h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            {/* <li className="hover:text-[#FB2C36] transition">Industries</li>
            <li className="hover:text-[#FB2C36] transition">Services</li>
            <li className=" hover:text-[#FB2C36] transition">Contact Us</li> */}

            <li><a href="#industries " className="nav-link hover:text-[#FB2C36] transition">Industries</a></li>
<li><a href="#services" className="nav-link hover:text-[#FB2C36] transition">Services</a></li>

<li><a href="#contact" className="nav-link hover:text-[#FB2C36] transition">Contact Us</a></li>
          
          </ul>
        </div>

        {/* CONNECT */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
            Connect
          </h4>

          <p className="text-gray-400 text-sm mb-2">
            <a
              href="mailto:support@serkayon.com"
              className="hover:text-[#FB2C36] transition"
            >
              support@serkayon.com
            </a>
          </p>

          {/* ADDRESS */}

<a
  href="https://maps.app.goo.gl/48qVT133HESet8SG6?g_st=ipc"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-start gap-3 text-gray-400 text-sm mb-4 leading-relaxed hover:text-[#FB2C36] transition"
>
  <FaMapMarkerAlt className="mt-1 text-[#FB2C36] flex-shrink-0" />

  <span>
    18, Thippiran Thotti Street,
    <br />
    Trichy - Tamil Nadu, 620008
  </span>
</a>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/company/serkayon/"
              className="w-10 h-10 flex items-center justify-center
                         border border-gray-600 rounded-full
                         text-gray-400
                         hover:text-[#FB2C36] hover:border-[#FB2C36]
                         transition"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="#"
              className="w-10 h-10 pointer-events-none flex items-center justify-center
                         border border-gray-600 rounded-full
                         text-gray-400
                         hover:text-[#FB2C36] hover:border-[#FB2C36]
                         transition"
            >
              <FaYoutube />
            </a>

            <a
              href="mailto:support@serkayon.com"
              className="w-10 h-10 flex items-center justify-center
                         border border-gray-600 rounded-full
                         text-gray-400
                         hover:text-[#FB2C36] hover:border-[#FB2C36]
                         transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-[#2a3247]">
        <div
          className="max-w-7xl mx-auto px-6 py-6
                        flex flex-col md:flex-row
                        justify-between items-center gap-4"
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Serkayon Technologies Pvt Ltd
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <span className="hover:text-[#FB2C36] transition cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-[#FB2C36] transition cursor-pointer">
              Cookie Policy
            </span>
            <span className="hover:text-[#FB2C36] transition cursor-pointer">
              Terms of Use
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;