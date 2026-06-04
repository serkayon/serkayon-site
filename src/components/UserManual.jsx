import { Download } from "lucide-react";

const products = [
  {
    name: "Bio-PM",
    description:
      "Predictive Maintenance System for AI-driven machine health monitoring.",
    pdf: "/Bio-PM_User_Manual.pdf",
  },
  {
    name: "Bio-CIG",
    description:
      "Column Integrity Guard for structural stress and load monitoring.",
    pdf: null,
  },
  {
    name: "EMS",
    description:
      "Monitors energy consumption and identifies optimization opportunities.",
    pdf: null,
  },
    {
    name: "PoultryNet",
    description:
      "Smart poultry farm monitoring and analytics platform for productivity and operational efficiency.",
    pdf: null,
  },
];

const UserManual = () => {
  const handleDownload = (pdfPath) => {
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = "Bio-Pm_User-Manual.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="
      min-h-screen
      relative
      overflow-hidden
    
      px-4
      sm:px-6
      py-12
      sm:py-6
    "
    >
 

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1
            className="
           text-3xl
sm:text-4xl
md:text-5xl
lg:text-6xl
            font-bold
            leading-tight
          
          "
          >
            <span className="text-[#1f2947]">User</span>{" "}
            <span className="text-[#ff2d37] ">Documentations</span>
          </h1>

          <p
            className="
            mt-6
            text-base
            sm:text-lg
            text-[#475569]
            max-w-3xl
            mx-auto
          "
          >
            Download official user documentation for all Bio-Tech industrial
            products.
          </p>
        </div>

        {/* Table Container */}
        <div
          className="
          bg-white/90
          backdrop-blur-sm
          border
          border-[#dbe3ea]
         rounded-2xl
md:rounded-3xl
overflow-hidden
mx-2
sm:mx-0
          shadow-xl
        "
        >
          {/* Desktop Header */}
          <div
            className="
            hidden
            md:grid
            md:grid-cols-3
            bg-[#1f2947]
            text-white
            px-8
            py-5
            font-semibold
            uppercase
            tracking-wider
            text-sm
          "
          >
            <div>Product Name</div>
            <div>Description</div>
            <div className="text-right">User Manual</div>
          </div>

          {/* Rows */}
          {products.map((product, index) => (
            <div
              key={index}
             className="
  flex
  flex-col
  gap-4
  md:grid
  md:grid-cols-3
  md:gap-6
  items-left
  md:items-center
  px-4
  sm:px-6
  md:px-8
  py-5
  border-t
  border-[#e7edf2]
  first:border-t-0
  hover:bg-[#f8fbfd]
  transition-all
  duration-300
"
            >
              {/* Product Name */}
              <div className="mb-3 md:mb-0">
                <div className="md:hidden text-xs font-semibold text-[#ff2d37] uppercase mb-1">
                  Product
                </div>

                <div className="text-[#1f2947] font-bold text-lg ">
                  {product.name}
                </div>
              </div>

              {/* Description */}
              <div className="mb-5 md:mb-0">
                <div className="md:hidden text-xs font-semibold text-[#ff2d37] uppercase mb-1">
                  Description
                </div>

                <p className="text-[#475569] text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Download Button */}
<div className="flex justify-center md:justify-end">
                    {product.pdf ? (
                  <button
                    onClick={() => handleDownload(product.pdf)}
      className="
  w-full
  sm:w-full
  md:w-auto
  flex
  items-center
  justify-center
  gap-2
  px-4
  sm:px-6
  py-3
  rounded-full
  bg-[#ff2d37]
  text-white
  font-medium
  text-sm
  sm:text-base
"
                  >
                    <Download size={18} />
                    Download Manual
                  </button>
                ) : (
                  <button
                    disabled
                    className="
                    w-full
                    md:w-auto
                    px-6
                    py-3
                    rounded-full
                    bg-gray-200
                    text-gray-500
                    cursor-not-allowed
                  "
                  >
                    Coming Soon
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div
          className="
          mt-8
          text-center
          text-sm
          text-[#64748b]
        "
        >
          For older documentation versions, contact system administration.
        </div>
      </div>
    </div>
  );
};

export default UserManual;