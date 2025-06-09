const Blog = () => {
  return (
    <div className="flex flex-col items-center px-6 md:mx-[85px] mx-4 mt-20">
      {/* Section Title */}
      <div className="flex justify-center gap-5 mb-5">
        <span className="inline-block px-3 py-1 border border-black rounded-full text-sm font-medium text-gray-500 bg-white uppercase">
          Our Blog
        </span>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-[40px] md:text-[60px] font-semibold uppercase leading-[1em] text-[#212121]">
          Company News
        </h2>
      </div>

      {/* Blog Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 grid-rows-[285px_1fr] md:h-[600px] gap-6 md:gap-8 mb-28">
        {/* First Card */}
        <div className="bg-rider bg-cover bg-center rounded-2xl relative row-span-1 md:row-span-2">
          <div className="absolute top-10 left-10 flex gap-2">
            <button className="text-black font-barlow text-sm uppercase bg-[#bdff6a] rounded-xl px-3">
              Sports
            </button>
            <h2 className="text-white text-sm font-normal">JAN 01 2024</h2>
          </div>
          <div className="absolute bottom-10 left-10">
            <h1 className="text-white font-barlow font-semibold text-[28px] md:text-[36px] uppercase line-clamp-1">
              The Cycling Guide to senior Gravel amanda
            </h1>
          </div>
        </div>

        {/* Second Card */}
        <div className="bg-jumper bg-cover bg-center rounded-2xl relative">
          <div className="absolute top-7 left-9 flex gap-2">
            <button className="text-black font-barlow text-sm uppercase bg-[#bdff6a] rounded-xl px-3">
              Sports
            </button>
            <h2 className="text-white text-sm font-normal">JUNE 21 2026</h2>
          </div>
          <div className="absolute bottom-10 left-8">
            <h1 className="text-white font-barlow font-semibold text-[28px] md:text-[36px] uppercase line-clamp-1">
              The Cycling Guide to senior Gravel amanda
            </h1>
          </div>
        </div>

        {/* Bottom Row with Two Cards (or one column on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Third Card */}
          <div className="bg-firstPerson bg-cover bg-center rounded-2xl h-[300px] relative">
            <div className="absolute inset-0 bg-black/25 rounded-2xl" />
            <div className="absolute top-7 left-9 flex gap-2">
              <button className="text-black font-barlow text-sm uppercase bg-[#bdff6a] rounded-xl px-3">
                Sports
              </button>
              <h2 className="text-white text-sm font-normal">JULY 5 2024</h2>
            </div>
            <div className="absolute bottom-6 left-8">
              <h1 className="text-white font-barlow font-semibold text-[20px] md:text-[24px] uppercase line-clamp-1">
                The Cycling Guide to senior Gravel amanda
              </h1>
            </div>
          </div>

          {/* Fourth Card */}
          <div className="bg-secondPerson bg-cover bg-center rounded-2xl h-[300px] relative">
            <div className="absolute inset-0 bg-black/25 rounded-2xl" />
            <div className="absolute top-7 left-9 flex gap-2">
              <button className="text-black font-barlow text-sm uppercase bg-[#bdff6a] rounded-xl px-3">
                Sports
              </button>
              <h2 className="text-white text-sm font-normal">AUGUST 10 2025</h2>
            </div>
            <div className="absolute bottom-6 left-8">
              <h1 className="text-white font-barlow font-semibold text-[20px] md:text-[24px] uppercase line-clamp-1">
                The Cycling Guide to senior Gravel amanda
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
