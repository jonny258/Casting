import ImageCard from "./imageCard";
const ImageSlider = ({streamNum}) => {
  const array = [1,2,3,4,5]
  return (
    <div className="border-b-[1px] border-gray-200 border-gray-600 py-5">
      <h1 className="text-xl font-semibold text-white">Recommended Gaming Streams</h1>
      <div className="flex">
        {array.map((item, index) => {
          return (
            <ImageCard key={index} streamRoom={[streamNum, item]}/>
          )
        })}
      </div>
    </div>
  );
  
};

export default ImageSlider;
