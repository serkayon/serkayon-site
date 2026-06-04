import { motion } from "framer-motion";
import industryImg from "../assets/industrial.png";

export default function WhoWeAre() {
  const features = [
    "Early Visibility",
    "Reliable Operations",
    "Real-Time Insights",
    "Plug & Play Integration",
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-transparent py-14 sm:py-16 md:py-20 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
       className="text-center lg:text-left order-1 lg:order-1"
          >
            {/* Label */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-5">
              <div className="h-[2px] w-10 sm:w-14 bg-[#FB2C36]" />

              <span
                className="
                  uppercase
                  tracking-[0.2em]
                  sm:tracking-[0.3em]
                  text-xs
                  sm:text-sm
                  font-bold
                  text-[#FB2C36]
                "
              >
                Who We Are
              </span>
            </div>

            {/* Main Heading */}
            <h2
              className="
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                font-black
                text-[#14213D]
                leading-[1]
                mb-3
                break-words
              "
            >
              SERKAYON
            </h2>

            {/* Subtitle */}
            <h3
              className="
                text-sm
                sm:text-base
                md:text-lg
                tracking-[0.18em]
                sm:tracking-[0.25em]
                font-semibold
                text-[#FB2C36]
                mb-6
              "
            >
              INDUSTRIAL INTELLIGENCE
            </h3>

            {/* Paragraph 1 */}
            <p
              className="
                text-base
                sm:text-lg
                leading-relaxed
                text-slate-700
                mb-6
              "
            >
              <strong>
                Serkayon Industrial Intelligence Pvt. Ltd.
              </strong>{" "}
              develops practical software for industrial and bioprocess
              operations focused on early visibility and reliability.
            </p>

            {/* Paragraph 2 */}
            <p
              className="
                text-base
                sm:text-lg
                leading-relaxed
                text-slate-700
                mb-8
              "
            >
              Our systems connect in read-only mode to existing PLC and sensor
              data to detect performance drift and hidden process degradation
              before alarms occur. We deliver monitoring, reporting and
              operational intelligence platforms designed for real industrial
              environments.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="
                    flex
                    items-center
                    gap-3
                    p-4
                    rounded-2xl
                    border
                    border-red-100
                    bg-red-50/50
                    hover:shadow-lg
                    transition-all
                    duration-300
                  "
                >
                  <div className="w-3 h-3 rounded-full bg-[#FB2C36] shrink-0" />

                  <span
                    className="
                      font-medium
                      text-slate-800
                      text-sm
                      sm:text-base
                    "
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
      className="relative order-2 lg:order-2"
          >
            {/* Image Container */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[24px]
                sm:rounded-[32px]
                shadow-2xl
              "
            >
              <img
                src={industryImg}
                alt="Industrial Automation"
                className="
                  w-full
                  h-[250px]
                  sm:h-[350px]
                  md:h-[450px]
                  lg:h-[600px]
                  object-cover
                "
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#14213D]/70 via-transparent to-transparent" />
            </div>

            {/* Decorative Glow */}
            <div
              className="
                hidden lg:block
                absolute
                -top-8
                -right-8
                w-40
                h-40
                rounded-full
                bg-[#FB2C36]/10
                blur-3xl
              "
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}