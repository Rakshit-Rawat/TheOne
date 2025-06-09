import {  useRef,  } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { motion, useInView } from "motion/react";

const Category = () => {
  const slides = [
    {
      id: 1,
      type: "category",
      title: "TOP SUMMER\nCYCLING PICKS.",
      categories: ["BLADDER", "TSHIRT", "GEARS", "ACCESSORIES"],
      bgColor: "bg-lime-400",
      textColor: "text-black",
    },
    {
      id: 2,
      type: "image",
      title: "SKIING",
      image:
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      bgColor: "bg-black/40",
      textColor: "text-white",
    },
    {
      id: 3,
      type: "image",
      title: "RUNNING",
      image:
        "https://images.unsplash.com/photo-1547483238-f400e65ccd56?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bgColor: "bg-black/40",
      textColor: "text-white",
    },
    {
      id: 4,
      type: "image",
      title: "CYCLING",
      image:
        "https://plus.unsplash.com/premium_photo-1713184149461-69b0abeb3daa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q3ljbGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      bgColor: "bg-black/40",
      textColor: "text-white",
    },
  ];

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 3.2,
      spacing: 20,
    },
    loop: true,
    drag: true,
  });
  // const [isInView, setIsInView] = useState(false);

  const sectionRef = useRef<HTMLElement | null>(null);
  const sectionInView = useInView(sectionRef, { once: true ,  margin: "0px 100px -600px 0px"});



  return (
    <motion.section
      ref={sectionRef}
      style={{ height: "100vh"}}
      initial={{ x: "100%" }} // Start off-screen at 200%
      animate={{ x: sectionInView ? "0%" : "100%" }} // Animate when in view
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 25,
      }}
      className="w-full overflow-hidden bg-gray-50 py-10"
    >
      <div className="px-6">
        <div ref={sliderRef} className="keen-slider">
          {slides.map((slide, index) => (
            <div key={slide.id + index} className="keen-slider__slide">
              <div
                className={`group relative min-h-[500px] lg:min-h-[600px] rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-transform hover:scale-[1.02] ${slide.bgColor}`}
                style={{
                  backgroundImage: slide.image ? `url(${slide.image})` : "none",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {slide.image && (
                  <div className="absolute inset-0 bg-black/20" />
                )}

                <div className="relative z-10 h-full flex flex-col justify-between p-6">
                  {/* Title - positioned at top for category card, bottom for image cards */}
                  {slide.type === "category" ? (
                    <div className="flex-1 flex items-start pt-4">
                      <div>
                        <div className="text-5xl font-extrabold text-orange-500 mb-10 tracking-wider">
                          CATEGORY
                        </div>
                        <h2 className="text-3xl font-black text-black leading-tight whitespace-pre-line">
                          {slide.title}
                        </h2>
                      </div>
                    </div>
                  ) : (
                    <div className="flex-1" />
                  )}

                  {/* Categories for first card */}
                  {slide.categories && (
                    <div className="space-y-3 mt-20 ">
                      <div className="grid grid-cols-2 gap-4 ">
                        {slide.categories.map((cat, idx) => (
                          <button
                            key={idx}
                            className=" px-4 py-2 border border-black/20 rounded-full text-lg font-barlow text-black bg-white/10  hover:bg-white/20 transition-colors"
                          >
                            {cat}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Title for image cards - positioned at bottom */}
                  {slide.type === "image" && (
                    <div className="mt-[480px] ">
                      <div className="inline-block">
                        <h2 className="text-7xl font-black -tracking-tighter relative">
                          {/* Hollow outline version - visible by default */}
                          <span
                            className="text-transparent transition-opacity duration-300 group-hover:opacity-0"
                            style={{
                              WebkitTextStroke: "1px white",
                              WebkitTextFillColor: "transparent",
                            }}
                          >
                            {slide.title}
                          </span>
                          {/* Filled version - only visible on hover */}
                          <span className="absolute inset-0 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {slide.title}
                          </span>
                        </h2>
                        <div className="w-0 h-1 bg-lime-300 mt-2 transition-all duration-300 group-hover:w-full"></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Category;
