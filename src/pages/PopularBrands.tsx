import React from "react";

type Brands = {
  id: number;
  src: string;
  name: string;
  quantity: number;
};

const brands: Brands[] = [
  {
    id: 1,
    src: "https://cdn.shopify.com/s/files/1/0577/9675/5633/files/leo_daone_home1_brand_1.png?v=1702978926",
    name: "etisalat",
    quantity: 22,
  },
  {
    id: 2,
    src: "https://cdn.shopify.com/s/files/1/0577/9675/5633/files/leo_daone_home1_brand_2.png?v=1702978926",
    name: "acer",
    quantity: 19,
  },
  {
    id: 3,
    src: "https://cdn.shopify.com/s/files/1/0577/9675/5633/files/leo_daone_home1_brand_3.png?v=1702978926",
    name: "aol",
    quantity: 92,
  },
  {
    id: 4,
    src: "https://cdn.shopify.com/s/files/1/0577/9675/5633/files/leo_daone_home1_brand_4.png?v=1702978926",
    name: "bbc",
    quantity: 31,
  },
  {
    id: 5,
    src: "https://cdn.shopify.com/s/files/1/0577/9675/5633/files/leo_daone_home1_brand_5.png?v=1702978926",
    name: "buzzfeed",
    quantity: 26,
  },
  {
    id: 6,
    src: "https://cdn.shopify.com/s/files/1/0577/9675/5633/files/leo_daone_home1_brand_6.png?v=1702978926",
    name: "canon",
    quantity: 50,
  },
  {
    id: 7,
    src: "https://cdn.shopify.com/s/files/1/0577/9675/5633/files/leo_daone_home1_brand_7.png?v=1702978926",
    name: "fujitsu",
    quantity: 12,
  },
  {
    id: 8,
    src: "https://cdn.shopify.com/s/files/1/0577/9675/5633/files/leo_daone_home1_brand_8.png?v=1702978926",
    name: "gizmodo",
    quantity: 41,
  },
  {
    id: 9,
    src: "https://cdn.shopify.com/s/files/1/0577/9675/5633/files/leo_daone_home1_brand_9.png?v=1702978926",
    name: "gopro",
    quantity: 4,
  },
  {
    id: 10,
    src: "https://cdn.shopify.com/s/files/1/0577/9675/5633/files/leo_daone_home1_brand_10.png?v=1702978926",
    name: "marvel",
    quantity: 41,
  },
  {
    id: 11,
    src: "https://cdn.shopify.com/s/files/1/0577/9675/5633/files/leo_daone_home1_brand_11.png?v=1702978926",
    name: "casio",
    quantity: 24,
  },
];

const PopularBrands = () => {
  return (
    <section
      aria-labelledby="popular-brands-title"
      className="flex flex-col items-center px-[30px] mx-[120px]"
    >
      <header className="flex justify-center gap-6 mb-6">
        <span
          className="inline-block px-[12px] py-[2px] border border-black rounded-full text-sm font-medium text-gray-600 bg-white uppercase"
          aria-label="Sponsors badge"
        >
          Sponsors
        </span>
      </header>

      <h2
        id="popular-brands-title"
        className="text-[60px] font-semibold uppercase leading-[1em] text-[#212121] text-center mb-[62px]"
      >
        Shop Popular Brands
      </h2>

      {/* Brands Grid */}
      <div className="w-full mb-10 max-w-[1320px] mx-auto">
        <ul
          role="list"
          className="flex flex-wrap justify-center gap-x-6 gap-y-8"
        >
          {brands.map((brand) => (
            <li key={brand.id} className="w-[200px]">
              <BrandCard brand={brand} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

const BrandCard: React.FC<{ brand: Brands }> = ({ brand }) => (
  <article
    aria-label={`${brand.name} brand card`}
    className="w-full max-w-[200px] h-[149.4px] border border-[#eaeaea] rounded-[14px] flex flex-col items-center text-center font-inter text-[16px] font-normal leading-[20px] text-[#666666]"
  >
    <figure className="w-[70px] h-[70px] flex justify-center items-center mx-auto my-[14px] mb-[13px]">
      <a
        href="#"
        aria-label={`Visit ${brand.name} website`}
        onClick={(e) => e.preventDefault()} 
        tabIndex={0}
        role="link"
      >
        <img
          src={brand.src}
          alt={`${brand.name} logo`}
          className="max-w-full max-h-full"
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          width={70}
          height={70}
        />
      </a>
    </figure>

    <div className="w-full border-t border-[#eaeaea] py-[18px] flex justify-center items-center gap-1">
      <h3 className="text-base font-bold uppercase font-barlow m-0">
        <a
          href="#"
          className="text-black hover:text-[#bdff6a]"
          aria-label={`Visit ${brand.name} website`}
          onClick={(e) => e.preventDefault()} 
          tabIndex={0}
          role="link"
        >
          {brand.name}
        </a>
      </h3>
      <span className="text-sm font-normal font-barlow text-gray-600">
        ({brand.quantity})
      </span>
    </div>
  </article>
);

export default PopularBrands;
