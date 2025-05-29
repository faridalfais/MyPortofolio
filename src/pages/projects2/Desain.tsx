import React from "react";
import { motion } from "framer-motion";


const Desain: React.FC = () => {
  const projects = [
    {
      title: "Initial Design Stage",
      description:
        "This image shows the main view of the vise assembly in two dimensions (2D) that includes several viewpoints: top view, side view, and front view. Accompanied by a parts list that explains the component names, quantities, and materials used. This image serves as the main reference in the product design stage, providing an overview of the structure and relationships between the components of the vise as a whole.",
      image: "/Images/lanscape2.jpeg",
      tech: [""],
    },
    {
      title: "Detail Design Stage",
      description:
        "The second image provides a detailed view of each vise part separately, complete with precise dimensions, section views, and different scales to highlight critical features of each component. These images are used in the fabrication phase to ensure each part can be manufactured to exact specifications.",
      image: "/Images/lanscape.jpeg",
      tech: [""],
    },
    {
      title: "Assembly & Animation Stage",
      description:
        "The last image is an exploded view, showing the arrangement of the vise components when separated. This image serves to explain the assembly process and is very useful in assembly animation or 3D visual documentation. The position of each part is visualized logically to facilitate the assembly and maintenance process.",
      image: "/Images/lanscape3.jpeg",
      tech: [""],
    },
  ];

  return (
    <>
      {/* SECTION 1: Intro + Video */}
      <motion.section
        className="min-h-screen bg-black text-white pt-32 pb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <section className="text-gray-400 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
              {/* Text Content */}
              <div className="lg:w-1/2">
                <h3 className="text-xl md:text-2xl font-semibold mb-6 text-yellow-500">
                  3D Visualization Stage
                </h3>
                <p className="mb-6 text-gray-200 leading-relaxed">
                This animated video shows the assembly process and how a vise works in 3D. Each component is shown separately (exploded view), 
                then reassembled sequentially. The animation also shows how the clamping part moves when the handle is turned, thus explaining the function of the vise in clamping the workpiece.
                With views from various angles, this animation makes it easy to understand the design and is perfect for presentations, documentation, and engineering portfolios.
                </p>
              </div>

              {/* Video Content */}
              <div className="lg:w-1/2 w-full aspect-video bg-gray-800 rounded-lg overflow-hidden mt-8 lg:mt-0">
                <video
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                  controls
                  preload="metadata"
                >
                  <source src="/assets/media/drafter.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>
      </motion.section>

      {/* SECTION 2: Project Cards */}
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
            <div
                key={index}
                className="bg-black-900 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
                <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
                />
                <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                </h3>
                <p className="text-sm text-gray-200 mb-4">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                    <span
                        key={i}
                        className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full"
                    >
                        {tech}
                    </span>
                    ))}
                </div>
                </div>
            </div>
            ))}
        </div>
        </div>
    </section>
    </>
);
};

export default Desain;
