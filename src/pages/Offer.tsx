import { IconChevronRight } from "@tabler/icons-react";

const Offer = () => {
  return (
    <div className="relative bg-forest bg-cover bg-center bg-no-repeat w-full my-20 font-inter text-[#666] text-[16px] box-border
                    h-[520px] px-[30px] py-[120px] flex items-center justify-between
                    sm:h-auto sm:px-4 sm:py-8 sm:flex-col sm:gap-8">
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
      {/* Desktop and Tablet Layout (above 770px) */}
      <div className="hidden sm:flex w-full items-center justify-between relative z-10">
        {/* Card image - responsive sizing maintaining aspect ratio */}
        <div className="bg-card bg-contain bg-center bg-no-repeat rounded-[30px] shadow-lg
                        w-[550px] h-[330px] ml-40
                        lg:w-[500px] lg:h-[300px] lg:ml-32
                        md:w-[400px] md:h-[240px] md:ml-16  
                        sm:w-[350px] sm:h-[210px] sm:ml-8"></div>
        
        {/* Content container */}
        <div className="text-right max-w-md mr-60
                        lg:mr-48 lg:max-w-sm
                        md:mr-24 md:max-w-xs
                        sm:mr-8 sm:max-w-[250px]">
          <h2 className="text-white font-bold mb-4 font-barlow
                         text-4xl lg:text-3xl md:text-2xl sm:text-xl">SPECIAL OFFER</h2>
          <p className="text-gray-200 mb-8 leading-relaxed
                        text-lg lg:text-base md:text-sm sm:text-xs sm:mb-4">Don't miss out on our amazing deals and fresh selections delivered right to your door!</p>
          
          <button className="flex items-center justify-center text-lime-300 gap-2 border-[1px] px-6 py-3 border-lime-300 rounded-xl font-semibold hover:bg-lime-300 transition-all duration-300 hover:text-black ml-auto hover:shadow-lg transform hover:scale-105
                             text-[14px] lg:text-[13px] md:text-[12px] sm:text-[11px] sm:px-4 sm:py-2">
            <span className="font-barlow tracking-wide">MAKE YOUR ORDER</span>
            <IconChevronRight size={20} className="sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>

      {/* Mobile Layout (770px and below) */}
      <div className="flex sm:hidden w-full flex-col items-center gap-8 relative z-10 text-center">
        {/* Card image - centered on top */}
        <div className="bg-card bg-cover bg-center bg-no-repeat rounded-[30px] shadow-lg
                        w-[300px] h-[180px]
                        xs:w-[250px] xs:h-[150px]"></div>
        
        {/* Content container - centered */}
        <div className="max-w-sm px-4">
          <h2 className="text-white text-2xl font-bold mb-4 font-barlow
                         xs:text-xl">SPECIAL OFFER</h2>
          <p className="text-gray-200 mb-6 text-base leading-relaxed
                        xs:text-sm xs:mb-4">Don't miss out on our amazing deals and fresh selections delivered right to your door!</p>
          
          <button className="flex items-center justify-center text-lime-300 gap-2 border-[1px] px-6 py-3 border-lime-300 rounded-xl font-semibold hover:bg-lime-300 transition-all duration-300 hover:text-black text-[14px] hover:shadow-lg transform hover:scale-105 mx-auto
                             xs:px-4 xs:py-2 xs:text-[12px]">
            <span className="font-barlow tracking-wide">MAKE YOUR ORDER</span>
            <IconChevronRight size={20} className="xs:w-4 xs:h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offer;