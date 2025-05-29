import { X } from 'lucide-react';
import { useState } from 'react';

const FrontPage = [
  {
    id: 1,
    src: "/Images/Mie_Ayam.png",
    alt: "website Mie Ayam Bang Jo",
    caption: "Landing page Mie Ayam ",
  },
  {
    id: 2,
    src: "/Images/Mountain.png",
    alt: "Climbing community",
    caption: "Mountain seekers ID"
  },
  {
    id: 3,
    src: "/Images/Raya.png",
    alt: "Raya studio photographer",
    caption: "Website studio photographer"
  },
  {
    id: 4,
    src: "/Images/Education.png",
    alt: "Education Website",
    caption: "EducRead Politic Website"
  },
  {
    id: 5,
    src: "/Images/Coffe.png",
    alt: "Brew nest Coffee Shop",
    caption: "CoffeShop Website"
  },
  {
    id: 6,
    src: "/Images/Villa.png",
    alt: "Alpenglow Retreat Villa",
    caption: "accommodation website"
  }
];

const Front: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openModal = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const currentImage = FrontPage.find(img => img.id === selectedImage);

  return (
    <>
      {/* Galeri Section */}
      <section className="pt-24 pb-12 px-4 bg-black text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">project front-end</h2>
            <p>
              I am still exploring more about interactive animation, performance optimization,{" "}
              <span className="underline decoration-yellow-400">and implementing state management like Redux.</span>Some UI layouts are still in the improvisation stage to be more optimal for the user experience.?
            </p>
          <p className="text-gray-400 text-base sm:text-lg mb-10">
            some projects i've been working on lately
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FrontPage.map((image) => (
              <div
                key={image.id}
                className="overflow-hidden rounded-2xl shadow-lg bg-white/10 backdrop-blur-lg border border-white/20 cursor-pointer transition-transform transform hover:scale-105 hover:shadow-xl"
                onClick={() => openModal(image.id)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                />
                <div className="p-3 bg-amber-50">
                  <p className="text-center font-medium text-gray-800">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedImage !== null && currentImage && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-5xl w-full max-h-full bg-background rounded-lg overflow-hidden">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white bg-red-500 hover:bg-red-700 transition-colors rounded-full p-2 shadow-md"
              >
                <X size={20} />
              </button>
              <div className="p-4 overflow-y-auto max-h-[calc(100vh-64px)]">
                <img
                  src={currentImage.src}
                  alt={currentImage.alt}
                  className="w-full h-auto object-contain mx-auto rounded-lg"
                />
                <p className="text-white text-center mt-4 text-xl font-semibold italic tracking-wide">
                  {currentImage.caption}
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Front;
