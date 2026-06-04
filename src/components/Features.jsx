  import { motion } from "framer-motion";

  const Features = ({ title = "Key Capabilities", features = [] }) => {
    return (
    <section className="py-20 px-4 md:py-24 md:px-6 relative overflow-hidden bg-transparent">
      {/* Grid Background */}
      {/* <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(148,163,184,0.18) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(148,163,184,0.18) 1px, transparent 1px)
          `,
          backgroundSize: "75px 75px",
        }}
      /> */}

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="           text-3xl
sm:text-4xl
md:text-5xl
lg:text-6xl font-bold text-center mb-32 text-[#1F2A44]"
        >
          {title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-28 place-items-center">
          {features.map((feature, index) => {
          const colIndex = index % 3;

const isLaptop =
  typeof window !== "undefined" &&
  window.innerWidth >= 1280;

const isDown =
  isLaptop &&
  (colIndex === 0 || colIndex === 2);
            const IconComponent = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
   whileInView={{
  opacity: 1,
  y: 0,
}}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: colIndex * 0.1,
                }}
                className={`
                  relative
                  w-full
                  max-w-[360px]
                  min-h-[340px]
                  bg-white
                  border
                  border-slate-200
                  rounded-[32px]
                  flex
                  flex-col
                  items-center
                  text-center
                  px-8
                  pt-20
                  pb-10
                  shadow-[0_10px_40px_rgba(15,23,42,0.08)]
                  hover:shadow-[0_25px_70px_rgba(251,44,54,0.18)]
                  hover:-translate-y-3
                  transition-all
                  duration-500
                  group
                  ${
  colIndex === 0 || colIndex === 2
    ? "xl:mt-10"
    : "xl:-mt-10"
}
                `}
              >
                {/* Icon Circle */}
                <div
                  className="
                    absolute
                    -top-12
                    w-24
                    h-24
                    rounded-full
                    bg-gradient-to-br
                    from-[#FB2C36]
                    to-[#ff5962]
                    flex
                    items-center
                    justify-center
                    shadow-[0_15px_35px_rgba(251,44,54,0.35)]
                    group-hover:scale-110
                    transition-all
                    duration-500
                  "
                >
                  <div className="text-white">
                    {IconComponent && (
                      <IconComponent
                        size={42}
                        strokeWidth={1.8}
                      />
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="
                    text-2xl
                    font-bold
                    mb-5
                    text-[#1F2A44]
                    leading-tight
                    transition-colors
                    duration-300
                    group-hover:text-[#FB2C36]
                  "
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    text-slate-600
                    text-[16px]
                    leading-relaxed
                    font-medium
                  "
                >
                  {feature.description}
                </p>

                {/* Bottom Link */}
                <div
                  className="mt-auto pt-10"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  <span
                    className="
                      text-[11px]
                      font-black
                      tracking-[0.35em]
                      text-[#FB2C36]
                      uppercase
                      border-b
                      border-[#FB2C36]
                      pb-1
                      hover:opacity-70
                      transition-all
                      cursor-pointer
                    "
                  >
                    Explore Details
                  </span>
                </div>

                {/* Decorative Glow */}
                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    h-1
                    rounded-b-[32px]
                    bg-gradient-to-r
                    from-transparent
                    via-[#FB2C36]
                    to-transparent
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-500
                  "
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
  };

  export default Features;
