const Blog = () => {
  return (
    <div className="flex flex-col items-center content-center px-[30px] mx-[85px] max-[770px]:mx-4">
      {/* Section Title */}
      <div className="flex justify-center gap-5 mb-5">
        <span className="inline-block px-[12px] py-[2px] border border-black rounded-full text-sm font-medium text-gray-500 bg-white uppercase">
          Our Blog
        </span>
      </div>

      <div className="text-center mb-[66px]">
        <h2 className="text-[60px] max-[770px]:text-[40px] font-semibold uppercase leading-[1em] text-[#212121]">
          Company News
        </h2>
      </div>

      {/* Blog Grid - Desktop: 2 columns, Mobile: 1 column 3 rows */}
      <div className="w-full grid grid-cols-[1fr_1fr] grid-rows-[285px_1fr] gap-8 h-[600px] mb-28
                      max-[770px]:grid-cols-1 max-[770px]:grid-rows-[300px_300px_300px] max-[770px]:h-auto max-[770px]:gap-6">
        
        {/* FIRST CARD - Left column on desktop, first row on mobile */}
        <div className="bg-black row-span-2 max-[770px]:row-span-1 rounded-2xl bg-rider bg-center relative">
          <div className="flex gap-2 top-10 left-10 absolute">
            <button className="text-black font-barlow text-[14px] uppercase items bg-[#bdff6a] rounded-xl px-3">
              Sports
            </button>
            <h2 className="text-white mx-1 py-[2px] font-normal text-[.91rem]">
              JAN 01 2024
            </h2>
          </div>
          <div className="absolute top-[480px] max-[770px]:top-[220px] left-10 line-clamp-1">
            <h1 className="text-white font-barlow font-semibold text-[36px] max-[770px]:text-[28px] uppercase">
              The Cycling Guide to senior Gravel amanda
            </h1>
          </div>
        </div>

        {/* SECOND CARD - Right column first row on desktop, second row on mobile */}
        <div className="bg-black rounded-2xl bg-jumper bg-no-repeat bg-center bg-cover relative">
          <div className="flex gap-2 top-7 left-9 absolute">
            <button className="text-black font-barlow text-[14px] uppercase items bg-[#bdff6a] rounded-xl px-3">
              Sports
            </button>
            <h2 className="text-white mx-1 py-[2px] font-normal text-[.91rem]">
              JUNE 21 2026
            </h2>
          </div>
          <div className="absolute top-[210px] max-[770px]:top-[220px] left-8 line-clamp-1">
            <h1 className="text-white font-barlow font-semibold text-[36px] max-[770px]:text-[28px] uppercase">
              The Cycling Guide to senior Gravel amanda
            </h1>
          </div>
        </div>

        {/* THIRD ROW - Two cards side by side on desktop, single card on mobile */}
        <div className="grid grid-cols-2 max-[770px]:grid-cols-1 gap-8 max-[770px]:gap-6">
          
          <div className="rounded-2xl bg-cover bg-center bg-firstPerson h-full max-[770px]:h-[300px] relative">
            <div className="absolute inset-0 bg-black/25 z-0 rounded-2xl" />
            <div className="flex gap-2 top-7 left-9 absolute">
              <button className="text-black font-barlow text-[14px] uppercase items bg-[#bdff6a] rounded-xl px-3">
                Sports
              </button>
              <h2 className="text-white mx-1 py-[2px] font-normal text-[.91rem]">
                JULY 5 2024
              </h2>
            </div>
            <div className="absolute top-[210px] max-[770px]:top-[220px] left-8">
              <h1 className="text-white font-barlow font-semibold text-[20px] max-[770px]:text-[24px] text-wrap uppercase">
                The Cycling Guide to senior Gravel amanda
              </h1>
            </div>
          </div>
        
          <div className="rounded-2xl bg-cover bg-center bg-secondPerson h-full max-[770px]:h-[300px] relative">
            <div className="absolute inset-0 bg-black/25 z-0 rounded-2xl" />
            <div className="flex gap-2 top-7 left-9 absolute">
              <button className="text-black font-barlow text-[14px] uppercase items bg-[#bdff6a] rounded-xl px-3">
                Sports
              </button>
              <h2 className="text-white mx-1 py-[2px] font-normal text-[.91rem]">
                AUGUST 10 2025
              </h2>
            </div>

            <div className="absolute top-[210px] max-[770px]:top-[220px] left-8">
              <h1 className="text-white font-barlow font-semibold text-[20px] max-[770px]:text-[24px] uppercase">
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