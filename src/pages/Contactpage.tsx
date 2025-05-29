import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle'
import Particles from '../components/Particles/Particles';

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    // Redirect ke WhatsApp dengan pesan yang sudah diisi
    const whatsappUrl = `https://wa.me/6283823795561?text=${encodeURIComponent(
      `Halo kak faiz saya dari plafrom FRD Official, saya ${name} (${email}).\n\nPesan saya:\n${message}`
    )}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.section
    className="relative min-h-screen flex items-center pt-20 px-4 sm:px-6 lg:px-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
          <div className="absolute inset-0 z-[-10]">
        <Particles
          particleColors={['#c6bf0c', '#c6bf0c']}
          particleCount={110}
          particleSpread={10}
          speed={0.3}
          particleBaseSize={300}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
          className="w-full h-full"
        />
      </div>
                <div className="container-custom">
                  <SectionTitle
                    title="Let's Talk"
                    subtitle="I am open to new projects, collaborations, or just brainstorming.
Contact via WhatsApp or social media at the bottom of this page."
                  />
          
          <motion.form 
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">NAME</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent transition-all"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">EMAIL</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent transition-all"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-yellow-600 hover:bg-yellow-400 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Submit
            </motion.button>
          </motion.form>
        </div>
    </motion.section>
  );
};

export default ContactPage;