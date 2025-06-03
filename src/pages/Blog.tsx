const Blog = () => {
  return (
    <div className=" flex flex-col items-center content-center  px-[30px] mx-[85px] ">
      {/* Section Title */}
      <div className="flex justify-center gap-5 mb-5">
        <span className="inline-block px-[12px]  py-[2px] border border-black rounded-full text-sm font-medium text-gray-500 bg-white uppercase">
          Our Blog
        </span>
      </div>

      <div className="text-center mb-[66px] ">
        <h2 className="text-[60px] font-semibold uppercase leading-[1em] text-[#212121] ">
          Company News
        </h2>
      </div>

      {/* Blog Grid */}
      <div className="w-full grid grid-cols-[585px_1fr] grid-rows-[285px_1fr] gap-8 h-[600px] mb-28">
        {/* LEFT COLUMN - Tall card, spans 2 rows */}
        <div className="bg-black  row-span-2 rounded-2xl bg-rider bg-center relative ">
          <div className="flex gap-2 top-10 left-10 absolute">
            <button className="text-black font-barlow text-[14px] uppercase items  bg-[#bdff6a] rounded-xl px-3  ">
              Sports
            </button>
            <h2 className="text-white mx-1 py-[2px] font-normal text-[.91rem] ">
              JAN 01 2024
            </h2>
          </div>
          <div className="absolute  top-[480px] left-10 line-clamp-1">
            <h1 className="text-white font-barlow font-semibold text-[36px] uppercase">
              The Cycling Guide to senior Gravel amanda
            </h1>
          </div>
        </div>

        {/* RIGHT COLUMN, FIRST ROW */}
        <div className="bg-black rounded-2xl bg-jumper bg-no-repeat bg-center bg-cover relative">
          <div className="flex gap-2 top-7 left-9 absolute">
            <button className="text-black font-barlow text-[14px] uppercase items  bg-[#bdff6a] rounded-xl px-3  ">
              Sports
            </button>
            <h2 className="text-white mx-1 py-[2px] font-normal text-[.91rem] ">
              JUNE 21 2026
            </h2>
          </div>
          <div className="absolute  top-[210px] left-8 line-clamp-1">
            <h1 className="text-white font-barlow font-semibold text-[36px] uppercase">
              The Cycling Guide to senior Gravel amanda
            </h1>
          </div>
        </div>

        {/* RIGHT COLUMN, SECOND ROW  */}

        <div className="grid grid-cols-2 gap-8 ">

          <div className=" rounded-2xl bg-cover bg-center bg-firstPerson h-full relative">
            <div className="absolute inset-0 bg-black/25 z-0 rounded-2xl" />
            <div className="flex gap-2 top-7 left-9 absolute">
              <button className="text-black font-barlow text-[14px] uppercase items  bg-[#bdff6a] rounded-xl px-3  ">
                Sports
              </button>
              <h2 className="text-white mx-1 py-[2px] font-normal text-[.91rem] ">
                JULY 5 2024
              </h2>
            </div>
            <div className="absolute  top-[210px] left-8 ">
              <h1 className="text-white font-barlow font-semibold text-[20px] text-wrap uppercase">
                The Cycling Guide to senior Gravel amanda
              </h1>
            </div>
          </div>
        
          <div className=" rounded-2xl bg-cover bg-center bg-secondPerson h-full relative">
             <div className="absolute inset-0 bg-black/25 z-0 rounded-2xl" />
            <div className="flex gap-2 top-7 left-9 absolute">
              <button className="text-black font-barlow text-[14px] uppercase items  bg-[#bdff6a] rounded-xl px-3  ">
                Sports
              </button>
              <h2 className="text-white mx-1 py-[2px] font-normal text-[.91rem] ">
                AUGUST 10 2025
              </h2>
            </div>

            <div className="absolute  top-[210px] left-8 ">
              <h1 className="text-white font-barlow font-semibold text-[20px] uppercase">
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
