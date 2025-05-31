import CurvedTextCircle from "../components/CurvedTextCircle";

const Pictures = () => {
  const text = "Bending Text Around a Circle";
   const words = text.split(' ');
  return (
    <div className="w-full max-w-screen relative h-[150vh]">
      {/* Left Image */}
      <div className="   absolute top-44">
        <img
          src="https://cdn.shopify.com/s/files/1/0577/9675/5633/files/leo_daone_home1_image_1.jpg?v=1702967614"
          alt="Image 1"
          className="w-[79%] "
        />
      </div>

      {/* Right Image */}
      <div className="absolute right-[138px] top-[275px]">
        <img
          src="https://cdn.shopify.com/s/files/1/0577/9675/5633/files/leo_daone_home1_image_2.jpg?v=1702967614"
          alt="Image 2"
          className=" "
        />
      </div>

      {/* Text */}
      <div className="absolute z-10 top-[590px] left-[150px] ">
<CurvedTextCircle></CurvedTextCircle>
      </div>

    </div>
  );
};

export default Pictures;
