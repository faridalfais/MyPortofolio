import React from "react";
import { BubbleChat } from "flowise-embed-react";
import DenseTable from "../../components/DenseTable";
import { motion } from "framer-motion";

const Aipage: React.FC = () => {
  return (
    <>
      <motion.section
        className="min-h-screen bg-dark text-white pt-32 pb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Bagian Hero / Intro */}
        <section className="bg-black-400 text-gray-400 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
              {/* Bagian Teks - Kiri */}
              <div className="lg:w-1/2">
                <h2 className="text-2xl md:text-2xl font-bold mb-4 text-yellow-400">
                  artificial intelligence project
                </h2>
                <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-300">
                Ai Automation and Custom Chatbot
                </h3>
                <p className="mb-6 text-gray-200 leading-relaxed">
                developing a simple chatbot using no-code platforms like Flowise and N8N. This chatbot is designed to automatically answer customer questions on a website or app,
                without the need for complex coding. The main focus of this project is to create a reliable virtual assistant for customer service, auto-responders, and basic interactions,
                especially for SMEs or personal brands who want to stay active without having to be online all the time.
                </p>
                <p className="md-6 text-gray-200 leading-relaxed">
                If you are interested in trying out the chatbot in the bottom right corner, you can follow the steps below.
                </p>
              </div>

              {/* Bagian Table - Kanan */}
              <div className="lg:w-1/2 w-full bg-black rounded-lg overflow-hidden mt-8 lg:mt-0">
                <DenseTable />
              </div>
            </div>
          </div>
        </section>

        {/* Bagian Supply Chain */}
        <motion.section
          className="bg-black py-16 md:py-20 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-10">
            {/* Gambar Kiri */}
            <div className="lg:w-1/2">
              <img
                src="./Images/Data.png"
                alt="Wiring Process"
                className="rounded-lg w-full object-cover"
              />
            </div>

            {/* Teks Kanan */}
            <div className="lg:w-1/2 space-y-5">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                You can ask this to get the exact answer as in the table.
              </h2>
              <ul className="list-disc ml-5 text-gray-300 space-y-2">
                <li>
                  <span className="text-yellow-500">1.</span> in
                  Hello! I'm interested in the Smartwatch Zeta. How much does one unit cost? 
                </li>
                <li>
                  <span className="text-yellow-500">2.</span> in
                  How many Smartwatch Zeta units are still in your stock? 
                </li>
                <li>
                  <span className="text-yellow-500">3.</span> &
                  In which city is the Smartwatch Zeta distributed? 
                </li>
                <li>
                  <span className="text-yellow-500">4.</span> in
                  How many Nova Air Laptops are currently in stock? 
                </li>
                <li>
                  <span className="text-yellow-500">5.</span>{" "}
                  Where is the Nova Air Laptop distributed? 
                </li>
                <li>
                  <span className="text-yellow-500">6.</span>{" "}
                  How many units of Wireless Earbuds Max do you have in stock?
                </li>
                <li>
                  <span className="text-yellow-500">7.</span>{" "}
                  In which city are the Wireless Earbuds Max available?
                </li>
                <li>
                  <span className="text-yellow-500">8.</span>{" "}
                  For the S9 Mini Tablet, how many units have been sold? 
                </li>
              </ul>
              <p className="text-gray-400">Don't worry, you can ask further questions regarding the data table above.</p>
            </div>
          </div>

          {/* Gambar Bawah */}
          <div className="mt-12 px-6 max-w-6xl mx-auto">
            <img
              src="./Images/Flowise.png"
              alt="Connector Assembly"
              className="rounded-lg w-full object-cover"
            />
          </div>
        </motion.section>
      </motion.section>

      {/* Chatbot */}
      <BubbleChat
        chatflowid="73dc118a-8291-4def-9e31-e172f978c1b6"
        apiHost="https://cloud.flowiseai.com"
        chatflowConfig={{}}
        theme={{
          button: {
            backgroundColor: "#c6bf0c",
            iconColor: "white",
          },
          chatWindow: {
            welcomeMessage: "Hi, I'm Farid's assistant, how can I help you?",
            backgroundColor: "#ffffff",
          },
        }}
      />
    </>
  );
};

export default Aipage;
