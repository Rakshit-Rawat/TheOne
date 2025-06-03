import React from 'react';

import CurvedTextCircle from '../components/CurvedTextCircle';

const Pictures = () => {
  return (
    <div className="w-full relative min-h-[150vh] lg:h-[150vh] overflow-hidden">
      {/* Desktop Layout - Above md breakpoint */}
      <div className="hidden md:block h-full">
        {/* Container with proper responsive scaling */}
        <div className="relative w-full h-full">
          {/* Left Image - Using responsive positioning */}
          <div className="absolute top-[15%] left-0 w-[65vw] max-w-[800px]">
            <img
              src="https://cdn.shopify.com/s/files/1/0577/9675/5633/files/leo_daone_home1_image_1.jpg?v=1702967614"
              alt="Image 1"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right Image - Responsive positioning and sizing */}
          <div className="absolute top-[25%] right-[5%] w-[90vw]  min-w-[200px] max-w-[350px]">
            <img
              src="https://cdn.shopify.com/s/files/1/0577/9675/5633/files/leo_daone_home1_image_2.jpg?v=1702967614"
              alt="Image 2"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Text Component - Responsive positioning */}
          <div className="absolute top-[60%] left-[8%] z-10">
            <CurvedTextCircle />
          </div>
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