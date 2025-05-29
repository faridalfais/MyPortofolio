import { motion } from 'framer-motion';

const RoboticPage = () => {
    return (
    <motion.section
      className="min-h-screen bg-dark text-white pt-32 pb-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      
        {/* Tambahkan ini di bagian mana pun yang Anda inginkan dalam file existing */}
<section className="bg-black-400 text-gray-400 py-16 md:py-24">
  <div className="container mx-auto px-4">
    <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
      
      {/* Bagian Teks - Kiri */}
      <div className="lg:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">
          coming soon
        </h2>
        <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-300">
          project is under construction
        </h3>
        <p className="mb-6 text-gray-200 leading-relaxed">
          Still learning about real-time communication between devices, use of additional sensors, and more stable multi-servo control.
          Also exploring how AI can be embedded locally in the device
        </p>
      </div>
    

      {/* Bagian Video - Kanan */}
      <div className="lg:w-1/2">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed/your-video-id"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-lg shadow-lg"
          ></iframe>
        </div>
        </div>
      </div>
      </div>
    </section>
    {/* Section Video - sebelumnya udah ada */}
{/* Section Card Project - Tambahkan di bawah video */}
<section className="py-16 bg-dark text-white">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-yellow-400">
      Robotic Projects
    </h2>
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      
      {/* Project 1 */}
      <div className="bg-black rounded-lg shadow-lg overflow-hidden hover:shadow-yellow-500/30 transition-all duration-300">
        <img src="/path/to/ecommerce-image.jpg" alt="coming soon" className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-white">coming soon</h3>
          <p className="text-gray-300">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."</p>
        </div>
      </div>

      {/* Project 2 */}
      <div className="bg-black rounded-lg shadow-lg overflow-hidden hover:shadow-yellow-500/30 transition-all duration-300">
        <img src="/path/to/task-app-image.jpg" alt="coming soon" className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-white">coming soon</h3>
          <p className="text-gray-300">"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
        </div>
      </div>

      {/* Project 3 */}
      <div className="bg-black rounded-lg shadow-lg overflow-hidden hover:shadow-yellow-500/30 transition-all duration-300">
        <img src="/path/to/weather-dashboard-image.jpg" alt="coming soon" className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-white">coming soon</h3>
          <p className="text-gray-300">"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</p>
        </div>
      </div>

    </div>
  </div>
</section>
    </motion.section>
  );
};

export default RoboticPage;