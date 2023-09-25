
 import '../assets/image/banner.jpg';
const Banner = () => {
    const backgroundImage = 'url("../assets/image/banner.jpg")';

  const divStyle = {
    backgroundImage: backgroundImage,
    backgroundSize: 'cover',
 
  };
    return (
        <div className="hero min-h-screen bg-white" style={divStyle}>
        {/* <div className="hero-overlay bg-opacity-60"></div> */}
        <div className="hero-content text-center text-white">
          <div className="">
            <h1 className="mb-5 text-2xl md:text-6xl font-bold">I Grow By Helping People In Need</h1>
            <input type="text" placeholder="search here..." className=" w-[60%] px-5 text-3xl py-5 rounded mt-7 text-black" />
            <button className="bg-[#FF444A] py-6 px-5 text-2xl font-bold">search</button>
           
          </div>
        </div>
      </div>
    );
};

export default Banner;