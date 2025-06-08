import CurvedTextCircle from "../components/CurvedTextCircle";

const Pictures = () => {
  return (
    <div className="w-full relative min-h-[150vh] lg:h-[150vh] overflow-hidden">
      {/* Desktop Layout - Above md breakpoint */}
      <div className="hidden md:block h-full">
        {/* Container with proper responsive scaling */}
        <div className="relative w-full h-full">
          {/* Left Image - Using responsive positioning with scaling */}
          <div
            className="absolute top-[15%] left-0
                          w-[40vw] md:w-[46vw] lg:w-[45vw] xl:w-[48vw]
                          min-w-[200px] md:min-w-[300px] lg:min-w-[300px]
                          max-w-[500px] md:max-w-[580px] lg:max-w-[800px]"
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0577/9675/5633/files/leo_daone_home1_image_1.jpg?v=1702967614"
              alt="Image 1"
              className="w-full h-auto object-cover"
            />
             <div
            className="absolute  left-[15%] z-10
                          scale-75 md:scale-90 lg:scale-100 xl:scale-110
                         origin-left"
          >
            <CurvedTextCircle />
          </div>
          </div>

          {/* Right Image - Responsive positioning and sizing with scaling */}
          <div
            className="absolute top-[25%] right-[5%]
                          w-[25vw] md:w-[28vw] lg:w-[32vw] xl:w-[35vw]
                          min-w-[150px] md:min-w-[180px] lg:min-w-[200px]
                          max-w-[280px] md:max-w-[320px] lg:max-w-[590px]"
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0577/9675/5633/files/leo_daone_home1_image_2.jpg?v=1702967614"
              alt="Image 2"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Text Component - Responsive positioning with scaling */}
         
        </div>
      </div>

      {/* Mobile Layout - md breakpoint and below */}
      <div className="block md:hidden px-4 py-8 space-y-8">
        {/* First Image */}
        <div className="w-full">
          <img
            src="https://cdn.shopify.com/s/files/1/0577/9675/5633/files/leo_daone_home1_image_1.jpg?v=1702967614"
            alt="Image 1"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Second Image */}
        <div className="w-full">
          <img
            src="https://cdn.shopify.com/s/files/1/0577/9675/5633/files/leo_daone_home1_image_2.jpg?v=1702967614"
            alt="Image 2"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Text Component */}
        <div className="w-full flex justify-center">
          <CurvedTextCircle />
        </div>
      </div>
    </div>
  );
};

export default Pictures;
