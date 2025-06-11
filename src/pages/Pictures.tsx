import CurvedTextCircle from "../components/CurvedTextCircle";

const Pictures = () => {
  return (
    <div className="w-full relative min-h-[150vh] lg:h-[150vh] overflow-hidden bg-white">
      {/* Desktop Layout */}
      <div className="hidden md:block h-full">
        <div className="relative w-full h-full flex justify-between items-center">
          {/* Left Column */}
          <figure className="w-1/2 flex flex-col justify-center items-center p-4">
            <img
              src="https://cdn.shopify.com/s/files/1/0577/9675/5633/files/leo_daone_home1_image_1.jpg?v=1702967614"
              alt="Man wearing outdoor jacket standing on rocky mountain cliff"
              className="w-full h-auto object-cover rounded-lg"
              loading="lazy"
            />
            <figcaption className="w-full flex justify-center mt-4">
              <CurvedTextCircle
                text="TRUSTED BRAND SINCE 1990"
                speed={3}
                radius={110}
                fontSize={26}
                letterSpacing={10}
                wordSpacing={40}
                aria-label="Trusted brand since 1990"
              />
            </figcaption>
          </figure>

          {/* Right Column */}
          <figure className="w-1/2 flex justify-center items-center p-4">
            <img
              src="https://cdn.shopify.com/s/files/1/0577/9675/5633/files/leo_daone_home1_image_2.jpg?v=1702967614"
              alt="Close-up of high-quality outdoor jacket fabric with snow background"
              className="w-full h-auto object-cover rounded-lg"
              loading="lazy"
            />
          </figure>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="block md:hidden px-4 py-8 space-y-8">
        <figure>
          <img
            src="https://cdn.shopify.com/s/files/1/0577/9675/5633/files/leo_daone_home1_image_1.jpg?v=1702967614"
            alt="Man wearing outdoor jacket standing on rocky mountain cliff"
            className="w-full h-auto object-cover rounded-lg"
            loading="lazy"
          />
        </figure>
        <figure>
          <img
            src="https://cdn.shopify.com/s/files/1/0577/9675/5633/files/leo_daone_home1_image_2.jpg?v=1702967614"
            alt="Close-up of high-quality outdoor jacket fabric with snow background"
            className="w-full h-auto object-cover rounded-lg"
            loading="lazy"
          />
        </figure>
        <div className="w-full flex justify-center" aria-label="Brand trusted since 1990">
          <CurvedTextCircle
            text="TRUSTED BRAND SINCE 1990"
            speed={3}
            radius={110}
            fontSize={26}
            letterSpacing={10}
            wordSpacing={40}
            aria-hidden="true" // if decorative
          />
        </div>
      </div>
    </div>
  );
};

export default Pictures;
