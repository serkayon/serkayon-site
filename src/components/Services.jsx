import {
  Database,
  Ruler,
  Activity,
  ClipboardCheck,
  Leaf,
  Wrench,
  BarChart3,
  FileCheck,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      category: "Machine Tool",
      items: [
        {
          title: "Data Traceability",
          icon: Database,
          description:
            "Advanced production data traceability platform with real-time monitoring and analytics.",
        },
        {
          title: "Diameter Inspection",
          icon: Ruler,
          description:
            "Precision-based inspection software with automated quality validation.",
        },
        {
          title: "Energy Monitoring",
          icon: Activity,
          description:
            "Industrial energy consumption tracking and intelligent optimization.",
        },
        {
          title: "Machine Auditing",
          icon: ClipboardCheck,
          description:
            "Comprehensive machine auditing with live operational reports.",
        },
        {
          title: "Carbon Emission",
          icon: Leaf,
          description:
            "Smart carbon emission analytics and sustainability management.",
        },
        {
          title: "Predictive Maintenance",
          icon: Wrench,
          description:
            "AI-powered predictive maintenance system for industrial machinery.",
        },
      ],
    },

    {
      category: "BIO",
      items: [
        {
          title: "Energy Monitoring System",
          icon: BarChart3,
          description:
            "Live bio energy monitoring and reporting dashboard.",
        },
        {
          title: "Machine Auditing & Compliance Report",
          icon: FileCheck,
          description:
            "Automated auditing and compliance report generation system.",
        },
        {
          title: "Predictive Maintenance",
          icon: Wrench,
          description:
            "Advanced predictive maintenance with sensor-based intelligence.",
        },
        {
          title: "Carbon Emission Monitoring",
          icon: Leaf,
          description:
            "Environmental carbon emission analysis and monitoring tools.",
        },
      ],
    },
  ];

  return (
    <section
      id="services"
      className="section grid-bg py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#1F2A44] mb-16">
          Our Services
        </h2>

        {services.map((group, index) => (
          <div
            key={index}
            className={index !== 0 ? "mt-24" : ""}
          >
            {/* Category */}
            <div className="flex items-center justify-center mb-12">
              <div className="flex-1 max-w-[120px] h-[1px] bg-gray-300" />

              <h3 className="px-6 text-2xl md:text-3xl font-bold text-[#1F2A44]">
                {group.category}
              </h3>

              <div className="flex-1 max-w-[120px] h-[1px] bg-gray-300" />
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {group.items.map((item, i) => {
                const Icon = item.icon;

                return (
                  <div
                    key={i}
                    className="
                      glass
                      rounded-3xl
                      p-8
                      h-full
                      transition-all
                      duration-300
                      hover:-translate-y-2
                      hover:shadow-2xl
                      border
                      border-gray-100
                      group
                    "
                  >
                    {/* Icon */}
                    <div
                      className="
                        w-16
                        h-16
                        rounded-2xl
                        flex
                        items-center
                        justify-center
                        mb-6
                        bg-red-50
                        group-hover:scale-110
                        transition-all
                        duration-300
                      "
                    >
                      <Icon
                        size={34}
                        color="#FB2C36"
                        strokeWidth={2.2}
                      />
                    </div>

                    {/* Title */}
                    <h4 className="text-xl font-bold text-[#1F2A44] mb-4">
                      {item.title}
                    </h4>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}