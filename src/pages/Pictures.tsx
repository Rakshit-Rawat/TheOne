import CurvedTextCircle from "../components/CurvedTextCircle";

const Pictures = () => {
  return (
    <div className="w-full relative min-h-[150vh] lg:h-[150vh] overflow-hidden bg-white">
      {/* Desktop Layout */}
      <div className="hidden md:block h-full">
        <div className="relative w-full h-full flex justify-between items-center">
          {/* Left Column */}
          <div className="w-1/2 flex flex-col justify-center items-center p-4">
            <div className="w-full relative">
              <img
                src="https://cdn.shopify.com/s/files/1/0577/9675/5633/files/leo_daone_home1_image_1.jpg?v=1702967614"
                alt="Image 1"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="w-full flex justify-center">
              <CurvedTextCircle
                text="TRUSTED BRAND SINCE 1990"
                speed={3}
                radius={110}
                fontSize={26}
                letterSpacing={10}
                wordSpacing={40}
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="w-1/2 flex justify-center items-center p-4">
            <img
              src="https://cdn.shopify.com/s/files/1/0577/9675/5633/files/leo_daone_home1_image_2.jpg?v=1702967614"
              alt="Image 2"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="block md:hidden px-4 py-8 space-y-8">
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0577/9675/5633/files/leo_daone_home1_image_1.jpg?v=1702967614"
            alt="Image 1"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0577/9675/5633/files/leo_daone_home1_image_2.jpg?v=1702967614"
            alt="Image 2"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div className="w-full flex justify-center">
          <CurvedTextCircle
            text="TRUSTED BRAND SINCE 1990"
            speed={3}
            radius={110}
            fontSize={26}
            letterSpacing={10}
            wordSpacing={40}
          />
        </div>
      </div>
    </div>
  );
};

export default Pictures;
