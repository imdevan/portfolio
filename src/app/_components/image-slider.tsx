"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback, JSX } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "react-feather";
import cn from "classnames";

const CLOUD_URL = "https://res.cloudinary.com/bisonstudio/image/upload/";

type Props = {
  slides: string[];
  cloud?: boolean;
  portrait?: boolean;
};

const ImageSlider = ({ slides, cloud = true, portrait = false }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right"); // 'right' or 'left'
  const [loadedImages, setLoadedImages] = useState<Array<JSX.Element>>([]);
  const defaultSlide = cloud ? CLOUD_URL + slides[0] : slides[0];

  // Update image components on slides or direction change
  useEffect(() => {
    const imgs = slides.map((slide, index) => (
      <motion.div
        key={slide}
        className="absolute inset-0"
        initial={{ x: direction === "right" ? 1000 : -1000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: direction === "right" ? -1000 : 1000, opacity: 0 }}
        transition={{ duration: 0.5, type: "tween" }}
      >
        <Image
          src={cloud ? CLOUD_URL + slide : slide}
          alt={`Slide ${index + 1}`}
          layout="fill"
          objectFit="contain"
          priority={index === 0} // Prioritize the first image
        />
      </motion.div>
    ));
    setLoadedImages(imgs);
  }, [slides, cloud, direction]); // Depend on direction to recreate motion components on change

  // Combined function to update direction first then index
  const updateSlide = useCallback(
    (newDirection: "right" | "left") => {
      setDirection(newDirection); // Set the direction first
      setCurrentIndex((prevIndex) => {
        // Then update index based on the direction
        if (newDirection === "right") {
          return (prevIndex + 1) % slides.length;
        } else {
          return prevIndex === 0 ? slides.length - 1 : prevIndex - 1;
        }
      });
    },
    [slides.length]
  );

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        portrait ? " h-96 md:h-[720px]" : "w-full h-48 md:h-[405px]"
      )}
    >
      {/* Hidden preloader for all images */}
      <div style={{ display: "none" }}>
        {slides.map((slide, index) => (
          <Image
            key={`preload-${index}`}
            src={cloud ? CLOUD_URL + slide : slide}
            alt={`Preload slide ${index + 1}`}
            layout="fill"
            objectFit="contain"
            priority={true} // force eager loading
          />
        ))}
      </div>

      <AnimatePresence initial={false}>
        {loadedImages.length > 0 ? (
          loadedImages[currentIndex ?? 0]
        ) : (
          <motion.div
            key={defaultSlide}
            className="absolute inset-0"
            initial={{ x: direction === "right" ? 1000 : -1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction === "right" ? -1000 : 1000, opacity: 0 }}
            transition={{ duration: 0.5, type: "tween" }}
          >
            <Image
              src={defaultSlide}
              alt={`Slide 1`}
              layout="fill"
              objectFit="contain"
              // placeholder="blur" // TODO: add blurred placeholder for images?
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={() => updateSlide("left")}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full"
        aria-label="Previous slide"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={() => updateSlide("right")}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full"
        aria-label="Next slide"
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default ImageSlider;
