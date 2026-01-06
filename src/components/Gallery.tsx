import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Gallery = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { src: "/images/img-1.jpg", alt: t.galleryDescriptions[0] },
    { src: "/images/img-2.jpg", alt: t.galleryDescriptions[1] },
    { src: "/images/img-3.jpg", alt: t.galleryDescriptions[2] },
    { src: "/images/img-4.jpg", alt: t.galleryDescriptions[3] },
    { src: "/images/img-5.jpg", alt: t.galleryDescriptions[4] },
    { src: "/images/img-6.jpg", alt: t.galleryDescriptions[5] },
    { src: "/images/img-7.jpg", alt: t.galleryDescriptions[6] },
    { src: "/images/img-8.jpg", alt: t.galleryDescriptions[7] },
    { src: "/images/img-9.jpg", alt: t.galleryDescriptions[8] },
    { src: "/images/img-10.jpg", alt: t.galleryDescriptions[9] },
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="galerie" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary font-semibold">
            {t.gallery.label}
          </span>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl">
            {t.gallery.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.gallery.description}
          </p>
        </motion.div>

        <div className="mx-auto max-w-5xl">
          {/* Main slider */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative mb-8"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-medium">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="h-full w-full object-cover"
                />
              </AnimatePresence>

              {/* Image description overlay */}
              <div className="absolute inset-0 flex items-end">
                <div className="w-full bg-gradient-to-t from-foreground/80 via-transparent to-transparent p-6">
                  <p className="text-white font-serif text-xl font-semibold">
                    {images[currentIndex].alt}
                  </p>
                </div>
              </div>

              {/* Navigation buttons */}
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white hover:bg-white/30 transition-colors backdrop-blur-sm"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white hover:bg-white/30 transition-colors backdrop-blur-sm"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Slide counter */}
              <div className="absolute bottom-6 right-6 rounded-full bg-white/20 px-4 py-2 text-white text-sm font-medium backdrop-blur-sm">
                {currentIndex + 1} / {images.length}
              </div>
            </div>
          </motion.div>

          {/* Thumbnail slider */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="flex gap-3 overflow-x-auto pb-2 px-1">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => handleThumbnailClick(index)}
                  className={`flex-shrink-0 h-20 w-24 rounded-lg overflow-hidden transition-all ${
                    currentIndex === index
                      ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
