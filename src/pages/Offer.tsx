import { IconChevronRight } from "@tabler/icons-react";

const Offer = () => {
  return (
    <div className="relative bg-forest bg-cover bg-center bg-no-repeat w-full h-[520px] my-20 px-[30px] py-[120px] font-inter text-[#666] text-[16px] box-border flex items-center justify-between">
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
      {/* Card image - positioned properly */}
      <div className="bg-card bg-cover bg-center bg-no-repeat w-[550px] h-[330px] rounded-[30px] shadow-lg z-10 relative ml-40"></div>
      
      {/* Content container */}
      <div className="relative z-20 text-right max-w-md mr-60">
        <h2 className="text-white text-4xl font-bold mb-4 font-barlow">SPECIAL OFFER</h2>
        <p className="text-gray-200 mb-8 text-lg leading-relaxed">Don't miss out on our amazing deals and fresh selections delivered right to your door!</p>
        
        <button className="flex items-center justify-center text-lime-300 gap-2 border-[1px] px-6 py-3 border-lime-300 rounded-xl font-semibold hover:bg-lime-300 transition-all duration-300 hover:text-black text-[14px] ml-auto hover:shadow-lg transform hover:scale-105">
          <span className="font-barlow tracking-wide">MAKE YOUR ORDER</span>
          <IconChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Offer;