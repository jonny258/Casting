import ImageCard from "./imageCard";
const ImageSlider = () => {
  return (
    <div className="border-b-[1px] border-gray-200 border-gray-600 py-5">
      <h1 className="text-xl font-semibold text-white">Recommended Gaming Streams</h1>
      <div className="flex">
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
      </div>
    </div>
  );
  
};

export default ImageSlider;
