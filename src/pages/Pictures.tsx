

const Pictures = () => {
  return (
    <div className="flex w-full max-w-screen mx-auto space-x-4 ">
      {/* Left Image */}
      <div className="flex-1 my-40  ">
        <img
          src="https://cdn.shopify.com/s/files/1/0577/9675/5633/files/leo_daone_home1_image_1.jpg?v=1702967614"
          alt="Image 1"
          className="w-full h-auto"
        />
      </div>

      {/* Right Image */}
      <div className="flex-1 p-30">
        <img
          src="https://cdn.shopify.com/s/files/1/0577/9675/5633/files/leo_daone_home1_image_2.jpg?v=1702967614"
          alt="Image 2"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Pictures;